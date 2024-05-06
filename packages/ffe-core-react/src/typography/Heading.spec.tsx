import React from 'react';
import {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
} from './Heading';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    el: Heading1,
    children: 'Heading',
};

const renderHeading = (props = {}) => {
    const { el: Heading, ...finalProps } = { ...defaultProps, ...props };
    return render(<Heading {...finalProps} />);
};

describe('<Heading1...6 />', () => {
    test.each([
        [
            { Heading: Heading1, level: 1 },
            { Heading: Heading2, level: 2 },
            { Heading: Heading3, level: 3 },
            { Heading: Heading4, level: 4 },
            { Heading: Heading5, level: 5 },
            { Heading: Heading6, level: 6 },
        ],
    ])(
        'renders the correct class level',
        ({ Heading, level }, headingLevel) => {
            render(<Heading />);
            const heading = screen.getByRole('heading', { level });
            expect(heading.classList.contains(`ffe-h${level}`)).toBeTruthy();
        },
    );

    test('overrides the class via the lookLike prop', () => {
        renderHeading({ lookLike: 3 });
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.classList.contains(`ffe-h3`)).toBeTruthy();
    });

    test('adds --error class if error prop is true', () => {
        renderHeading({ error: true });
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.classList.contains('ffe-h1--error')).toBeTruthy();
    });

    test('adds --inline class if inline prop is true', () => {
        renderHeading({ inline: true });
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.classList.contains('ffe-h1--inline')).toBeTruthy();
    });

    test('adds --no-margin class if noMargin prop is true', () => {
        renderHeading({ noMargin: true });
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.classList.contains('ffe-h1--no-margin')).toBeTruthy();
    });

    test('adds --with-border class if withBorder prop is true', () => {
        renderHeading({ withBorder: true });
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.classList.contains('ffe-h1--with-border')).toBeTruthy();
    });

    test('does not add conditional classes if no props are given', () => {
        renderHeading();
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.classList.contains('ffe-h1--error')).toBeFalsy();
        expect(heading.classList.contains('ffe-h1--no-margin')).toBeFalsy();
        expect(heading.classList.contains('ffe-h1--with-border')).toBeFalsy();
    });
});
