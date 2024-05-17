import React from 'react';
import { DetailContent, DetailContentProps } from './DetailContent';
import { render, screen } from '@testing-library/react';

describe('<DetailContent />', () => {
    const TEST_ID = 'test-id';

    const defaultProps = {
        childCount: 1,
        children: 'Content',
        index: 0,
        cta: false,
    };

    const renderDetailContent = (props: Partial<DetailContentProps>) =>
        render(
            <DetailContent
                {...defaultProps}
                {...props}
                data-testid={TEST_ID}
            />,
        );

    it('adds correct class based on cta prop', () => {
        const { rerender } = render(
            <DetailContent
                {...defaultProps}
                cta={false}
                data-testid={TEST_ID}
            />,
        );
        const detailContent = screen.getByTestId(TEST_ID);
        expect(
            detailContent.classList.contains(
                'ffe-details-list-react__content--action',
            ),
        ).toBeFalsy();

        rerender(
            <DetailContent
                {...defaultProps}
                cta={true}
                data-testid={TEST_ID}
            />,
        );
        expect(
            detailContent.classList.contains(
                'ffe-details-list-react__content--action',
            ),
        ).toBeTruthy();
    });

    it('adds any extra classes if provided', () => {
        renderDetailContent({ className: 'where-they-at-doe' });
        const detailContent = screen.getByTestId(TEST_ID);
        expect(detailContent.classList.contains('where-they-at-doe')).toBe(
            true,
        );
    });

    describe('correct column count when', () => {
        it('is exactly one DetailContent', () => {
            renderDetailContent({ childCount: 1 });
            const detailContent = screen.getByTestId(TEST_ID);
            expect(detailContent.getAttribute('class')).toContain(
                'ffe-grid__col--lg-7 ffe-grid__col--lg-offset-0 ffe-grid__col--md-8 ffe-grid__col--md-offset-2 ffe-grid__col--sm-12',
            );
        });

        it('are two DetailContents, and this DetailContent is the first one', () => {
            renderDetailContent({ childCount: 2, index: 0 });
            const detailContent = screen.getByTestId(TEST_ID);

            expect(detailContent.getAttribute('class')).toContain(
                'ffe-grid__col--lg-2 ffe-grid__col--lg-offset-0 ffe-grid__col--md-8 ffe-grid__col--md-offset-2 ffe-grid__col--sm-12',
            );
        });

        it('are two DetailContents, and this DetailContent is the last one', () => {
            renderDetailContent({ childCount: 2, index: 1 });
            const detailContent = screen.getByTestId(TEST_ID);
            expect(detailContent.getAttribute('class')).toContain(
                'ffe-grid__col--lg-4 ffe-grid__col--lg-offset-0 ffe-grid__col--md-8 ffe-grid__col--md-offset-2 ffe-grid__col--sm-12',
            );
        });

        it('are three DetailsContents', () => {
            renderDetailContent({ childCount: 3, index: 1 });
            const detailContent = screen.getByTestId(TEST_ID);
            expect(detailContent.getAttribute('class')).toContain(
                'ffe-grid__col--lg-2 ffe-grid__col--lg-offset-0 ffe-grid__col--md-8 ffe-grid__col--md-offset-2 ffe-grid__col--sm-12',
            );
        });

        it('are four DetailsContents', () => {
            renderDetailContent({ childCount: 4, index: 1 });
            const detailContent = screen.getByTestId(TEST_ID);
            expect(detailContent.getAttribute('class')).toContain(
                'ffe-grid__col--lg-2 ffe-grid__col--lg-offset-0 ffe-grid__col--md-8 ffe-grid__col--md-offset-2 ffe-grid__col--sm-12',
            );
        });
    });
});
