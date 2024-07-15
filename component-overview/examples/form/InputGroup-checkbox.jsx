import { useState, useId } from 'react';
import { InputGroup, Checkbox } from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';

() => {
    const [showErrors, setShowErrors] = useState(false);

    const name = useId();

    return (
        <>
            <div className="ffe-button-group">
                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>
                    Skru feilmeldinger av/på
                </SecondaryButton>
            </div>
            <InputGroup fieldMessage={showErrors ? 'Ooops' : null}>
                <Checkbox name={name}>Kryssboks</Checkbox>
            </InputGroup>
        </>
    );
};
