import { useState } from 'react';
import { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';

() => {
    const [selected, setSelected] = useState();
    const fieldMessageLeasing =
        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';

    return (
        <RadioButtonInputGroup
            label="Vil bilen bli kjørt av sjåfører under 23 år?"
            tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
            name="radioButtonInputGroupWithFieldMessage"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
            fieldMessage="Du må gjøre et valg"
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
}
