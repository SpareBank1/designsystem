import React from 'react';
import { shallow } from 'enzyme';
import { ActionButton, ActionButtonProps } from './ActionButton';

const defaultProps = { children: 'Click me' };
const getWrapper = (props?: ActionButtonProps<'button'>) =>
    shallow(<ActionButton {...defaultProps} {...props} />);

describe('<ActionButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'action');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({
            'aria-label': 'some label',
        });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
});
