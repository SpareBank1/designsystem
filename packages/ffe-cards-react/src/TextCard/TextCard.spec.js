import React from 'react';
import { shallow } from 'enzyme';

import TextCard from './TextCard';
import { Text } from '../components';

const getWrapper = props => shallow(<TextCard {...props} />);
const children = <div>Hello world</div>;

describe('TextCard', () => {
    it('should render correct class and children', () => {
        const wrapper = getWrapper({ children });

        expect(wrapper.hasClass('ffe-text-card')).toBe(true);
        expect(
            wrapper
                .find('.ffe-text-card')
                .children()
                .first()
                .getElement(),
        ).toEqual(children);
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
