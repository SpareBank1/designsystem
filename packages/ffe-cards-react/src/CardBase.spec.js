import React from 'react';

import CardBase from './CardBase';

const getWrapper = props => shallow(<CardBase {...props} />);
const children = <div>Hello world</div>;

describe('CardBase', () => {
    it('should render an a element with correct class and children inside', () => {
        const wrapper = getWrapper({ children });

        expect(wrapper.find('a').exists()).toBe(true);
        expect(wrapper.hasClass('ffe-card-base')).toBe(true);
        expect(
            wrapper
                .find('.ffe-card-base')
                .children()
                .first()
                .getElement(),
        ).toEqual(children);
    });

    it('should render my custom element and custom class', () => {
        const wrapper = getWrapper({
            className: 'my-custom-class',
            element: 'article',
        });

        expect(wrapper.find('article').exists()).toBe(true);
        expect(wrapper.hasClass('my-custom-class')).toBe(true);
    });
});
