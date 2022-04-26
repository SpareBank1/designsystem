import { useState } from 'react';
import { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';

() => {
    const [selected, setSelected] = useState('n');

    return (
        <RadioButtonInputGroup
            label="Vil bilen bli kjørt av sjåfører under 23 år?"
            tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
            name="radioButtonInputGroupSelected"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <RadioSwitch
                    leftLabel="Ja"
                    leftValue="y"
                    rightLabel="Nei"
                    rightValue="n"
                    {...inputProps}
                />
            )}
        </RadioButtonInputGroup>
    );
}
