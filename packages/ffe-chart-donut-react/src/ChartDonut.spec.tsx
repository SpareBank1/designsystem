import React from 'react';
import { ChartDonut, ChartDonutProps } from './ChartDonut';

import { render } from '@testing-library/react';

const defaultProps: ChartDonutProps = {
    firstLabel: 'Foo',
    lastLabel: 'Bar',
    name: 'Baz',
    percentage: 42,
};

describe('ChartDonut', () => {
    it('renders two SVGs', () => {
        const { container } = render(<ChartDonut {...defaultProps} />);
        expect(container.querySelectorAll('svg')).toHaveLength(2);
    });

    it('renders html for the name of the circle', () => {
        const { container } = render(<ChartDonut {...defaultProps} />);
        const name = container.querySelector('.ffe-chart-donut__name');
        expect(name?.textContent).toBe('Baz');
    });

    it('renders html for the labels and their percentages', () => {
        const { container } = render(<ChartDonut {...defaultProps} />);
        const [typeFoo, typeBar] = Array.from(
            container.querySelectorAll('.ffe-chart-donut__type'),
        );
        const [amountFoo, amountBar] = Array.from(
            container.querySelectorAll('.ffe-chart-donut__amount'),
        );
        expect(typeFoo.textContent).toBe('Foo');
        expect(amountFoo.textContent).toMatch(/58/);
        expect(typeBar.textContent).toBe('Bar');
        expect(amountBar.textContent).toMatch(/42/);
    });
});
