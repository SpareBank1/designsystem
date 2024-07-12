import React from 'react';
import { TableCaption } from './TableCaption';
import { screen, render } from '@testing-library/react';

describe('<TableCaption />', () => {
    it('should use correct classes', () => {
        render(
            <table>
                <TableCaption data-testid="test-id" className="my-class">
                    caption
                </TableCaption>
            </table>,
        );
        const caption = screen.getByTestId('test-id');
        expect(caption.classList).toContain('my-class');
        expect(caption.classList).toContain('ffe-table__caption');
    });
});
