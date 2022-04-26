import { useState } from 'react';
import { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';

() => {
    const [selected, setSelected] = useState();

    return (
        <RadioButtonInputGroup
            inline={true}
            label="Hva er din favorittfarge?"
            name="favoriteColor"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
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
    );
}
