import { glob } from 'glob';
import fs from 'fs';

const packageJsonFiles = await glob('**/package.json', {
    ignore: '**/node_modules/**',
});

const errors = [];

const valuesMap = packageJsonFiles.reduce((res, curr) => {
    const file = fs.readFileSync(curr, 'utf8', (err, data) => {
        if (err) {
            errors.push(curr);
            return res;
        }
    });
    try {
        const json = JSON.parse(file);
        const dependencies = json?.dependencies
            ? Object.keys(json.dependencies)
            : [];
        const devDependencies = json?.devDependencies
            ? Object.keys(json.devDependencies)
            : [];
        const peerDependencies = json?.peerDependencies
            ? Object.keys(json.peerDependencies)
            : [];
        const allDeps = dependencies
            .concat(devDependencies)
            .concat(peerDependencies);

        allDeps.forEach(it => {
            if (it.startsWith('@sb1/ffe-')) {
                res[it] = res[it] ? res[it] + 1 : 1;
            }
        });
    } catch (e) {
        errors.push(curr);
    }
    return res;
}, {});

const output = Object.entries(valuesMap)
    .sort(([, valueA], [, valueB]) => valueB - valueA)
    .reduce((res, curr) => `${res}\n${curr[0]}: ${curr[1]}`, '');

console.log('usage:', output);
if (errors.length) {
    console.log(`errors: ${errors.length} (${errors.join(', ')})`);
}
