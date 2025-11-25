#!/usr/bin/env node
// check-workflow-npm-usage.js
// Fails if any workflow uses forbidden npm commands or omits --ignore-scripts on npm ci

const fs = require('fs');
const path = require('path');

const WORKFLOWS_DIR = path.join(process.cwd(), '.github', 'workflows');
const FORBIDDEN = [
    /npm\s+i(\s|$)/,
    /npm\s+install(\s|$)/,
    /npm\s+clean-install(\s|$)/,
];
const NPM_CI_REGEX = /npm\s+ci(?!.*--ignore-scripts)/;

let failed = false;

fs.readdirSync(WORKFLOWS_DIR).forEach(file => {
    if (!file.endsWith('.yml') && !file.endsWith('.yaml')) return;
    const filePath = path.join(WORKFLOWS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    lines.forEach((line, idx) => {
        FORBIDDEN.forEach(re => {
            if (re.test(line)) {
                console.error(
                    `Forbidden npm command in ${file}:${idx + 1}: ${line.trim()}`,
                );
                failed = true;
            }
        });
        if (NPM_CI_REGEX.test(line)) {
            console.error(
                `'npm ci' missing --ignore-scripts in ${file}:${idx + 1}: ${line.trim()}`,
            );
            failed = true;
        }
    });
});

if (failed) {
    process.exit(1);
} else {
    console.log('All workflow npm usage checks passed.');
}
