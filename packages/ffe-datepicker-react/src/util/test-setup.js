import { JSDOM } from 'jsdom';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(chaiEnzyme());
chai.use(sinonChai);

global.window = new JSDOM('<!DOCTYPE html><html><body></body></html>').window;
global.document = global.window.document;

Enzyme.configure({adapter: new Adapter()});
