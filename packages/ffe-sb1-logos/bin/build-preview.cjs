#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const logos = require('../metadata');

const template = fs.readFileSync(
    path.resolve(__dirname, '../src/preview.hbs'),
    'utf-8',
);

const html = Handlebars.compile(template)({ logos });

fs.writeFileSync(path.resolve(__dirname, '../preview.html'), html);
