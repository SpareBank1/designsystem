import React from 'react';
import { TextCard } from './TextCard';
import { render, screen } from '@testing-library/react';

const children = <div>Hello world</div>;
const TEST_ID = 'test-id';

describe('TextCard', () => {
    it('should render correct class and children', () => {
        render(<TextCard data-testid={TEST_ID}>{children}</TextCard>);
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-text-card')).toBeTruthy();
    });

    it('should render children as a function', () => {
        render(
            <TextCard
                data-testid={TEST_ID}
                children={Components => (
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
            <TextCard data-testid={TEST_ID} className="my-custom-class">
                {children}
            </TextCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-text-card')).toBeTruthy();
        expect(card.classList.contains('my-custom-class')).toBeTruthy();
    });
});
