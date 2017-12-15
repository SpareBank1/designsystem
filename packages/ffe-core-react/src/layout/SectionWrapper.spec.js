import React from 'react';
import { shallow } from 'enzyme';
import SectionWrapper from './SectionWrapper';

const defaultProps = {
    children: <p>Children!</p>,
};
const getWrapper = (props = {}) => shallow(
    <SectionWrapper {...defaultProps} {...props} />
);

describe('<SectionWrapper />', () => {
    test('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).toBe(1);
    });

    test('adds ffe-section-wrapper class by default', () => {
        const wrapper = getWrapper({ small: true });
        expect(wrapper.hasClass('ffe-section-wrapper')).toBe(true);
    });

    test('adds the --bg-blue class when bgBlue prop is true', () => {
        const wrapper = getWrapper({ bgBlue: true });
        expect(wrapper.hasClass('ffe-section-wrapper--bg-blue')).toBe(true);
    });

    test('adds the --bg-blue-flat class when bgBlueFlat prop is true', () => {
        const wrapper = getWrapper({ bgBlueFlat: true });
        expect(wrapper.hasClass('ffe-section-wrapper--bg-blue-flat')).toBe(true);
    });

    test('adds the --bg-sand class when bgSand prop is true', () => {
        const wrapper = getWrapper({ bgSand: true });
        expect(wrapper.hasClass('ffe-section-wrapper--bg-sand')).toBe(true);
    });

    test('adds the --bg-grey class when bgGrey prop is true', () => {
        const wrapper = getWrapper({ bgGrey: true });
        expect(wrapper.hasClass('ffe-section-wrapper--bg-grey')).toBe(true);
    });
});
