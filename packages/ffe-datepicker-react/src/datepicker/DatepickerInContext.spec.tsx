import { render } from '@testing-library/react';
import React from 'react';
import { InputGroup } from '../../../ffe-form-react/src/InputGroup';
import { Datepicker, DatepickerProps } from './Datepicker';
import { getDatepickerByLabelText } from './testHelper';

const defaultProps = {
    value: '',
    onChange: () => {},
    locale: 'nb' as const,
    labelId: 'datepicker-label',
};

const renderDatePicker = (props?: Partial<DatepickerProps>) =>
    render(
        <InputGroup label="Datovelger">
            <Datepicker {...defaultProps} {...props} />
        </InputGroup>,
    );

describe('<InputGroup><Datepicker /></InputGroup>', () => {
    it('empty datepicker returns null from testing functions', () => {
        renderDatePicker();

        const datepicker = getDatepickerByLabelText('Datovelger');
        expect(
            datepicker.element.classList.contains('ffe-datepicker'),
        ).toBeTruthy();
        expect(datepicker.getValue()).toBe(null);
    });

    it('datepicker returns value from testing functions', () => {
        renderDatePicker({ value: '01.02.2024' });

        const datepicker = getDatepickerByLabelText('Datovelger');

        expect(datepicker.getValue()).toStrictEqual('01.02.2024');
    });

    it('datepicker can be updated by testing functions', async () => {
        renderDatePicker({ value: '01.01.2024' });

        const datepicker = getDatepickerByLabelText('Datovelger');
        await datepicker.setValue('6.5.2024');

        expect(datepicker.getValue()).toStrictEqual('06.05.2024');
    });
});

/**
 * todo
 * x get datepicker with index
 * x change to string
 * x remove need for library
 * better types
 * own file
 */
