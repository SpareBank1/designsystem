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
    Tooltip,
    ErrorFieldMessage,
} from '../src/index';
import Label from "../src/Label";


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

### Available props


#### InputGroup
```
children: oneOfType([ node, func ]),
className: string,
fieldMessage: oneOfType([
    string,
    instanceOfComponent(ErrorFieldMessage),
    instanceOfComponent(SuccessFieldMessage),
    instanceOfComponent(InfoFieldMessage)
]),
label: oneOfType([ string, instanceOfComponent(Label) ]),
tooltip: oneOfType([ string, instanceOfComponent(Tooltip) ])
```

* `children`: Content of the InputGroup.
* `className`: ClassName for the InputGroup div
* `fieldMessage`: `ErrorFieldMessage`, `SuccessFieldMessage`, `InfoFieldMessage` or `string` that is displayed under `children`. If only a string is passed this defaults to an ErrorFieldMessage.
* `label`: `Label` or `string` that is displayed above `children`.
* `tooltip`: `Tooltip` or `string` that is displayed when the user presses the ?-button.

Note that the `InputGroup` component only accepts a single child. This is due to the fact that the `InputGroup`
decorates it's children with a few extra props like an auto-generated ID and aria-tags. If you need to have several
children, please use the function-as-a-child pattern like the following example:

```javascript
<InputField label="How old are you?">
  {(extraProps) => (
    <div>
        <InputField {...extraProps} />
        <span> years old</span>
    </div>
  )}
</InputField>
```

The `extraProps` argument is an object that needs to be spread on your input element. You can skip the enclosing `<div />`tag if
you are using React@^16.0.0.

#### Input
```
className: string,
inline: bool,
textLike: bool
```

* `className`: Class of det input element.
* `inline`: Adds `ffe-input-field--inline` class to the input element.
* `textLike`: Adds `ffe-input-field--text-like` class to the input element.

All other props are spread on the input element.


#### TextArea
```
className: string,
```
* `className`: Class of det textarea element.

All other props are spread on the textarea element.

#### Label
```
block: bool,
children: node.isRequired,
className: string,
htmlFor: string.isRequired
```

* `block`: Adds the 'ffe-form-label--block' class to the wrapper element.
* `children`: Content of the label.
* `className`: class of det label element.
* `htmlFor`: Id of input element that this label is for.

All other props are spread on the wrapper element.


#### ErrorFieldMessage, InfoFieldMessage, SuccessFieldMessage
```
children: node.isRequired
```
* `children`: Renders content as the field message.

All other props are spread on the wrapper element.


### Tooltip
```
aria-label: string,
children: node.isRequired,
className: string,
isOpen: bool,
onClick: func,
```

* `aria-label`: aria-label for the ?-button,
* `children`: content of the hidden tooltip message.
* `className`: string,
* `isOpen`: open/closes the tooltip. Clicking the button will toggle this.,
* `onClick`: onClick callback for the ?-button


## Styling

This package has peer dependencies for styling on `ffe-core` and `ffe-form`, so make sure you import
those into your application's less file.

## Development

### Building
```
npm install

npm run build
```
or
```
./buildCI.sh
```
### Testserver

```
npm start
```
Server is now available on http://localhost:8080
