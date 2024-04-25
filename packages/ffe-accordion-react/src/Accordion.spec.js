import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<Accordion />', () => {
    it('should render headings', () => {
        render(
            <Accordion headingLevel={3}>
                <AccordionItem heading="heading1">content1</AccordionItem>
                <AccordionItem heading="heading2">content2</AccordionItem>
            </Accordion>,
        );
        expect(
            screen.getByRole('heading', { name: /heading1/i, level: 3 }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /heading2/i, level: 3 }),
        ).toBeInTheDocument();
    });

    it('should set up correct associations between heading and content', () => {
        render(
            <Accordion headingLevel={3}>
                <AccordionItem defaultOpen={true} heading="heading1">
                    content1
                </AccordionItem>
                <AccordionItem defaultOpen={true} heading="heading2">
                    content2
                </AccordionItem>
            </Accordion>,
        );

        const firstButton = screen.getByRole('button', { name: /heading1/i });
        const firstContent = screen.getByRole('region', { name: /heading1/i });

        expect(firstButton.getAttribute('aria-controls')).toEqual(
            firstContent.getAttribute('id'),
        );
        expect(firstContent.getAttribute('aria-labelledby')).toEqual(
            firstButton.getAttribute('id'),
        );

        const secondButton = screen.getByRole('button', { name: /heading2/i });
        const secondContent = screen.getByRole('region', { name: /heading2/i });

        expect(secondButton.getAttribute('aria-controls')).toEqual(
            secondContent.getAttribute('id'),
        );
        expect(secondContent.getAttribute('aria-labelledby')).toEqual(
            secondButton.getAttribute('id'),
        );
    });

    it('should expand sections', () => {
        render(
            <Accordion headingLevel={3}>
                <AccordionItem heading="heading1">content1</AccordionItem>
                <AccordionItem heading="heading2">content2</AccordionItem>
            </Accordion>,
        );

        const firstButton = screen.getByRole('button', { name: /heading1/i });
        const secondButton = screen.getByRole('button', { name: /heading2/i });

        expect(firstButton.getAttribute('aria-expanded')).toEqual('false');
        expect(secondButton.getAttribute('aria-expanded')).toEqual('false');

        expect(
            screen.queryByRole('region', { name: /heading1/i }),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole('region', { name: /heading2/i }),
        ).not.toBeInTheDocument();

        fireEvent.click(firstButton);
        fireEvent.click(secondButton);

        expect(firstButton.getAttribute('aria-expanded')).toEqual('true');
        expect(secondButton.getAttribute('aria-expanded')).toEqual('true');

        expect(
            screen.getByRole('region', { name: /heading1/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('region', { name: /heading2/i }),
        ).toBeInTheDocument();
    });
});
