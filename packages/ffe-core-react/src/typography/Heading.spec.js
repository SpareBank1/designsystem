import React from 'react';
import { shallow } from 'enzyme';

import * as Headings from './Heading';

const defaultProps = {
    el: Headings.Heading1,
    children: 'Heading',
};

const getWrapper = (props = {}) => {
    const {
        el: Heading,
        ...finalProps
    } = { ...defaultProps, ...props };
    return shallow(<Heading {...finalProps} />);
};

describe('<Heading1...6 />', () => {
    test('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).toBe(1);
    });

    test('renders the correct HTML element', () => {
        expect(getWrapper({ el: Headings.Heading1 }).find('h1').length).toBe(1);
        expect(getWrapper({ el: Headings.Heading2 }).find('h2').length).toBe(1);
        expect(getWrapper({ el: Headings.Heading3 }).find('h3').length).toBe(1);
        expect(getWrapper({ el: Headings.Heading4 }).find('h4').length).toBe(1);
        expect(getWrapper({ el: Headings.Heading5 }).find('h5').length).toBe(1);
        expect(getWrapper({ el: Headings.Heading6 }).find('h6').length).toBe(1);
    });

    test('sets the correct class as default', () => {
        expect(getWrapper({ el: Headings.Heading1 }).hasClass('ffe-h1')).toBe(true);
        expect(getWrapper({ el: Headings.Heading2 }).hasClass('ffe-h2')).toBe(true);
        expect(getWrapper({ el: Headings.Heading3 }).hasClass('ffe-h3')).toBe(true);
        expect(getWrapper({ el: Headings.Heading4 }).hasClass('ffe-h4')).toBe(true);
        expect(getWrapper({ el: Headings.Heading5 }).hasClass('ffe-h5')).toBe(true);
        expect(getWrapper({ el: Headings.Heading6 }).hasClass('ffe-h6')).toBe(true);
    });

    test('overrides the class via the lookLike prop', () => {
        const wrapper = getWrapper({ lookLike: 3 });
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('h1').hasClass('ffe-h3')).toBe(true);
    });

    test('adds --error class if error prop is true', () => {
        const wrapper = getWrapper({ error: true });
        expect(wrapper.hasClass('ffe-h1--error')).toBe(true);
    });

    test('adds --no-margin class if noMargin prop is true', () => {
        const wrapper = getWrapper({ noMargin: true });
        expect(wrapper.hasClass('ffe-h1--no-margin')).toBe(true);
    });

    test('adds --with-border class if withBorder prop is true', () => {
        const wrapper = getWrapper({ withBorder: true });
        expect(wrapper.hasClass('ffe-h1--with-border')).toBe(true);
    });

    test('does not add conditional classes if no props are given', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-h1--error')).toBe(false);
        expect(wrapper.hasClass('ffe-h1--no-margin')).toBe(false);
        expect(wrapper.hasClass('ffe-h1--with-border')).toBe(false);
    });
});
