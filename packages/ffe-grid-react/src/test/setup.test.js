import { JSDOM } from 'jsdom';

global.expect = require('expect.js');

const dom = new JSDOM();
global.window = dom.window;

global.document = window.document;
global.history = window.history;
global.navigator = window.navigator;
