import jsdom from 'jsdom';
import 'babel-polyfill';

global.document = jsdom.jsdom('');
global.window = document.defaultView;
global.navigator = window.navigator;
global.expect = require('expect.js');
