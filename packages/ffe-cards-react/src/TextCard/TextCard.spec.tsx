import React from 'react';
import { TextCard } from './TextCard';
import { render, screen } from '@testing-library/react';

const children = <div>Hello world</div>;

describe('TextCard', () => {
    it('should render correct class and children', () => {
        render(<TextCard href="#">{children}</TextCard>);
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-text-card')).toBeTruthy();
    });

    it('should render children as a function', () => {
        render(
            <TextCard
                href="#"
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
            <TextCard href="#" className="my-custom-class">
                {children}
            </TextCard>,
        );
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-text-card')).toBeTruthy();
        expect(link.classList.contains('my-custom-class')).toBeTruthy();
    });

    it('should set ref', () => {
        const ref = React.createRef<HTMLAnchorElement>();
        render(
            <TextCard href="#" ref={ref}>
                {children}
            </TextCard>,
        );
        const link = screen.getByRole('link');
        expect(link).toBe(ref.current);
    });
});
