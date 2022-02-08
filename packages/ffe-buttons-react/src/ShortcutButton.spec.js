import React from 'react';
import { ChevronIkon } from '@sb1/ffe-icons-react';

import ShortcutButton from './ShortcutButton';

const defaultProps = { children: 'Click me' };
const getWrapper = props =>
    shallow(<ShortcutButton {...defaultProps} {...props} />);

describe('<ShortcutButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('buttonType', 'shortcut');
    });
    it('passes on any prop', () => {
        const wrapper = getWrapper({ 'aria-label': 'some label' });
        expect(wrapper.props()).toHaveProperty('aria-label', 'some label');
    });
    it('sends a <ChevronIcon /> as a default rightIcon prop', () => {
        const wrapper = getWrapper();
        expect(wrapper.props()).toHaveProperty('rightIcon', <ChevronIkon />);
    });
});
