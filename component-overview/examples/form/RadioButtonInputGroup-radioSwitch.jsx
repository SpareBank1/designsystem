import { useState, useId } from 'react';
import { RadioButtonInputGroup, RadioSwitch } from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';

() => {
    const [showErrors, setShowErrors] = useState(false);
    const switchName = useId();

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
};
