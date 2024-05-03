import React from 'react';
import StippledCard from './StippledCard';
import { Icon } from '@sb1/ffe-icons-react';
import { render, screen, within } from '@testing-library/react';

const children = <div>Hello world</div>;

describe('StippledCard', () => {
    it('should render correct class and contain a div with body class', () => {
        render(
            <StippledCard
                href="#"
                img={{ element: <Icon fileUrl="monitoring" />, type: 'icon' }}
            >
                {children}
            </StippledCard>,
        );
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-stippled-card')).toBeTruthy();
        expect(within(link).getByText('Hello world')).toBeInTheDocument();
    });

    it('should add modifying classes when modifiers are given', () => {
        render(
            <StippledCard
                href="#"
                condensed={true}
                img={{ element: <Icon fileUrl="monitoring" />, type: 'icon' }}
            >
                {children}
            </StippledCard>,
        );
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-stippled-card')).toBeTruthy();
        expect(
            link.classList.contains('ffe-stippled-card--condensed'),
        ).toBeTruthy();
    });

    it('should render children as a function', () => {
        render(
            <StippledCard
                href="#"
                img={{ element: <Icon fileUrl="monitoring" />, type: 'icon' }}
                children={Components => (
                    <Components.Text>Hello world</Components.Text>
                )}
            />,
        );
        const link = screen.getByRole('link');
        const p = link.querySelector('p');
        expect(p.classList.contains('ffe-card-body__text')).toBeTruthy();
        expect(p.textContent).toEqual('Hello world');
    });

    it('should render my custom class', () => {
        render(
            <StippledCard
                href="#"
                img={{ element: <Icon fileUrl="monitoring" />, type: 'icon' }}
                className="my-custom-class"
            >
                {children}
            </StippledCard>,
        );
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-stippled-card')).toBeTruthy();
        expect(link.classList.contains('my-custom-class')).toBeTruthy();
    });
});
