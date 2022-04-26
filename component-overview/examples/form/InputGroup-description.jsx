import { InputGroup, Input } from '@sb1/ffe-form-react';

<InputGroup
    label="Telefonnummer"
    description="Vi bruker telefonnummer for å sende deg kvittering på SMS"
>
    <Input
        type="tel"
        name="mobile"
        onChange={e => console.log('onChange', e.target.value)}
        onBlur={e => console.log('onBlur', e.target.value)}
    />
</InputGroup>
