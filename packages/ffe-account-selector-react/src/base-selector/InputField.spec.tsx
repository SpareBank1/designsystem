import React from 'react';
import { InputField } from './InputField';
import { render, screen } from '@testing-library/react';

function renderInputField(value = 'value', readOnly = false) {
    return render(
        // @ts-ignore
        <InputField
            onChange={() => {}}
            onKeyDown={() => {}}
            value={value}
            onReset={() => {}}
            isSuggestionsShowing={false}
            id="id"
            readOnly={readOnly}
            locale="nb"
        />,
    );
}

describe('<InputField />', () => {
    it('displays a reset button', () => {
        renderInputField();
        const button = screen.getByRole('button', { name: 'Nullstill' });
        expect(
            button.classList.contains('ffe-base-selector__reset-button'),
        ).toBeTruthy();
    });

    it('hides reset button when empty', () => {
        renderInputField('');
        expect(
            screen.queryByRole('button', { name: 'Nullstill' }),
        ).not.toBeInTheDocument();
    });

    it('hides reset button when readOnly', () => {
        renderInputField('value', true);

        expect(
            screen.queryByRole('button', { name: 'Nullstill' }),
        ).not.toBeInTheDocument();
    });
});
