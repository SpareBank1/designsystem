import { useState } from 'react';
import { InputGroup, TextArea } from '@sb1/ffe-form-react';
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
                label="Fritekst"
                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}
            >
                <TextArea rows={4} />
            </InputGroup>
        </>
    );
}
