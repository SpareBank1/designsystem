import { Dropdown } from '@sb1/ffe-dropdown-react';
import { InputGroup } from '@sb1/ffe-form-react';

<InputGroup label="Måned" fieldMessage="Du må velge måned">
    <Dropdown defaultValue="placeholder">
        <option value="placeholder" disabled>
            Velg måned
        </option>
        <option value="jan">Januar</option>
        <option value="feb">Februar</option>
        <option value="mar">Mars</option>
        <option value="apr">April</option>
        <option value="mai">Mai</option>
    </Dropdown>
</InputGroup>
