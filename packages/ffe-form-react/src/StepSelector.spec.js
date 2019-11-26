import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';

import StepRadioButton from './StepSelector';

describe('StepRadioButton', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
        <StepRadioButton name="antallBarn" value="1" onChange={onChange}>
            1
        </StepRadioButton>,
    );
    const radioButton = getByLabelText('1');
});
