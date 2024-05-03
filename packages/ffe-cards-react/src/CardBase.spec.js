import React from 'react';
import CardBase from './CardBase';
import { render, screen, within } from '@testing-library/react';

describe('CardBase', () => {
    it('should render an a element with correct class and children inside', () => {
        render(
            <CardBase href="#">
                <div>Hello world</div>
            </CardBase>,
        );
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-card-base')).toBeTruthy();
        expect(within(link).getByText('Hello world')).toBeInTheDocument();
    });

    it('should render my custom element and custom class', () => {
        render(<CardBase element="article" className="my-custom-class" />);
        const article = screen.getByRole('article');
        expect(article.classList.contains('my-custom-class')).toBeTruthy();
    });
});
