import React from 'react';
import { StippledCard } from './StippledCard';
import { Icon } from '@sb1/ffe-icons-react';
import { render, screen, within } from '@testing-library/react';

const children = <div>Hello world</div>;
const TEST_ID = 'test-id';

describe('StippledCard', () => {
    it('should render correct class and contain a div with body class', () => {
        render(
            <StippledCard
                data-testid={TEST_ID}
                img={{
                    element: <Icon fileUrl="monitoring" size="md" />,
                    type: 'icon',
                }}
            >
                {children}
            </StippledCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-stippled-card')).toBeTruthy();
        expect(within(card).getByText('Hello world')).toBeInTheDocument();
    });

    it('should add modifying classes when modifiers are given', () => {
        render(
            <StippledCard
                data-testid={TEST_ID}
                condensed={true}
                img={{
                    element: <Icon fileUrl="monitoring" size="md" />,
                    type: 'icon',
                }}
            >
                {children}
            </StippledCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-stippled-card')).toBeTruthy();
        expect(
            card.classList.contains('ffe-stippled-card--condensed'),
        ).toBeTruthy();
    });

    it('should render children as a function', () => {
        render(
            <StippledCard
                data-testid={TEST_ID}
                img={{
                    element: <Icon fileUrl="monitoring" size="md" />,
                    type: 'icon',
                }}
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
            <StippledCard
                data-testid={TEST_ID}
                img={{
                    element: <Icon fileUrl="monitoring" size="md" />,
                    type: 'icon',
                }}
                className="my-custom-class"
            >
                {children}
            </StippledCard>,
        );
        const card = screen.getByTestId(TEST_ID);
        expect(card.classList.contains('ffe-stippled-card')).toBeTruthy();
        expect(card.classList.contains('my-custom-class')).toBeTruthy();
    });

    it('should render as wished element', () => {
        render(
            <StippledCard
                as="li"
                img={{
                    element: <Icon fileUrl="monitoring" size="md" />,
                    type: 'icon',
                }}
            >
                {children}
            </StippledCard>,
        );
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

    it('should set ref', () => {
        const ref = React.createRef<HTMLLIElement>();
        render(
            <StippledCard
                as="li"
                ref={ref}
                img={{
                    element: <Icon fileUrl="monitoring" size="md" />,
                    type: 'icon',
                }}
            >
                {children}
            </StippledCard>,
        );
        const listitem = screen.getByRole('listitem');
        expect(listitem).toBe(ref.current);
    });
});
