import React from 'react';
import { TableFoot } from './TableFoot';
import { screen, render } from '@testing-library/react';

describe('<TableFoot />', () => {
    it('should use correct classes', () => {
        render(
            <table>
                <TableFoot className="my-class" />
            </table>,
        );
        const foot = screen.getByRole('rowgroup');
        expect(foot.classList).toContain('my-class');
        expect(foot.classList).toContain('ffe-table__foot');
    });
});
