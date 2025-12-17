import React from 'react';
import { SkeletonCircle, SkeletonCircleProps } from './SkeletonCircle';
import { render, screen } from '@testing-library/react';

const renderSkeleton = (props?: SkeletonCircleProps) =>
    render(<SkeletonCircle data-testId="skeleton-circle-test" {...props} />);

describe('<SkeletonCircle />', () => {
    it('renders correctly', () => {
        renderSkeleton();
        expect(screen.getByTestId('skeleton-circle-test')).toBeInTheDocument();
    });

    it('set size correctly', () => {
        renderSkeleton({ size: 'sm' });
        expect(screen.getByTestId('skeleton-circle-test')).toHaveClass(
            'ffe-skeleton',
            'ffe-skeleton__circle',
            'ffe-skeleton__circle--sm',
        );
    });

    it('set classnames correctly', () => {
        const customClass = 'custom-skeleton-class';
        renderSkeleton({ className: customClass });
        const el = screen.getByTestId('skeleton-circle-test');
        expect(el).toHaveClass(customClass);
        expect(el).toHaveClass('ffe-skeleton', 'ffe-skeleton__circle');
    });

    it('forwards props correctly ', () => {
        renderSkeleton({ id: 'SkeletonId' });
        const el = screen.getByTestId('skeleton-circle-test');
        expect(el).toHaveAttribute('id', 'SkeletonId');
    });
});
