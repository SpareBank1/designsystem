import React from 'react';
import { shallow } from 'enzyme';
import ChevronIkon from 'ffe-icons-react/lib/chevron-ikon';

import InlineExpandButton from './InlineExpandButton';

const defaultProps = {
    isExpanded: false,
    onClick: f => f,
};

const getWrapper = props => shallow(<InlineExpandButton {...defaultProps} {...props} />);

describe('<InlineExpandButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });

    it('renders a ChevronIkon', () => {
        const wrapper = getWrapper();
        expect(wrapper.find(ChevronIkon).exists()).toBe(true);
    });

    it('renders --expanded classes if isExpanded is true', () => {
        const wrapper = getWrapper({ isExpanded: true });
        expect(wrapper.hasClass('ffe-inline-expand-button--expanded')).toBe(true);
        expect(wrapper
                .find(ChevronIkon)
                .hasClass(
                    'ffe-inline-expand-button__icon--expanded',
                )).toBe(true);
    });

    it('clicks call the onClick function', () => {
        const onClick = jest.fn();
        const wrapper = getWrapper({ onClick });
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
