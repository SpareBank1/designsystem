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
    it('should set bgColor-prop correctly', () => {
        render(<CardBase href="#" element="a" bgColor="frost-30" />);
        const link = screen.getByRole('link');
        expect(
            link.classList.contains('ffe-card-base--bg-frost-30'),
        ).toBeTruthy();
    });
    it('should set bgDarkmodeColor-prop correctly', () => {
        render(<CardBase href="#" element="a" bgDarkmodeColor="natt" />);
        const link = screen.getByRole('link');
        expect(
            link.classList.contains('ffe-card-base--dm-bg-natt'),
        ).toBeTruthy();
    });
    it('should set shadow-prop correctly', () => {
        render(<CardBase href="#" element="a" shadow={true} />);
        const link = screen.getByRole('link');
        expect(
            link.classList.contains('ffe-card-base--box-shadow'),
        ).toBeTruthy();
    });
    it('should set noMargin-prop correctly', () => {
        render(<CardBase href="#" element="a" noMargin={true} />);
        const link = screen.getByRole('link');
        expect(
            link.classList.contains('ffe-card-base--no-margin'),
        ).toBeTruthy();
    });
    it('should set textCenter-prop correctly', () => {
        render(<CardBase href="#" element="a" textCenter={true} />);
        const link = screen.getByRole('link');
        expect(
            link.classList.contains('ffe-card-base--text-center'),
        ).toBeTruthy();
    });
});
