import { JSDOM } from 'jsdom';
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const dom = new JSDOM();

global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;
global.expect = require('expect.js');
