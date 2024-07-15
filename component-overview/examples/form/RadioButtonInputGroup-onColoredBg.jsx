import { useState, useId } from 'react';
import {
    RadioButtonInputGroup,
    RadioButton,
    Tooltip,
} from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { fargeFjell } from '@sb1/ffe-core';

() => {
    const [showErrors, setShowErrors] = useState(false);
    const [selectedColor, setSelectedColor] = useState('red');
    const [selectedSmell, setSelectedSmell] = useState();

    // just be unique in docs demo
    const colorName = useId();
    const smellName = useId();

    return (
        <div style={{ background: fargeFjell, padding: 16 }}>
            <div className="ffe-button-group">
                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>
                    Skru feilmeldinger av/på
                </SecondaryButton>
            </div>
            <RadioButtonInputGroup
                onColoredBg={true}
                label="Hva er din favorittfarge?"
                inline={true}
                name={colorName}
                fieldMessage={showErrors ? 'Feil farge.' : null}
                tooltip={
                    <Tooltip onColoredBg={true}>
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
                        <p style={{ color: 'white' }}>Ekstra innhold</p>
                    </>
                )}
            </RadioButtonInputGroup>

            <RadioButtonInputGroup
                onColoredBg={true}
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
        </div>
    );
};
