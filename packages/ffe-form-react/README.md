# ffe-form-react

React module for using and creating FFE form elements.

## Install

```
npm install --save ffe-form-react
```

## Usage

```javascript
import React from 'react';
import {
    InputGroup,
    Input,
    Label
    Tooltip,
    ErrorFieldMessage,
} from 'ffe-form-react';


export const InputExample = props => (
    <InputGroup
        label={ <Label htmlFor="InputExample"> InputExample </Label>}
        tooltip={<Tooltip onClick={ () => console.log('toolTip onClick')}>Foo Bar!</Tooltip>}
        fieldMessage={ <ErrorFieldMessage>ErrorFieldMessage</ErrorFieldMessage>}
    >
        <Input
            id="InputExample"
            className="some-modifier"
            type="tel"
            name="textInput"
            onChange={ e => console.log('onChange', e.target.value) }
            onBlur={ e => console.log('onBlur', e.target.value) }
        />
    </InputGroup>
);
```
