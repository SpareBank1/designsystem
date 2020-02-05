const fs = require('fs');
const path = require('path');
const Case = require('case');
const mkdirp = require('mkdirp');

// These are the files we want to convert to JavaScript
const FILES_WITH_VARIABLES = ['colors', 'breakpoints', 'spacing'];

// First, create the lib directory if it doesn't exist
mkdirp.sync(path.resolve(__dirname, '..', 'lib'));

// Then, let's process each file!
FILES_WITH_VARIABLES.forEach(filename => {
    const lessContent = fs.readFileSync(
        path.resolve(__dirname, '..', 'less', `${filename}.less`),
        'utf8',
    );

    // This is done in a ridiculously step by step fashion to increase
    // readability. Basically, this changes a LESS file into a JavaScript object
    const variables = lessContent
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('@') && !line.startsWith('@import'))
        .map(line => line.split(': '))
        .filter(([, value]) => !value.includes('@'))
        .map(([key, value]) => [key.replace('@ffe-', ''), value])
        .map(([key, value]) => [key.replace('@', ''), value])
        .reduce(
            (allVars, [key, value]) => ({
                ...allVars,
                [Case.camel(key)]: value.substring(0, value.indexOf(';')),
            }),
            {},
        );

    // Create the output string, complete with a header explaining where it came
    // from and how to change it.
    const tsContent = `// DO NOT MODIFY!
// This file is created automatically by ffe-core/bin/build.js, and is based on
// the ffe-core/less/${filename}.less file. Change the value there instead.
${Object.entries(variables)
    .map(([key, value]) => `export const ${key} = "${value}";`)
    .join('\n')}
`;
    // Write the formatted string to its own file
    fs.writeFileSync(
        path.resolve(__dirname, '..', 'lib', `${filename}.ts`),
        tsContent,
    );
});

// Finally, let's create an index file that exports all variables
const indexContent = `// DO NOT MODIFY!
// This file is created automatically by ffe-core/bin/build.js.
${FILES_WITH_VARIABLES.map(filename => `export * from './${filename}';`).join(
    '\n',
)}
`;

fs.writeFileSync(
    path.resolve(__dirname, '..', 'lib', 'index.ts'),
    indexContent,
);
