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
    maxDate: '31.12.2030',
};

const renderDatePicker = (props?: Partial<DatepickerProps>) =>
    render(
        <InputGroup label="Datovelger">
            <Datepicker {...defaultProps} {...props} />
        </InputGroup>,
    );

describe('<InputGroup><Datepicker /></InputGroup>', () => {
    it('empty datepicker returns <empty string> from testing functions', async () => {
        renderDatePicker();

        const datepicker = await getDatepickerByLabelText('Datovelger');
        expect(
            datepicker.element.classList.contains('ffe-datepicker'),
        ).toBeTruthy();
        expect(datepicker.getValue()).toBe('');
    });

    it('datepicker returns value from testing functions', async () => {
        renderDatePicker({ value: '01.02.2024' });

        const datepicker = await getDatepickerByLabelText('Datovelger');

        expect(datepicker.getValue()).toStrictEqual('01.02.2024');
    });

    it('datepicker can be updated by testing functions', async () => {
        renderDatePicker({ value: '01.01.2024' });

        const datepicker = await getDatepickerByLabelText('Datovelger');
        await datepicker.setValue('6.5.2024');

        expect(datepicker.getValue()).toStrictEqual('06.05.2024');
    });

    it('datepicker can be cleared by testing function', async () => {
        renderDatePicker({ value: '01.01.2024' });

        const datepicker = await getDatepickerByLabelText('Datovelger');
        await datepicker.setValue('');

        expect(datepicker.getValue()).toBe('');
    });

    it('2 number year date is updated to correct 4 number year', async () => {
        renderDatePicker({ value: '01.01.2024' });

        const datepicker = await getDatepickerByLabelText('Datovelger');
        await datepicker.setValue('02.02.28');

        expect(datepicker.getValue()).toStrictEqual('02.02.2028');
    });

    it('3 number year date is updated to correct 4 number year', async () => {
        renderDatePicker({ value: '01.01.2024' });

        const datepicker = await getDatepickerByLabelText('Datovelger');
        await datepicker.setValue('02.02.128');

        expect(datepicker.getValue()).toStrictEqual('02.02.2128');
    });

    it('no year is updated to correct 4 number year', async () => {
        renderDatePicker({ value: '01.01.2023' });

        const datepicker = await getDatepickerByLabelText('Datovelger');
        await datepicker.setValue('02.02.');
        const date = new Date();
        expect(datepicker.getValue()).toStrictEqual(
            `02.02.${date.getFullYear()}`,
        );
    });
});
