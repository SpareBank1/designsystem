import React from 'react';
import { shallow } from 'enzyme';
import ContentContainer from './ContentContainer';

const defaultProps = {
    children: <p>Children!</p>,
};
const getWrapper = (props = {}) => shallow(
    <ContentContainer {...defaultProps} {...props} />
);

describe('<ContentContainer />', () => {
    test('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).toBe(1);
    });

    test('adds ffe-content-container class by default', () => {
        const wrapper = getWrapper({ small: true });
        expect(wrapper.hasClass('ffe-content-container')).toBe(true);
    });

    test('adds the --sm modifier when small prop is true', () => {
        const wrapper = getWrapper({ small: true });
        expect(wrapper.hasClass('ffe-content-container--sm')).toBe(true);
    });

    test('adds the --lg modifier when large prop is true', () => {
        const wrapper = getWrapper({ large: true });
        expect(wrapper.hasClass('ffe-content-container--lg')).toBe(true);
    });

    test('adds the --bg-sand modifier when bgSand prop is true', () => {
        const wrapper = getWrapper({ bgSand: true });
        expect(wrapper.hasClass('ffe-content-container--bg-sand')).toBe(true);
    });

    test('adds the --bg-grey modifier when bgGrey prop is true', () => {
        const wrapper = getWrapper({ bgGrey: true });
        expect(wrapper.hasClass('ffe-content-container--bg-grey')).toBe(true);
    });

    test('adds the --text-left modifier when textLeft prop is true', () => {
        const wrapper = getWrapper({ textLeft: true });
        expect(wrapper.hasClass('ffe-content-container--text-left')).toBe(true);
    });

    test('adds the --no-space modifier when noSpace prop is true', () => {
        const wrapper = getWrapper({ noSpace: true });
        expect(wrapper.hasClass('ffe-content-container--no-space')).toBe(true);
    });
});
