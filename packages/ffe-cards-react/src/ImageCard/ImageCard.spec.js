import React from 'react';

import ImageCard from './ImageCard';
import { Text } from '../components';

const getWrapper = props =>
    shallow(
        <ImageCard
            {...props}
            imageURL="random/path"
            imageAltText="Image alt text"
        />,
    );
const children = <div>Hello world</div>;

describe('ImageCard', () => {
    it('should render correct class and contain a div with image class', () => {
        const wrapper = getWrapper();

        expect(wrapper.hasClass('ffe-image-card')).toBe(true);
        expect(
            wrapper.find('div.ffe-image-card__image-container').exists(),
        ).toBe(true);
    });

    it('should render image and overlay alongside each other', () => {
        const wrapper = getWrapper();

        const imageEl = wrapper.find('.ffe-image-card__image-container');
        expect(
            imageEl
                .children()
                .first()
                .hasClass('ffe-image-card__image-overlay'),
        ).toBe(true);

        expect(
            imageEl
                .children()
                .last()
                .hasClass('ffe-image-card__image'),
        ).toBe(true);
    });

    it('should set alt text on image correctly', () => {
        const wrapper = getWrapper();
        const imageEl = wrapper.find('.ffe-image-card__image');
        expect(imageEl.prop('alt')).toBe('Image alt text');
    });
    it('should render children inside a div with body class', () => {
        const wrapper = getWrapper({ children });

        expect(
            wrapper
                .find('.ffe-image-card__body')
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
