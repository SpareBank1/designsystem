import React from 'react';
import { CardGroup } from './CardGroup';
import { render, screen } from '@testing-library/react';
import { CardBase } from '../CardBase';

const TEST_ID = 'test-id';

describe('ImageCard', () => {
    it('should render correct class', () => {
        render(
            <CardGroup data-testid={TEST_ID}>
                <div>Test</div>
            </CardGroup>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-card-group')).toBeTruthy();
    });

    it('should render CardBase with cardBase class when provided as child', () => {
        render(
            <CardGroup data-testid={TEST_ID}>
                <CardBase>Hello world</CardBase>
            </CardGroup>,
        );
        const cardGroup = screen.getByTestId(TEST_ID);
        const cardBase = cardGroup.querySelector('.ffe-card-base');
        expect(cardBase?.textContent).toBe('Hello world');
    });

    it('should render a custom class', () => {
        render(
            <CardGroup data-testid={TEST_ID} className="my-custom-class">
                <div>Test</div>
            </CardGroup>,
        );
        const cardGroup = screen.getByTestId(TEST_ID);
        expect(cardGroup.classList.contains('ffe-card-group')).toBeTruthy();
        expect(cardGroup.classList.contains('my-custom-class')).toBeTruthy();
    });

    it('should set ref', () => {
        const ref = React.createRef<HTMLLIElement>();
        render(
            <CardGroup data-testid={TEST_ID} ref={ref}>
                <div>Test</div>
            </CardGroup>,
        );
        const cardGroup = screen.getByTestId(TEST_ID);
        expect(cardGroup).toBe(ref.current);
    });
});
