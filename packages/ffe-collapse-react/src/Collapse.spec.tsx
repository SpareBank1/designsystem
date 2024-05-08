import React from 'react';
import { Collapse, CollapseProps } from './Collapse';
import { render } from '@testing-library/react';

const renderCollapse = (props: CollapseProps) =>
    render(<Collapse {...props} />);

describe('<Collapse />', () => {
    it('should be open', () => {
        const { container } = renderCollapse({ isOpen: true });
        const collapse = container.querySelector('.ffe-collapse');
        const inner = collapse?.querySelector('.ffe-collapse__inner');
        expect(
            inner?.classList.contains('ffe-collapse__inner--visible'),
        ).toBeTruthy();
    });
    it('should be closed', () => {
        const { container } = renderCollapse({ isOpen: false });
        const collapse = container.querySelector('.ffe-collapse');
        expect(
            collapse?.classList.contains('ffe-collapse--hidden'),
        ).toBeTruthy();
        const inner = collapse?.querySelector('.ffe-collapse__inner');
        expect(
            inner?.classList.contains('ffe-collapse__inner--visible'),
        ).toBeFalsy();
    });
});
