#!/usr/bin/env node
// verify-published-versions.js
// Fails if any workspace package's local version is missing from the npm registry.
// Guards against a partially published release, which lerna reports as a single
// WARN line among tens of thousands of log lines.

const fs = require('fs');
const path = require('path');

const REGISTRY = 'https://registry.npmjs.org';
const REQUEST_CONCURRENCY = 10;
const ATTEMPTS = 3;

function resolvePackageDirs() {
    const lernaConfig = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'lerna.json'), 'utf8'),
    );
    return lernaConfig.packages.flatMap(pattern => {
        if (!pattern.endsWith('/*')) return [pattern];
        const parent = pattern.slice(0, -2);
        return fs
            .readdirSync(path.join(process.cwd(), parent), {
                withFileTypes: true,
            })
            .filter(entry => entry.isDirectory())
            .map(entry => path.join(parent, entry.name));
    });
}

function readPackages() {
    return resolvePackageDirs()
        .map(dir => {
            const manifestPath = path.join(process.cwd(), dir, 'package.json');
            if (!fs.existsSync(manifestPath)) return null;
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            if (manifest.private) return null;
            return { dir, name: manifest.name, version: manifest.version };
        })
        .filter(Boolean);
}

// 'published' | 'missing' | 'unknown' — 'unknown' must not be reported as
// missing, otherwise a network blip would look like a failed release.
async function checkPackage({ name, version }) {
    let lastError = 'unknown';
    for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
        try {
            const response = await fetch(`${REGISTRY}/${name}/${version}`);
            if (response.status === 200) return 'published';
            if (response.status === 404) return 'missing';
            lastError = `HTTP ${response.status}`;
        } catch (error) {
            lastError = error.message;
        }
        if (attempt < ATTEMPTS) {
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
    console.error(`Could not verify ${name}@${version}: ${lastError}`);
    return 'unknown';
}

async function mapWithConcurrency(items, limit, mapper) {
    const results = [];
    let next = 0;
    const workers = Array.from({ length: Math.min(limit, items.length) }, () =>
        (async () => {
            while (next < items.length) {
                const index = next++;
                results[index] = await mapper(items[index]);
            }
        })(),
    );
    await Promise.all(workers);
    return results;
}

function writeSummary(problems) {
    if (!process.env.GITHUB_STEP_SUMMARY) return;
    const lines = problems.length
        ? [
              '## Partially published release',
              '',
              'The following packages were bumped but never reached the registry:',
              '',
              '| Package | Version | Status |',
              '| --- | --- | --- |',
              ...problems.map(
                  ({ name, version, status }) =>
                      `| \`${name}\` | ${version} | ${status} |`,
              ),
              '',
              'Run the `Republish` workflow to publish the missing versions.',
          ]
        : ['## All package versions are present on npm'];
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${lines.join('\n')}\n`);
}

async function main() {
    const packages = readPackages();
    const statuses = await mapWithConcurrency(
        packages,
        REQUEST_CONCURRENCY,
        checkPackage,
    );
    const problems = packages
        .map((pkg, index) => ({ ...pkg, status: statuses[index] }))
        .filter(pkg => pkg.status !== 'published');

    writeSummary(problems);

    if (problems.length) {
        problems.forEach(({ name, version, status }) =>
            console.error(`${status}: ${name}@${version}`),
        );
        console.error(
            `\n${problems.length} of ${packages.length} packages are not confirmed on npm.`,
        );
        process.exit(1);
    }

    console.log(`All ${packages.length} package versions are present on npm.`);
}

main();
