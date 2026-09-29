#!/usr/bin/env node
// verify-published-versions.js <publish.log>
// Fails if lerna planned to publish a package but never reported it as published.
// Guards against a partially published release: after a Sigstore 409, lerna
// silently drops packages it had not started yet, without a single log line.
//
// Reads lerna's own output instead of querying npm, because the registry can
// take several minutes before a freshly published version is readable.

const fs = require('fs');

const ANSI = /\x1b\[[0-9;]*m/g;
const FOUND = /^Found \d+ packages? to publish:$/;
const PLANNED = /^ - (\S+) => (\S+)$/;
const PUBLISHED = /^lerna success published (@?\S+) (\S+)$/;

// The first "Found" block is the full plan. A retry prints its own, shorter
// block with only the packages that were left.
function readPlanned(lines) {
    const start = lines.findIndex(line => FOUND.test(line));
    if (start === -1) return null;
    const planned = [];
    for (const line of lines.slice(start + 1)) {
        const match = PLANNED.exec(line);
        if (!match) break;
        planned.push({ name: match[1], version: match[2] });
    }
    return planned;
}

function readPublished(lines) {
    return new Set(
        lines
            .map(line => PUBLISHED.exec(line))
            .filter(Boolean)
            .map(([, name, version]) => `${name}@${version}`),
    );
}

function writeSummary(problems) {
    if (!process.env.GITHUB_STEP_SUMMARY) return;
    const lines = problems.length
        ? [
              '## Partially published release',
              '',
              'lerna planned to publish these packages but never reported them as published:',
              '',
              '| Package | Version |',
              '| --- | --- |',
              ...problems.map(
                  ({ name, version }) => `| \`${name}\` | ${version} |`,
              ),
              '',
              'Run the `Republish` workflow to publish the missing versions.',
          ]
        : ['## lerna published every planned package'];
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${lines.join('\n')}\n`);
}

function main() {
    const logPath = process.argv[2];
    if (!logPath) {
        console.error('Usage: verify-published-versions.js <publish.log>');
        process.exit(2);
    }

    const lines = fs
        .readFileSync(logPath, 'utf8')
        .replace(ANSI, '')
        .split(/\r?\n/)
        .map(line => line.trimEnd());

    const planned = readPlanned(lines);
    if (!planned) {
        console.error(
            `No "Found N packages to publish" in ${logPath}; lerna did not get as far as publishing.`,
        );
        process.exit(1);
    }

    const published = readPublished(lines);
    const problems = planned.filter(
        ({ name, version }) => !published.has(`${name}@${version}`),
    );

    writeSummary(problems);

    if (problems.length) {
        problems.forEach(({ name, version }) =>
            console.error(`not published: ${name}@${version}`),
        );
        console.error(
            `\n${problems.length} of ${planned.length} packages were not published.`,
        );
        process.exit(1);
    }

    console.log(`lerna published all ${planned.length} planned packages.`);
}

main();
