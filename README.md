# ffe-dropdown-react

React implementation of the dropdown found in FFE.

## Install

```
$ npm install --save ffe-dropdown-react
```

`ffe-dropdown-react` depends on `ffe-core` being present and imported in your project.
More specifically, the CSS classes related to dropdowns in ffe-core should be in your CSS Object Model when using this component.

## Usage

```javascript
import Dropdown from 'ffe-dropdown-react';
```

```javascript
<Dropdown label={ labelTextString } onChange={ function }>
    { cards.map(c => <option value={ c.id }>{ c.name }</option>) }
</Dropdown>
```

The passed function will be called with the `SynthethicEvent` dispatched by `React`,
allowing access to the `value` property of the selected option through `e.target.value`, where `e` is the argument passed.


If you need to render a label tag outside of the component and pass an id for the select as a parameter you can pass an id attribute.
The label-attribute should then be omitted.

```javascript
<label for={ uniqueIdString }>{ labelTextString }</label>
<Dropdown id={ uniqueIdString } onChange={ function }>
    { cards.map(c => <option value={ c.id }>{ c.name }</option>) }
</Dropdown>
```

If you want to initialize the dropdown with a non-empty value, you can supply a `defaultValue` prop.

To get an error message showing pass `error` and `errorMessage` to the `Dropdown`.

```javascript
<Dropdown defaultValue="foo" error="true" errorMessage="test">
    <option value="make_foo" disabled="true">Not Bar</option>
    <option value="bar">Bar</option>
</Dropdown>
```
