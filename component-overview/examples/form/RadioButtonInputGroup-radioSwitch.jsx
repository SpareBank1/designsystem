import {useRef, useState} from 'react';
import {
    RadioButtonInputGroup,
    RadioSwitch,
} from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { v4 as uuid } from "uuid";

() => {
    const [showErrors, setShowErrors] = useState(false);
    const switchName = useRef(`switch-${uuid()}`).current;

    return (
        <>
            <div className="ffe-button-group">
                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>
                    Skru feilmeldinger av/på
                </SecondaryButton>
            </div>
            <RadioButtonInputGroup
                description="Du kan ikke velge begge"
                label="Velg ja eller nei"
                name={switchName}
                fieldMessage={showErrors ? 'Feil valg' : null}
            >
                {inputProps => (
                    <RadioSwitch
                        leftLabel="Ja"
                        leftValue={true}
                        rightLabel="Nei"
                        rightValue={false}
                        {...inputProps}
                    />
                )}
            </RadioButtonInputGroup>
        </>
    );
}
