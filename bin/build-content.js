const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const marked = require('marked');
const Handlebars = require('handlebars');

const settings = require('../styleguide.content.js');
const styleguidistSettings = require('../styleguide.config.js');

const promisedMap = (arr, cb) => Promise.all(arr.map(cb));

const resolveDir = dir => path.normalize(path.join(__dirname, '..', dir));

require(resolveDir(settings.helpers));

const mkdir = dir => promisify(mkdirp)(resolveDir(dir));

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const dataFromFileInDirReader = dir => fname =>
    readFile(path.join(dir, fname), 'utf8');

const createReader = dir => dataFromFileInDirReader(resolveDir(dir));

const dataToFileWriter = file => data =>
    writeFile(file, data).then(() => console.log(`Wrote ${file}.`));

const dataToFileInDirWriter = dir => fname =>
    dataToFileWriter(path.join(dir, fname));

const createWriter = relDir => dataToFileInDirWriter(resolveDir(relDir));


const readFromBaseDir = createReader('.');

const readFromContentDir = createReader(settings.contentDir);

const writeToOutputDir = createWriter(settings.outputDir);

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

const getStyleguidistCompiler = (source, destination) => {
    return readFile(resolveDir(source), 'utf8')
        .then(template => Handlebars.compile(template))
        .then(compile => opts =>
            Promise.resolve(compile(opts)).then(
                dataToFileWriter(resolveDir(destination)),
            ),
        );
};

const registerPartials = partialsDef =>
    promisedMap(Object.entries(partialsDef), ([key, fname]) =>
        readFromBaseDir(fname).then(partial =>
            Handlebars.registerPartial(key, partial),
        ),
    );

Promise.all([
        prerenderSections(settings.sections),
    getTemplateCompiler(
        settings.template
    ),
    getStyleguidistCompiler(
        settings.styleguidistTemplate,
        styleguidistSettings.template
    ),
    registerPartials(settings.partials),
    mkdir(settings.outputDir),
])
    .then(([sections, compile, compileStyleguidist]) =>
        Promise.all([
            promisedMap(sections, section => compile({
                    ...settings.context,
                    sections,
                    section,
                }).then(writeToOutputDir(`${section.target}.html`))
            ),
            compileStyleguidist({
                ...settings.context,
                sections,
            }),
        ])
    )
    .catch(err => console.error(err));
