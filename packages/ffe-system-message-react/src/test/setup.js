import jsdom from 'jsdom';
import 'babel-polyfill';

const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!DOCTYPE html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
Object.keys(window).forEach(key => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});
global.navigator = global.window.navigator;
global.expect = require('expect.js');
