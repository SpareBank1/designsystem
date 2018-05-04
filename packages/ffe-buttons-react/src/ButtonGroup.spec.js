import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from './ButtonGroup';

const defaultProps = {
    thin: false,
};

const getWrapper = props => shallow(<ButtonGroup {...defaultProps} {...props} />);

describe('<ButtonGroup />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });

    it('renders without the the --thin modifier if thin is false', () => {
        const wrapper = getWrapper({
            thin: false,
        });
        expect(wrapper.hasClass('ffe-button-group--thin')).toBe(false);
    });

    it('applies the --thin modifier if thin is true', () => {
        const wrapper = getWrapper({
            thin: true,
        });
        expect(wrapper.hasClass('ffe-button-group--thin')).toBe(true);
    });

    it('applies the --inline modifier if inline is true', () => {
        const wrapper = getWrapper({
            inline: true,
        });
        expect(wrapper.hasClass('ffe-button-group--inline')).toBe(true);
    });

    it('applies the given className prop', () => {
        const wrapper = getWrapper({
            className: 'my-class',
        });
        expect(wrapper.hasClass('my-class')).toBe(true);
    });
});
