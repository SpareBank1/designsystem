import { useState } from 'react';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import { LinkText, Paragraph } from '@sb1/ffe-core-react';
import {
    InputGroup,
    Checkbox,
    Input,
    TextArea,
    ToggleSwitch,
} from '@sb1/ffe-form-react';
import {
    ButtonGroup,
    ActionButton,
    PrimaryButton,
    SecondaryButton,
} from '@sb1/ffe-buttons-react';

() => {
    const [themed, setThemed] = useState(false);
    const toggleTheme = () => setThemed(!themed);

    const css = `.sb1ex-theme-example {
        --ffe-g-primary-color: #de1a21;
        --ffe-g-border-color: #495057;
        --ffe-g-border-radius: 2px;
        --ffe-g-link-color: #de1a21;
        --ffe-g-link-color-hover: #891212;
        --ffe-g-link-color-visited: #891212;
        --ffe-v-button-primary-color: #de1a21;
        --ffe-v-button-primary-color-hover: #891212;
        --ffe-v-button-action-color: #404040;
        --ffe-v-button-action-color-hover: #000;
        --ffe-v-button-tertiary-color: #020a0a;
        --ffe-v-button-tertiary-color-hover: #de1a21;
        --ffe-v-button-secondary-color: #000;
        --ffe-v-button-secondary-color-bg: #d6d6d6;
    }`;

    return (
        <>
            <style>{themed ? css : ''}</style>
            <ToggleSwitch onChange={toggleTheme} value={themed}>
                Theming
            </ToggleSwitch>
            <div className="sb1ex-theme-example">
                <InputGroup label="E-postadresse">
                    <Input />
                </InputGroup>

                <InputGroup label="Måned">
                    <Dropdown defaultValue="placeholder">
                        <option value="placeholder" disabled>
                            Velg måned
                        </option>
                        <option value="jan">Januar</option>
                        <option value="feb">Februar</option>
                        <option value="mar">Mars</option>
                    </Dropdown>
                </InputGroup>

                <InputGroup label="Fritekst">
                    <TextArea rows={4} />
                </InputGroup>

                <InputGroup>
                    <Checkbox name="check">Kryssboks</Checkbox>
                </InputGroup>

                <Paragraph>
                    Les mer på{' '}
                    <LinkText href="https://www.lofavor.no/">
                        lofavor.no
                    </LinkText>
                    .
                </Paragraph>

                <ButtonGroup ariaLabel="Knappegruppe">
                    <ActionButton>Action knapp</ActionButton>
                    <PrimaryButton>Primary knapp</PrimaryButton>
                    <SecondaryButton>Secondary knapp</SecondaryButton>
                </ButtonGroup>
            </div>
        </>
    );
};
