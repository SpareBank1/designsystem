import React from 'react';
import { shallow } from 'enzyme';

import IconCard from './IconCard';
import SparegrisIkon from '../../../ffe-icons-react/lib/sparegris-ikon';
import { Text } from '../components';

const getWrapper = props =>
    shallow(<IconCard icon={<SparegrisIkon />} {...props} />);
const children = <div>Hello world</div>;

describe('IconCard', () => {
    it('should render correct class and contain a div with body class', () => {
        const wrapper = getWrapper({ children });

        expect(wrapper.hasClass('ffe-icon-card')).toBe(true);
        expect(wrapper.find('.ffe-icon-card__body').exists()).toBe(true);
        expect(
            wrapper
                .find('.ffe-icon-card__body')
                .children()
                .first()
                .getElement(),
        ).toEqual(children);
    });

    it('should render icon, with an added class', () => {
        const wrapper = getWrapper({
            icon: <SparegrisIkon className="my-custom-class" />,
        });

        expect(
            wrapper.find(SparegrisIkon).hasClass('ffe-icon-card__icon'),
        ).toBe(true);
        expect(wrapper.find(SparegrisIkon).hasClass('my-custom-class')).toBe(
            true,
        );
    });

    it('should add modifying classes when modifiers are given', () => {
        const wrapper = getWrapper({
            condensed: true,
            greyCharcoal: true,
        });

        expect(wrapper.hasClass('ffe-icon-card--condensed')).toBe(true);
        expect(wrapper.hasClass('ffe-icon-card--grey-charcoal')).toBe(true);
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
