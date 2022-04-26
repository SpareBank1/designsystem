import { useState } from 'react';
import { RadioBlock, RadioButtonInputGroup } from '@sb1/ffe-form-react';

() => {
    const [selected, setSelected] = useState('you');

    return (
        <RadioButtonInputGroup
            label="Hvem eier bilen du skal forsikre?"
            name="owner"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <>
                    <RadioBlock {...inputProps} label="Du" value="you" />
                    <RadioBlock
                        {...inputProps}
                        label="Ektefelle, samboer eller registrert partner"
                        showChildren={true}
                        value="partner"
                    >
                        Da må ektefelle, samboer eller registrert partner skrive
                        inn detaljene sine under.
                    </RadioBlock>
                    <RadioBlock
                        {...inputProps}
                        label="Leasingselskap"
                        value="leasing-company"
                    >
                        Da må leasingselskapet gi deg noen detaljer som du må
                        skrive inn under.
                    </RadioBlock>
                </>
            )}
        </RadioButtonInputGroup>
    );
}
