import { useState } from 'react';
import { Datepicker } from '@sb1/ffe-datepicker-react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';

() => {
    const [showErrors, setShowErrors] = useState(false);

    return (
        <div style={{ background: '#002776', padding: 16 }}>
            <div className="ffe-button-group">
                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>
                    Skru feilmeldinger av/på
                </SecondaryButton>
            </div>
            <InputGroup
                onColoredBg={true}
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
                        <p style={{ color: 'white' }}>Ekstra innhold</p>
                    </>
                )}
            </InputGroup>

            <InputGroup
                onColoredBg={true}
                label="E-postadresse"
                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}
            >
                <Input />
            </InputGroup>

            <InputGroup
                onColoredBg={true}
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

            <InputGroup
                onColoredBg={true}
                label="Fritekst"
                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}
            >
                <TextArea rows={4} />
            </InputGroup>

            <InputGroup
                onColoredBg={true}
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

            <InputGroup
                fieldMessage={showErrors ? 'Ooops' : null}
                onColoredBg={true}
            >
                <Checkbox name="check">Kryssboks</Checkbox>
            </InputGroup>
        </div>
    );
};
