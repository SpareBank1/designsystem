/*eslint-env mocha */
/*eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Button from './index';

describe('Button', () => {
    describe('by default', () => {
        let button;

        beforeEach(() => {
            button = shallow(<Button>Hello</Button>);
        });

        it('renders a primary button', () => {
            expect(button).to.have.className('ffe-primary-button');
        });

        it('uses child-text as label', () => {
            const label = button.find('.ffe-primary-button__label-text');
            expect(label).to.have.text('Hello');
        });

        it('is not disabled', () => {
            expect(button).to.not.have.prop('disabled');
            expect(button).to.not.have.prop('aria-disabled');
        });

        it('does not have --loading modifier', () => {
            expect(button).to.not.have.className('ffe-primary-button--loading');

            const label = button.find('.ffe-primary-button__label-text');
            expect(label).to.not.have.className('ffe-primary-button__label-text--loading');
        });

        it('has aria-hidden on spinner', () => {
            expect(button.find('.ffe-primary-button__label-spinner').prop('aria-hidden'))
                .to.be.true;
        });
    });

    describe('given prop', () => {
        describe('of random name', () => {
            it('passes it on', () => {
                const button = shallow(<Button data-analytics-track="logMe" />);
                expect(button).to.have.attr('data-analytics-track', 'logMe');
            });
        });

        describe('label', () => {
            it('uses that as label text', () => {
                const wrapper = shallow(<Button label="Hello" />);
                expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');
            });
        });

        describe('buttonType', () => {
            it('has correct ffe button type class', () => {
                const button = shallow(<Button buttonType="someRandomType" />);
                expect(button).to.have.className('ffe-someRandomType-button');
            });
        });

        describe('isLoading', () => {
            let button;

            beforeEach(() => {
                button = shallow(<Button isLoading={true} />);
            });

            it('adds --loading modifier', () => {
                expect(button).to.have.className('ffe-primary-button--loading');

                const label = button.find('.ffe-primary-button__label-text');
                expect(label).to.have.className('ffe-primary-button__label-text--loading');
            });

            it('sets aria-hidden=false on spinner', () => {
                const spinner = button.find('.ffe-primary-button__label-spinner');
                expect(spinner).to.have.prop('aria-hidden', false);
            });

            it('disables the button', () => {
                expect(button).to.have.prop('disabled', true);
            });

            it('marks button as aria-busy', () => {
                expect(button).to.have.prop('aria-busy', true);
            });
        });

        describe('disableButton', () => {
            it('disables the button', () => {
                const button = shallow(<Button disableButton={true} />);
                expect(button).to.have.prop('disabled', true);
                expect(button).to.have.prop('aria-disabled', true);
            });
        });

        describe('onClick', () => {
            it('runs the passed function when clicked', () => {
                const onClick = spy();
                const button = shallow(<Button onClick={onClick} />);
                button.simulate('click');
                expect(onClick.calledOnce).to.be.true;
            });
        });

        describe('isTabbable', () => {
            it('should not set tabIndex', () => {
                const button = shallow(<Button isTabbable={true} />);
                expect(button).to.not.have.prop('tabIndex');
            });
        });

        describe('className', () => {
            it('has given class', () => {
                const button = shallow(<Button className="testClass" />);
                expect(button).to.have.className('testClass');
            });
        });

        describe('type', () => {
            it('can be type="button"', () => {
                const wrapper = shallow(<Button type="button" />);
                expect(wrapper.find('button').is('[type="button"]')).to.be.true;
            });

            it('can be type="reset"', () => {
                const wrapper = shallow(<Button type="reset" />);
                expect(wrapper.find('button').is('[type="reset"]')).to.be.true;
            });

            it('can be type="submit"', () => {
                const wrapper = shallow(<Button type="submit" />);
                expect(wrapper.find('button').is('[type="submit"]')).to.be.true;
            });
        });

        describe('autoFocus', () => {
            it('can be autoFocused', () => {
                const wrapper = shallow(<Button autoFocus={true} />);
                expect(wrapper.find('button').prop('autoFocus')).to.be.true;
            });
        });

        describe('condensed', () => {
            it('has condensed class', () => {
                const button = shallow(<Button condensed={true} />);
                expect(button).to.have.className('ffe-primary-button--condensed');
            });
        });
    });
});
