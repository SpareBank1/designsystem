import { useState } from 'react';
import { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';

() => {
    const [selected, setSelected] = useState();

    return (
        <RadioButtonInputGroup
            label="Hvordan vil du betale?"
            name="invoice"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <>
                    <RadioButton
                        {...inputProps}
                        tooltip="Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert."
                        value="monthly"
                    >
                        Månedlig fakturering
                    </RadioButton>
                    <RadioButton
                        {...inputProps}
                        tooltip="Årlig fakturering er for deg som har stell på økonomien. Her sparer du mest penger!"
                        value="annually"
                    >
                        Årlig fakturering
                    </RadioButton>
                </>
            )}
        </RadioButtonInputGroup>
    );
}
