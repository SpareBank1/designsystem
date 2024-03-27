import {RadioButton, RadioButtonInputGroup} from '@sb1/ffe-form-react';
import {useState} from "react";

() => {
    const [selected, setSelected] = useState('bank');

    return (
        <RadioButtonInputGroup
            label="Kundetype"
            name="customerType"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <>
                    <RadioButton {...inputProps} value="bank" aria-invalid="true">
                        Bankkunde
                    </RadioButton>
                    <RadioButton {...inputProps} value="insurance" aria-invalid="true">
                        Forsikringskunde
                    </RadioButton>
                </>
            )}
        </RadioButtonInputGroup>
    );
}
