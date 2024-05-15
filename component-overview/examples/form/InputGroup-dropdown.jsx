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
                label="Måned"
                fieldMessage={showErrors ? 'Du må velge måned' : null}
            >
                <Dropdown defaultValue="placeholder">
                    <option value="placeholder" disabled>
                        Velg måned
                    </option>
                    <option value="jan">Januar</option>
                    <option value="feb">Februar</option>
                    <option value="mar">Mars</option>
                </Dropdown>
            </InputGroup>
        </>
    );
}
