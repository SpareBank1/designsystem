import { useState, useId } from 'react';
import {
    RadioButtonInputGroup,
    RadioBlock,
    RadioSwitch,
    RadioButton,
    Tooltip,
} from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';

() => {
    const [showErrors, setShowErrors] = useState(false);
    const [selectedColor, setSelectedColor] = useState('red');
    const [selectedSmell, setSelectedSmell] = useState();
    const [yesOrNoBlockRadio, setYesOrNoBlockRadio] = useState('yes');

    // just be unique in docs demo
    const colorName = useId();
    const smellName = useId();
    const switchName = useId();
    const blockName = useId();

    return (
        <>
            <div className="ffe-button-group">
                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>
                    Skru feilmeldinger av/på
                </SecondaryButton>
            </div>
            <RadioButtonInputGroup
                label="Hva er din favorittfarge?"
                inline={true}
                name={colorName}
                fieldMessage={showErrors ? 'Feil farge.' : null}
                tooltip={
                    <Tooltip>
                        Din favorittfarge er viktig for oss. Vår er blå!
                    </Tooltip>
                }
                selectedValue={selectedColor}
                onChange={e => setSelectedColor(e.target.value)}
            >
                {inputProps => (
                    <>
                        <RadioButton {...inputProps} value="red">
                            Rød
                        </RadioButton>
                        <RadioButton {...inputProps} value="blue">
                            Blå
                        </RadioButton>
                        <RadioButton {...inputProps} value="yellow">
                            Gul
                        </RadioButton>
                        <p>Ekstra innhold</p>
                    </>
                )}
            </RadioButtonInputGroup>

            <RadioButtonInputGroup
                label="Hva er din favorittlukt?"
                inline={true}
                name={smellName}
                fieldMessage={showErrors ? 'Feil lukt.' : null}
                selectedValue={selectedSmell}
                onChange={e => setSelectedSmell(e.target.value)}
            >
                {inputProps => (
                    <>
                        <RadioButton {...inputProps} value="grass">
                            Gress
                        </RadioButton>
                        <RadioButton {...inputProps} value="asphalt">
                            Asfalt
                        </RadioButton>
                        <RadioButton {...inputProps} value="pollen">
                            Pollen
                        </RadioButton>
                    </>
                )}
            </RadioButtonInputGroup>

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
