import React from 'react';
import { ImageCard } from './ImageCard';
import { render, screen, within } from '@testing-library/react';
import { CardRenderProps } from '../types';

const children = <div>Hello world</div>;
const TEST_ID = 'test-id';

describe('ImageCard', () => {
    it('should render correct class and contain an element with image class', () => {
        render(
            <ImageCard
                data-testid={TEST_ID}
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-image-card')).toBeTruthy();
        expect(
            card.querySelector('.ffe-image-card__image-container'),
        ).toBeTruthy();
    });

    it('should render image and overlay alongside each other', () => {
        render(
            <ImageCard
                data-testid={TEST_ID}
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        const imageEl = card.querySelector('.ffe-image-card__image-container');
        expect(
            imageEl?.querySelector('.ffe-image-card__image-overlay'),
        ).toBeTruthy();
        expect(imageEl?.querySelector('.ffe-image-card__image')).toBeTruthy();
    });

    it('should set alt text on image correctly', () => {
        render(
            <ImageCard
                data-testid={TEST_ID}
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        const image = within(card).getByRole('img');
        expect(image.getAttribute('alt')).toBe('Image alt text');
    });
    it('should render children inside an element with body class', () => {
        render(
            <ImageCard
                data-testid={TEST_ID}
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        const body = card.querySelector('.ffe-image-card__body');
        expect(body?.textContent).toBe('Hello world');
    });

    it('should render children as a function', () => {
        render(
            <ImageCard
                data-testid={TEST_ID}
                imageAltText="Image alt text"
                imageSrc="random/path"
                children={(Components: CardRenderProps) => (
                    <Components.Text>Hello world</Components.Text>
                )}
            />,
        );
        const card = screen.getByTestId(TEST_ID);
        const p = card.querySelector('p');
        expect(p?.classList.contains('ffe-card-body__text')).toBeTruthy();
        expect(p?.textContent).toEqual('Hello world');
    });

    it('should render my custom class', () => {
        render(
            <ImageCard
                data-testid={TEST_ID}
                imageAltText="Image alt text"
                imageSrc="random/path"
                className="my-custom-class"
            >
                {children}
            </ImageCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-image-card')).toBeTruthy();
        expect(card.classList.contains('my-custom-class')).toBeTruthy();
    });

    it('should render as wished element', () => {
        render(
            <ImageCard
                as="li"
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

    it('should set ref', () => {
        const ref = React.createRef<HTMLLIElement>();
        render(
            <ImageCard
                as="li"
                ref={ref}
                imageAltText="Image alt text"
                imageSrc="random/path"
            >
                {children}
            </ImageCard>,
        );
        const listitem = screen.getByRole('listitem');
        expect(listitem).toBe(ref.current);
    });
});
