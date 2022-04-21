import { useState } from 'react';
import { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';

() => {
    const [selected, setSelected] = useState('nei');
    const fieldMessageLeasing =
        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';

    return (
        <RadioButtonInputGroup
            label="Er bilen leaset?"
            name="hasLeasing"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
            fieldMessage={selected === 'ja' && fieldMessageLeasing}
        >
            {inputProps => (
                <RadioSwitch
                    leftLabel="Ja"
                    leftValue="ja"
                    rightLabel="Nei"
                    rightValue="nei"
                    {...inputProps}
                />
            )}
        </RadioButtonInputGroup>
    );
};
