/*eslint no-unused-expressions:0*/
/*eslint-env mocha*/
import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import RadioSwitch from './radio-switch';

chai.use(chaiEnzyme);

describe('<RadioSwitch />', () => {

    describe('basic rendering', () => {
        const checkedValue = 2;
        const wrapper = shallow(
            <RadioSwitch
                firstOption={ { label: 'one', value: 1 } }
                lastOption={ { label: 'two', value: 2 } }
                value={ checkedValue }
            />
        );

        it('should set RadioButtonGroup prop inline to true', () => {
            expect(wrapper.find('RadioButtonGroup').prop('inline')).to.be.true;
        });

        it('should render two RadioBase children', () => {
            expect(wrapper.find('RadioBase')).to.have.lengthOf(2);
        });

        it('should pass the correct labels and values', () => {
            expect(wrapper.find('RadioBase[label="one"]').prop('value'))
                .to.be.equal(1);
            expect(wrapper.find('RadioBase[label="two"]').prop('value'))
                .to.be.equal(2);
        });

        it('should mark the correct switch as checked based on value param', () => {
            expect(wrapper.find('RadioBase[label="two"]').prop('value'))
                .to.be.equal(checkedValue);
            expect(wrapper.find('RadioBase[label="two"]').prop('checked'))
                .to.be.true;

            expect(wrapper.find('RadioBase[label="one"]').prop('value'))
                .not.to.be.equal(checkedValue);
            expect(wrapper.find('RadioBase[label="one"]').prop('checked'))
                .to.be.false;
        });
    });

});
