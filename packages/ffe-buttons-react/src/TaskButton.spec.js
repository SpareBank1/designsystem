import React from 'react';
import { shallow } from 'enzyme';
import { ChevronIkon } from '@sb1/ffe-icons-react';

import TaskButton from './TaskButton';

const defaultProps = { children: 'Click me', icon: <svg /> };
const getWrapper = props =>
    shallow(<TaskButton {...defaultProps} {...props} />);

describe('<TaskButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'task');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
    it('sends icon prop on as leftIcon prop', () => {
        const wrapper = getWrapper({ icon: <ChevronIkon /> });
        expect(wrapper.props()).toHaveProperty('leftIcon', <ChevronIkon />);
    });
});
