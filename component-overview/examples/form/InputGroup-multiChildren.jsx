import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';

<>
    <InputGroup
        label="Fornavn"
        fieldMessage="Jeg er en string-fieldMessage som gir feilmelding"
    >
        <Input
            name="firstname"
            onChange={e => console.log('onChange', e.target.value)}
            onBlur={e => console.log('onBlur', e.target.value)}
        />
    </InputGroup>

    <InputGroup
        label="Etternavn"
        fieldMessage={
            <ErrorFieldMessage>
                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding
            </ErrorFieldMessage>
        }
    >
        <Input
            name="lastname"
            onChange={e => console.log('onChange', e.target.value)}
            onBlur={e => console.log('onBlur', e.target.value)}
        />
    </InputGroup>

    <InputGroup
        label="Telefonnummer"
        fieldMessage={
            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>
        }
    >
        <Input
            name="phone"
            onChange={e => console.log('onChange', e.target.value)}
            onBlur={e => console.log('onBlur', e.target.value)}
        />
    </InputGroup>
</>
