import { useState } from 'react';
import {
    RadioButtonInputGroup,
    RadioBlock,
} from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';

() => {
    const [showErrors, setShowErrors] = useState(false);

    return (
        <>
            <div className="ffe-button-group">
                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>
                    Skru feilmeldinger av/på
                </SecondaryButton>
            </div>
            <RadioButtonInputGroup
                label="Velg ja eller nei"
                name="block1"
                selectedValue="yes"
                fieldMessage={showErrors ? 'Feil valg' : null}
            >
                {inputProps => (
                    <>
                        <RadioBlock {...inputProps} label="Ja" value="yes" />
                        <RadioBlock
                            {...inputProps}
                            label="Nei"
                            showChildren={true}
                            value="no"
                        >
                            Vil ikke!
                        </RadioBlock>
                    </>
                )}
            </RadioButtonInputGroup>
        </>
    );
}
