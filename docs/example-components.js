import React from 'react';
import {
    ErrorFieldMessage,
    Input,
    InputGroup,
    Label,
    SuccessFieldMessage,
    TextArea,
    Tooltip
} from '../src';


export const InputExample = props => (
    <InputGroup
        label={ <Label htmlFor="InputExample"> InputExample </Label> }
        tooltip={ <Tooltip onClick={ () => console.log('toolTip onClick') }>Foo Bar!</Tooltip> }
        fieldMessage={ <ErrorFieldMessage>ErrorFieldMessage</ErrorFieldMessage> }
    >
        <Input
            id="InputExample"
            className="ffe-input-field--small"
            type="tel"
            name="textInput"
            onChange={ e => console.log('onChange', e.target.value) }
            onBlur={ e => console.log('onBlur', e.target.value) }
        />
    </InputGroup>
);

export const TextAreaExample = props => (
    <InputGroup
        label="TextAreaExample"
    >
        <TextArea
            id="TextAreaExample"
        />
    </InputGroup>
);

export const ErrorExample = props => (
    <InputGroup
        label="ErrorExample"
        fieldMessage="Feil"
    >
        <Input id="ErrorExample"/>
    </InputGroup>
);

export const FieldMessageSuccessExample = props => (
    <InputGroup
        label="FieldMessageSuccessExample"
        fieldMessage={ <SuccessFieldMessage>Dette gjorde du bra!</SuccessFieldMessage> }
    >
        <Input id="FieldMessageSuccessExample"/>
    </InputGroup>
);

export const GeneratedIdExample = props => {
    return (
        <InputGroup
            label="GeneratedIdExample"
        >
            <Input />
        </InputGroup>
    );
};
