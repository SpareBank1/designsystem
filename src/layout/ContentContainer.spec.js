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

    test('adds the --sm class when small prop is true', () => {
        const wrapper = getWrapper({ small: true });
        expect(wrapper.hasClass('ffe-content-container--sm')).toBe(true);
    });

    test('adds the --lg class when large prop is true', () => {
        const wrapper = getWrapper({ large: true });
        expect(wrapper.hasClass('ffe-content-container--lg')).toBe(true);
    });

    test('adds the --bg-sand class when bgSand prop is true', () => {
        const wrapper = getWrapper({ bgSand: true });
        expect(wrapper.hasClass('ffe-content-container--bg-sand')).toBe(true);
    });

    test('adds the --bg-grey class when bgGrey prop is true', () => {
        const wrapper = getWrapper({ bgGrey: true });
        expect(wrapper.hasClass('ffe-content-container--bg-grey')).toBe(true);
    });

    test('adds the --text-left class when textLeft prop is true', () => {
        const wrapper = getWrapper({ textLeft: true });
        expect(wrapper.hasClass('ffe-content-container--text-left')).toBe(true);
    });

    test('adds the --no-space class when noSpace prop is true', () => {
        const wrapper = getWrapper({ noSpace: true });
        expect(wrapper.hasClass('ffe-content-container--no-space')).toBe(true);
    });
});
