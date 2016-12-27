/*eslint-env mocha*/
/*eslint no-unused-expressions:0*/
import { expect } from 'chai';
import DefaultSpinner, { Spinner, InlineSpinner, LargeSpinner } from './index';

describe('entrypoint', () => {

    it('shall export a default spinner', () => {
        expect(DefaultSpinner).to.exist;
    });

    it('shall export a Spinner', () => {
        expect(Spinner).to.exist;
    });

    it('shall export an InlineSpinner', () => {
        expect(InlineSpinner).to.exist;
    });

    it('shall export a LargeSpinner', () => {
        expect(LargeSpinner).to.exist;
    });

    it('shall export the default spinner as the same as Spinner', () => {
        expect(DefaultSpinner).to.be.equal(Spinner);
    });
});
