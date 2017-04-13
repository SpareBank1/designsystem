import 'babel-polyfill';
import jsdom from 'jsdom';
import expectjs from 'expect.js';

global.document = jsdom.jsdom('');
global.window = document.defaultView;
global.navigator = window.navigator;
global.expect = expectjs;
