import { useState, useId } from 'react';
import { RadioButtonInputGroup, RadioBlock } from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';

() => {
    const [showErrors, setShowErrors] = useState(false);
    const blockName = useId();
    const [yesOrNoBlockRadio, setYesOrNoBlockRadio] = useState('yes');

    return (
        <>
            <div className="ffe-button-group">
                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>
                    Skru feilmeldinger av/på
                </SecondaryButton>
            </div>
            <RadioButtonInputGroup
                label="Velg ja eller nei"
                name={blockName}
                selectedValue={yesOrNoBlockRadio}
                fieldMessage={showErrors ? 'Feil valg' : null}
                onChange={e => setYesOrNoBlockRadio(e.target.value)}
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
};
