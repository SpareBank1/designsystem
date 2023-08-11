import React from 'react';

import StippledCard from './StippledCard';
import { SparegrisIkon } from '@sb1/ffe-icons-react';
import { Text } from '../components';

const getWrapper = props =>
    shallow(<StippledCard img={<SparegrisIkon />} {...props} />);
const children = <div>Hello world</div>;

describe('StippledCard', () => {
    it('should render correct class and contain a div with body class', () => {
        const wrapper = getWrapper({ children });

        expect(wrapper.hasClass('ffe-stippled-card')).toBe(true);
        expect(wrapper.containsMatchingElement(children)).toBe(true);
    });

    it('should add modifying classes when modifiers are given', () => {
        const wrapper = getWrapper({
            condensed: true,
        });

        expect(wrapper.hasClass('ffe-stippled-card--condensed')).toBe(true);
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
