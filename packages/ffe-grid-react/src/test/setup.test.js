import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
global.expect = require('expect.js');

const dom = new JSDOM();
global.window = dom.window;

global.document = window.document;
global.history = window.history;
global.navigator = window.navigator;
