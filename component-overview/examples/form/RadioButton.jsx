import { useState } from 'react';
import { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';

() => {
    const [selected, setSelected] = useState();

    return (
        <RadioButtonInputGroup
            label="Kundetype"
            name="customerType"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <>
                    <RadioButton {...inputProps} value="bank">
                        Bankkunde
                    </RadioButton>
                    <RadioButton {...inputProps} value="insurance">
                        Forsikringskunde
                    </RadioButton>
                    <RadioButton {...inputProps} value="both">
                        Totalkunde
                    </RadioButton>
                    <RadioButton {...inputProps} value="none">
                        Ikke kunde enda
                    </RadioButton>
                </>
            )}
        </RadioButtonInputGroup>
    );
}
