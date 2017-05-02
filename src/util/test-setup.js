import { JSDOM } from 'jsdom';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());
chai.use(sinonChai);

global.window = new JSDOM('<!DOCTYPE html><html><body></body></html>').window;
global.document = global.window.document;
