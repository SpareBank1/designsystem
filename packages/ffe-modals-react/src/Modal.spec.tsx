import React from 'react';
import { Modal } from './Modal';
import { render, screen } from '@testing-library/react';

describe('<Modal />', () => {
    it('should render with classes', () => {
        render(<Modal ariaLabelledby="heading-id" className="custom-class" />);

        const modal = screen.getByRole('dialog', { hidden: true });

        expect(modal.classList.contains('ffe-modal')).toBeTruthy();
        expect(modal.classList.contains('custom-class')).toBeTruthy();
    });

    it('should have close button', () => {
        render(<Modal ariaLabelledby="heading-id" className="custom-class" />);

        const closeButton = screen.getByRole('button', {
            hidden: true,
            name: 'Lukk',
        });

        expect(closeButton).toBeInTheDocument();
    });

    it('should set up heading', () => {
        const headingId = 'heading-id';

        render(
            <Modal ariaLabelledby={headingId} className="custom-class">
                <h2 id={headingId}>heading</h2>
            </Modal>,
        );

        const modal = screen.getByRole('dialog', { hidden: true });
        const heading = screen.getByRole('heading', {
            hidden: true,
            name: 'heading',
        });

        expect(modal.getAttribute('aria-labelledby')).toBe(
            heading.getAttribute('id'),
        );
    });
});
