import React from 'react';
import { Paragraph } from './Paragraph';
import { render, screen } from '@testing-library/react';

const defaultProps = { children: 'children' };

const renderParagraph = (props = {}) =>
    render(<Paragraph {...defaultProps} {...props} />);

describe('<Paragraph />', () => {
    test('adds ffe-body-paragraph class if lead and subLead props are false (or not set)', () => {
        renderParagraph();
        const p = screen.getByText('children');
        expect(p.classList.contains('ffe-body-paragraph')).toBe(true);
    });

    test('adds --text-center modifier if textCenter prop is true', () => {
        renderParagraph({ textCenter: true });
        const p = screen.getByText('children');
        expect(p.classList.contains('ffe-body-paragraph')).toBe(true);
        expect(p.classList.contains('ffe-body-paragraph--text-center')).toBe(
            true,
        );
    });

    test('adds --text-left modifier if textLeft prop is true', () => {
        renderParagraph({ textLeft: true });
        const p = screen.getByText('children');
        expect(p.classList.contains('ffe-body-paragraph')).toBe(true);
        expect(p.classList.contains('ffe-body-paragraph--text-left')).toBe(
            true,
        );
    });

    test('adds ffe-lead-paragraph class if lead prop is true', () => {
        renderParagraph({ lead: true });
        const p = screen.getByText('children');
        expect(p.classList.contains('ffe-lead-paragraph')).toBe(true);
    });

    test('adds ffe-sub-lead-paragraph class if lead prop is true', () => {
        renderParagraph({ subLead: true });
        const p = screen.getByText('children');
        expect(p.classList.contains('ffe-sub-lead-paragraph')).toBe(true);
    });
});
