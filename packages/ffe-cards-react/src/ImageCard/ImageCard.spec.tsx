import React from 'react';
import { ImageCard } from './ImageCard';
import { render, screen, within } from '@testing-library/react';

const children = <div>Hello world</div>;

describe('ImageCard', () => {
    it('should render correct class and contain an element with image class', () => {
        render(
            <ImageCard
                href="#"
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-image-card')).toBeTruthy();
        expect(
            link.querySelector('.ffe-image-card__image-container'),
        ).toBeTruthy();
    });

    it('should render image and overlay alongside each other', () => {
        render(
            <ImageCard
                href="#"
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const link = screen.getByRole('link');
        const imageEl = link.querySelector('.ffe-image-card__image-container');
        expect(
            imageEl?.querySelector('.ffe-image-card__image-overlay'),
        ).toBeTruthy();
        expect(imageEl?.querySelector('.ffe-image-card__image')).toBeTruthy();
    });

    it('should set alt text on image correctly', () => {
        render(
            <ImageCard
                href="#"
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const link = screen.getByRole('link');
        const image = within(link).getByRole('img');
        expect(image.getAttribute('alt')).toBe('Image alt text');
    });
    it('should render children inside an element with body class', () => {
        render(
            <ImageCard
                href="#"
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const link = screen.getByRole('link');
        const body = link.querySelector('.ffe-image-card__body');
        expect(body?.textContent).toBe('Hello world');
    });

    it('should render children as a function', () => {
        render(
            <ImageCard
                href="#"
                imageAltText="Image alt text"
                imageSrc="random/path"
                children={Components => (
                    <Components.Text>Hello world</Components.Text>
                )}
            />,
        );
        const link = screen.getByRole('link');
        const p = link.querySelector('p');
        expect(p?.classList.contains('ffe-card-body__text')).toBeTruthy();
        expect(p?.textContent).toEqual('Hello world');
    });

    it('should render my custom class', () => {
        render(
            <ImageCard
                href="#"
                imageAltText="Image alt text"
                imageSrc="random/path"
                className="my-custom-class"
            >
                {children}
            </ImageCard>,
        );
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-image-card')).toBeTruthy();
        expect(link.classList.contains('my-custom-class')).toBeTruthy();
    });

    it('should set ref', () => {
        const ref = React.createRef<HTMLAnchorElement>();
        render(
            <ImageCard
                href="#"
                imageAltText="Image alt text"
                imageSrc="random/path"
                ref={ref}
            >
                {children}
            </ImageCard>,
        );
        const link = screen.getByRole('link');
        expect(link).toBe(ref.current);
    });
});
