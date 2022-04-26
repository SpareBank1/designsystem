import { Checkbox } from '@sb1/ffe-form-react';

<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label">Hva er du interessert i?</legend>
    <Checkbox name="interests" value="sport" inline={false}>
        Sport
    </Checkbox>
    <Checkbox name="interests" value="food" inline={false}>
        Matlaging
    </Checkbox>
    <Checkbox name="interests" value="moon" inline={false}>
        Månen
    </Checkbox>
</fieldset>
