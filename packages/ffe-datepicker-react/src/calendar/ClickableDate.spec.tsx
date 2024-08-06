import React from 'react';
import { ClickableDate } from './ClickableDate';
import { getSimpleDateFromString } from '../datelogic/simpledate';
import { render, screen } from '@testing-library/react';
import { CalendarButtonState } from '../datelogic/types';

describe('<ClickableDate />', () => {
    const date = getSimpleDateFromString('17.05.2016');

    const dateButtonRef = React.createRef<HTMLTableCellElement>();
    const activeDate = (
        <table>
            <tbody>
                <tr>
                    <ClickableDate
                        calendarButtonState={
                            date as unknown as CalendarButtonState
                        }
                        onClick={() => true}
                        headers="id-to-th-element"
                        locale="nn"
                        month="Mai"
                        year={2016}
                        isFocusingHeader={false}
                        dateButtonRef={dateButtonRef}
                    />
                </tr>
            </tbody>
        </table>
    );

    it('should render an button with active date', () => {
        render(activeDate);
        const button = screen.getByRole('button');
        expect(button.classList.contains('ffe-calendar__day')).toBeTruthy();
    });
});
