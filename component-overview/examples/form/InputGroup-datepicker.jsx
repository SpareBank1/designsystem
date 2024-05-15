import { useState } from 'react';
import { Datepicker }from '@sb1/ffe-datepicker-react';
import { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';
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
            <InputGroup
                label="Dato"
                fieldMessage={showErrors ? 'Feil dato' : null}
            >
                <Datepicker
                    locale="nb"
                    maxDate="31.12.2016"
                    minDate="01.01.2016"
                    onChange={f => f}
                    value={'01.01.2016'}
                />
            </InputGroup>
        </>
    );
}
