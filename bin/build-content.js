const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const marked = require('marked');
const Handlebars = require('handlebars');

const settings = require('../styleguide.content.js');

const promisedMap = (arr, cb) => Promise.all(arr.map(cb));

const resolveDir = dir => path.normalize(path.join(__dirname, '..', dir));

require(resolveDir(settings.helpers));

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const createReader = relDir => {
    const absDir = resolveDir(relDir);
    return fname => readFile(path.join(absDir, fname), 'utf8');
};

const createWriter = relDir => {
    const absDir = resolveDir(relDir);
    return fname => {
        const file = path.join(absDir, fname);
        return data =>
            writeFile(file, data).then(() => console.log(`Wrote ${file}.`));
    };
};

const readFromBaseDir = createReader('.');
const readFromContentDir = createReader(settings.contentDir);
const writeToOutputDir = createWriter(settings.outputDir);

const mkDir = dir => promisify(mkdirp)(resolveDir(dir));

const prerenderSections = sectionsDef => {
    const getTarget = source =>
        source.replace(/(\/index)?\.md$/, '').replace(/\//g, '_') || 'index';

    const parseSections = nodes =>
        promisedMap(nodes, ({ name, content, sections = [] }) =>
            Promise.all([
                readFromContentDir(content).then(md => marked(md)),
                parseSections(sections),
            ]).then(([html, parsedSections]) => ({
                name,
                source: content,
                target: getTarget(content),
                content: html,
                sections: parsedSections,
            })),
        );

    return parseSections(sectionsDef);
};

const getTemplateCompiler = fname =>
    readFromBaseDir(fname)
        .then(template => Handlebars.compile(template))
        .then(compile => opts => Promise.resolve(compile(opts)));

const registerPartials = partialsDef =>
    promisedMap(Object.entries(partialsDef), ([key, fname]) =>
        readFromBaseDir(fname).then(partial =>
            Handlebars.registerPartial(key, partial),
        ),
    );

Promise.all([
    prerenderSections(settings.sections),
    getTemplateCompiler(settings.template),
    registerPartials(settings.partials),
    mkDir(settings.outputDir),
])
    .then(([sections, compile]) =>
        promisedMap(sections, section =>
            compile({
                ...settings.context,
                sections,
                section,
            }).then(writeToOutputDir(`${section.target}.html`)),
        ),
    )
    .catch(err => console.error(err));
