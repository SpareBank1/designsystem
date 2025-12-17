import React from 'react';
import { Skeleton, SkeletonProps } from './Skeleton';
import { render, screen } from '@testing-library/react';

const renderSkeleton = (props?: SkeletonProps) =>
    render(<Skeleton data-testId="skeleton-test" {...props} />);

describe('<Skeleton />', () => {
    it('renders correctly', () => {
        renderSkeleton();
        expect(screen.getByTestId('skeleton-test')).toBeInTheDocument();
    });

    it('set CSS variable for width correctly', () => {
        renderSkeleton({ width: '50%' });
        expect(screen.getByTestId('skeleton-test')).toHaveStyle(
            '--ffe-skeleton-box-width: 50%',
        );
    });
    it('set CSS variable for height correctly', () => {
        renderSkeleton({ height: '20px' });
        expect(screen.getByTestId('skeleton-test')).toHaveStyle(
            '--ffe-skeleton-box-height: 20px',
        );
    });

    it('set classnames correctly', () => {
        const customClass = 'custom-skeleton-class';
        renderSkeleton({ className: customClass });
        const el = screen.getByTestId('skeleton-test');
        expect(el).toHaveClass(customClass);
        expect(el).toHaveClass('ffe-skeleton', 'ffe-skeleton__box');
    });

    it('forwards props correctly ', () => {
        renderSkeleton({ id: 'SkeletonId' });
        const el = screen.getByTestId('skeleton-test');
        expect(el).toHaveAttribute('id', 'SkeletonId');
    });
});
