import React from 'react';

import InputField from './InputField';

function renderInputField(value = 'value', readOnly = false) {
    return mount(
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
        const wrapper = renderInputField();

        expect(wrapper.find('.ffe-base-selector__reset-button').length).toBe(1);
    });

    it('hides reset button when empty', () => {
        const wrapper = renderInputField('');

        expect(wrapper.find('.ffe-base-selector__reset-button').length).toBe(0);
    });

    it('hides reset button when readOnly', () => {
        const wrapper = renderInputField('value', true);

        expect(wrapper.find('.ffe-base-selector__reset-button').length).toBe(0);
    });
});
