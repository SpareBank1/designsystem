import React from 'react';
import { shallow } from 'enzyme';

import { ActionButton } from './index';

const defaultProps = {
    onClick: f => f,
    children: <span>Hello, World!</span>,
};

const getWrapper = props =>
    shallow(<ActionButton {...defaultProps} {...props} />);

describe('ActionButton', () => {
    it('renders an action button', () => {
        const button = getWrapper();
        expect(button.props()).toHaveProperty('buttonType', 'action');
    });

    it('passes any prop on to Button', () => {
        const button = getWrapper({
            'data-analytics-track': 'logMe',
        });
        expect(button
                .dive()
                .props()).toHaveProperty('data-analytics-track', 'logMe');
    });

    describe('👻 ghost modifier 👻', () => {
        it('renders without the --ghost modifier if ghost is false', () => {
            const button = getWrapper({
                ghost: false,
            });
            expect(button.hasClass('ffe-action-button--ghost')).toBe(false);
        });

        it('renders the --ghost modifier if ghost is true', () => {
            const button = getWrapper({
                ghost: true,
            });
            expect(button.hasClass('ffe-action-button--ghost')).toBe(true);
        });

        it('renders the --ghost modifier alongside the className value', () => {
            const button = getWrapper({
                className: 'working-class',
                ghost: true,
            });
            expect(button.hasClass('working-class')).toBe(true);
            expect(button.hasClass('ffe-action-button--ghost')).toBe(true);
        });
    });
});
