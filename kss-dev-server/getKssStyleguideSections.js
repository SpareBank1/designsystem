const path = require('path');
const { promisify } = require('util');
const kss = require('kss');

const readFile = promisify(require('jsonfile').readFile);

module.exports = configFile => {
    const baseDir = path.dirname(configFile);
    return readFile(configFile).then(({ source }) =>
        kss({
            json: true,
            source: source.map(d => path.resolve(baseDir, d)),
        }).then(d =>
            d.sections.map(section => ({
                ...section,
                source: {
                    ...section.source,
                    path: section.source.path.replace(`${baseDir}/`, ''),
                },
            })),
        ),
    );
};
