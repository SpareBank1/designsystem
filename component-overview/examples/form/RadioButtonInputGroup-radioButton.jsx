import {useRef, useState} from 'react';
import {
    RadioButtonInputGroup,
    RadioButton,
    Tooltip,
} from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { v4 as uuid } from "uuid";

() => {
    const [showErrors, setShowErrors] = useState(false);
    const [selectedColor, setSelectedColor] = useState('red');
    const colorName = useRef(`color-${uuid()}`).current;

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
                    </>
                )}
            </RadioButtonInputGroup>
        </>
    );
}
