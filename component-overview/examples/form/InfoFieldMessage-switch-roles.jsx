import { useState } from 'react';
import { InfoFieldMessage } from '@sb1/ffe-form-react';
import { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';

() => {
    const [selected, setSelected] = useState();

    return (
        <>
            <RadioButtonInputGroup
                label="Velg Aria-role"
                name="aria-role"
                onChange={e => setSelected(e.target.value)}
                selectedValue={selected}
            >
                {inputProps => (
                    <>
                        <RadioButton {...inputProps} value="status">
                            Status
                        </RadioButton>
                        <RadioButton {...inputProps} value="alert">
                            Alert
                        </RadioButton>
                        <RadioButton {...inputProps} value="none">
                            None
                        </RadioButton>
                    </>
                )}
            </RadioButtonInputGroup>
            {(() => {
                return (<div>
                    <InfoFieldMessage role={selected}>
                        Aria-role: {selected ? selected : 'status'}
                    </InfoFieldMessage>
                </div>)
            })()}
        </>
    );
}