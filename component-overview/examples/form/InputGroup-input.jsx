import { useState } from 'react';
import { Datepicker }from '@sb1/ffe-datepicker-react';
import Dropdown from '@sb1/ffe-dropdown-react';
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
                label="Telefonnummer"
                tooltip="Vi bruker telefonnummer for å sende deg kvittering på SMS"
                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}
            >
                {inputProps => (
                    <>
                        <Input
                            type="tel"
                            name="mobile"
                            onChange={e =>
                                console.log('onChange', e.target.value)
                            }
                            onBlur={e => console.log('onBlur', e.target.value)}
                            {...inputProps}
                        />
                        <p>Ekstra innhold</p>
                    </>
                )}
            </InputGroup>
        </>
    );
}
