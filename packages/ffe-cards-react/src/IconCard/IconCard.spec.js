import React from 'react';

import IconCard from './IconCard';
import Symbol from '@sb1/ffe-symbols-react';
import { Text } from '../components';

const getWrapper = props =>
    shallow(
        <IconCard
            icon={<Symbol ariaLabel={null}>savings</Symbol>}
            {...props}
        />,
    );
const children = <div>Hello world</div>;

describe('IconCard', () => {
    it('should render correct class and contain a div with body class', () => {
        const wrapper = getWrapper({ children });

        expect(wrapper.hasClass('ffe-icon-card')).toBe(true);
        expect(wrapper.find('.ffe-icon-card__body').exists()).toBe(true);
        expect(
            wrapper
                .find('.ffe-icon-card__body')
                .children()
                .first()
                .getElement(),
        ).toEqual(children);
    });

    it('should render icon, with an added class', () => {
        const wrapper = getWrapper({
            icon: (
                <Symbol ariaLabel={null} className="my-custom-class">
                    savings
                </Symbol>
            ),
        });

        expect(wrapper.find(Symbol).hasClass('ffe-icon-card__icon')).toBe(true);
        expect(wrapper.find(Symbol).hasClass('my-custom-class')).toBe(true);
    });

    it('should add modifying classes when modifiers are given', () => {
        const wrapper = getWrapper({
            condensed: true,
        });

        expect(wrapper.hasClass('ffe-icon-card--condensed')).toBe(true);
    });

    it('should render children as a function', () => {
        const wrapper = getWrapper({
            children: Components => (
                <Components.Text>Hello world</Components.Text>
            ),
        });

        expect(wrapper.find(Text).exists()).toBe(true);
    });

    it('should render my custom class', () => {
        const wrapper = getWrapper({ className: 'my-custom-class' });

        expect(wrapper.hasClass('my-custom-class')).toBe(true);
    });
});
