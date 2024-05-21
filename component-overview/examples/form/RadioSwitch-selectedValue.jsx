import { useRef, useState} from 'react';
import { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';
import { v4 as uuid} from "uuid";

() => {
    const [selected, setSelected] = useState('n');
    const name = useRef(`radioButtonInputGroupSelected-${uuid()}`).current;

    return (
        <RadioButtonInputGroup
            label="Vil bilen bli kjørt av sjåfører under 23 år?"
            tooltip="Unge sjåfører har en statistisk høyere sjanse for å bulke bilen."
            name={name}
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
