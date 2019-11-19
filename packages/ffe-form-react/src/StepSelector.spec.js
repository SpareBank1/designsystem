import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';

import StepSelector from './StepSelector';

describe('StepSelector', () => {
    const options = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
    ];
    const label = 'Antall barn';
    const name = 'antallBarnVelger';
    const desc = 'Velg hvor mange barn du har';
    it('renders the appropriate number options', () => {
        const { getAllByText } = render(
            <StepSelector
                options={options}
                initialSelected={options[0]}
                label={label}
                name={name}
                description={desc}
                onChange={Function.prototype}
            />,
        );
        const optionsRendered = getAllByText(label);
        expect(optionsRendered.length === options.length);
    });
    it('sets the correct selected option when clicked', () => {
        const onChange = jest.fn();
        const indexToClick = 2;
        const { queryByLabelText } = render(
            <StepSelector
                options={options}
                initialSelected={options[0]}
                label={label}
                name={name}
                description={desc}
                onChange={onChange}
            />,
        );
        const optionElementToClick = queryByLabelText(indexToClick.toString());
        fireEvent.click(optionElementToClick);

        expect(onChange).toBeCalledTimes(1);
        expect(onChange).toBeCalledWith(options[indexToClick].value);
    });
    // Failing
    /*
    it('select option with keyboard', () => {
        const onChange = jest.fn();
        const elementIndex = 0;
        const { getByLabelText, getByRole, queryByLabelText } = render(
            <StepSelector
                options={options}
                initialSelected={options[0]}
                label={label}
                name={name}
                description={desc}
                onChange={onChange}
            />,
        );
        const startingElement = queryByLabelText(elementIndex.toString());
        const container = getByRole('ffe-step-selector-container', {
            container: 'div',
            id: 'ffe-step-selector-container',
        });
        // fireEvent.focus(startingElement);
        fireEvent.click(startingElement);

        fireEvent.keyDown(container, { key: 'ArrowRight' });

        expect(onChange).toHaveBeenCalledTimes(2);
        expect(onChange).toHaveBeenCalledWith(options[2].value);
    }); */
});
