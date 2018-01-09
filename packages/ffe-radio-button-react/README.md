# ffe-radio-button-react

React implementation of the radio button found in FFE.

## Install

```
$ npm install --save ffe-radio-button-react
```

`ffe-radio-button-react` depends on ffe-core being present and imported in your project.
More specifically, the CSS classes related to radio buttons in `ffe-core` should be in your
CSS Object Model when using this component.

## Usage

### `<RadioButton />`
At it's simplest you can just use the `RadioButton` directly:

```javascript
import RadioButton from 'ffe-radio-button-react';

<RadioButton
    aria-invalid={string}
    checked={boolean}
    inline={boolean}
    label= {string}
    name={string}
    onChange={function}
    tooltip={string}
    value={string, boolean, number}
/>
```

If you want to have a more complex label, you can use `children`:

```javascript
<RadioButton value="...">
    <span>Look at me, I'm a super special label!</span>
</RadioButton>
```

You can also add a helping text by using the tooltip property:
```javascript
<RadioButton 
    label="This is not the complete truth"
    tooltip="The complete truth is..."
/>
```
When the `tooltip` is truthy the `inline` capabilities will be ignored as the tooltip icon will be added to the end of the line.

### `<RadioButtonGroup />`

However, the `RadioButton` becomes a bit more useful when combined with the
`RadioButtonGroup`:

```javascript
import { RadioButton, RadioButtonGroup } from 'ffe-radio-button-react';

<RadioButtonGroup
    label="Do not mix"
    name="fruit"
    inline={true}
    onChange={function}
>
    <RadioButton aria-invalid="false" value="apple" label="Apple" checked={ true } />
    <RadioButton aria-invalid="true" value="orange" label="Orange" />
</RadioButtonGroup>
```

The `label` is optional. If `name` or `inline` is specified on the
`RadioButtonGroup`, those values will be defaulted on the children (but not
overridden, so you can create complex combinations if you need).

In case you don't want to explicitly declare `RadioButton` you can also pass an
array of button configs:

```javascript
import { RadioButton, RadioButtonGroup } from 'ffe-radio-button-react';

const buttonsConfig = [
    { value: 'apple', label: 'Apple', checked: true },
    { value: 'orange', label: 'Orange' }
];

<RadioButtonGroup
    label="Do not mix"
    name="fruit"
    inline={true}
    onChange={function}
    buttons={buttonsConfig}
/>
```

Instead of marking an individual `RadioButton` as checked, you can also pass
the selected value directly to the `RadioButtonGroup`:

```javascript
import { RadioButton, RadioButtonGroup } from 'ffe-radio-button-react';

<RadioButtonGroup label="Do not mix" name="fruit" value="apple" onChange={function}>
    <RadioButton value="apple" label="Apple" />
    <RadioButton value="orange" label="Orange" />
</RadioButtonGroup>
```

Remember that this creates a controlled React component, and you need to handle
`onChange` appropriately, otherwise you've just created a read-only field.

### `<RadioSwitch />`

This package also provides a RadioSwitch component, which lets you specify two
choices in a "switch" like design
([see docs](***REMOVED***)):

```javascript
import { RadioSwitch } from 'ffe-radio-button-react';

<RadioSwitch
    aria-invalid="false"
    firstOption={{ label: 'På', value: true }}
    label="En innstilling"
    lastOption={{ label: 'Av', value: false }}
    name="some-setting"
    onChange={function}
    value={true}
/>
```
