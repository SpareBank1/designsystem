import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

describe('Button', () => {
    describe('by default', () => {
        let button;

        beforeEach(() => {
            button = shallow(<Button>Hello</Button>);
        });

        it('renders a primary button', () => {
            expect(button.hasClass('ffe-primary-button')).toBe(true);
        });

        it('uses child-text as label', () => {
            const label = button.find('.ffe-primary-button__label-text');
            expect(label.text()).toBe('Hello');
        });

        it('is not disabled', () => {
            expect(button.props()).not.toHaveProperty('disabled', true);
            expect(button.props()).not.toHaveProperty('aria-disabled', true);
        });

        it('does not have --loading modifier', () => {
            expect(button.hasClass('ffe-primary-button--loading')).toBe(false);
            const label = button.find('.ffe-primary-button__label-text');
            expect(label.hasClass('ffe-primary-button__label-text--loading')).toBe(false);
        });

        it('has aria-hidden on spinner', () => {
            expect(button
                    .find('.ffe-primary-button__label-spinner')
                    .prop('aria-hidden')).toBe(true);
        });
    });

    describe('given prop', () => {
        describe('of random name', () => {
            it('passes it on', () => {
                const button = shallow(<Button data-analytics-track="logMe" />);
                expect(button.props()).toHaveProperty('data-analytics-track', 'logMe');
            });
        });

        describe('label', () => {
            it('uses that as label text', () => {
                const wrapper = shallow(<Button label="Hello" />);
                expect(wrapper
                        .find('.ffe-primary-button__label-text')
                        .text()).toBe('Hello');
            });
        });

        describe('buttonType', () => {
            it('has correct ffe button type class', () => {
                const button = shallow(<Button buttonType="action" />);
                expect(button.hasClass('ffe-action-button')).toBe(true);
            });
        });

        describe('isLoading', () => {
            let button;

            beforeEach(() => {
                button = shallow(<Button isLoading={true} />);
            });

            it('adds --loading modifier', () => {
                expect(button.hasClass('ffe-primary-button--loading')).toBe(true);

                const label = button.find('.ffe-primary-button__label-text');
                expect(label.hasClass('ffe-primary-button__label-text--loading')).toBe(true);
            });

            it('sets aria-hidden=false on spinner', () => {
                const spinner = button.find(
                    '.ffe-primary-button__label-spinner',
                );
                expect(spinner.props()).toHaveProperty('aria-hidden', false);
            });

            it('disables the button', () => {
                expect(button.props()).toHaveProperty('disabled', true);
            });

            it('marks button as aria-busy', () => {
                expect(button.props()).toHaveProperty('aria-busy', true);
            });
        });

        describe('disableButton', () => {
            it('disables the button', () => {
                const button = shallow(<Button disableButton={true} />);
                expect(button.props()).toHaveProperty('disabled', true);
                expect(button.props()).toHaveProperty('aria-disabled', true);
            });
        });

        describe('onClick', () => {
            it('runs the passed function when clicked', () => {
                const onClick = jest.fn();
                const button = shallow(<Button onClick={onClick} />);
                button.simulate('click');
                expect(onClick).toHaveBeenCalledTimes(1);
            });
        });

        describe('isTabbable', () => {
            it('should not set tabIndex', () => {
                const button = shallow(<Button isTabbable={true} />);
                expect(button.props()).not.toHaveProperty('tabIndex');
            });
        });

        describe('className', () => {
            it('has given class', () => {
                const button = shallow(<Button className="testClass" />);
                expect(button.hasClass('testClass')).toBe(true);
            });
        });

        describe('autoFocus', () => {
            it('can be autoFocused', () => {
                const wrapper = shallow(<Button autoFocus={true} />);
                expect(wrapper
                        .find('button')
                        .prop('autoFocus')).toBe(true);
            });
        });

        describe('condensed', () => {
            it('has condensed class', () => {
                const button = shallow(<Button condensed={true} />);
                expect(button.hasClass('ffe-primary-button--condensed')).toBe(true);
            });
        });

        describe('element', () => {
            it('sets the rendered element', () => {
                const link = shallow(<Button element="a" href="/path">
                        Link
                    </Button>);
                expect(link.is('a')).toBe(true);
            });

            it('allows you to pass a component', () => {
                const Link = ({ to, ...props }) => <a href={to} {...props} />; // eslint-disable-line react/prop-types
                const link = shallow(<Button element={Link} to="/path" />);
                expect(link.is('Link')).toBe(true);
            });
        });
    });
});
