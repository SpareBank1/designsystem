import { Checkbox } from '@sb1/ffe-form-react';

<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label ffe-form-label--block">
        Hvilke aviser leser du?
    </legend>
    <Checkbox name="newspapers" value="vg">
        VG
    </Checkbox>
    <Checkbox name="newspapers" value="dagbladet">
        Dagbladet
    </Checkbox>
    <Checkbox name="newspapers" value="aftenposten">
        Aftenposten
    </Checkbox>
</fieldset>
