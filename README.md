# ffe-dropdown-react

React implementation of the dropdown found in FFE.

## Install

```
$ npm install --save ffe-dropdown-react
```

`ffe-dropdown-react` depends on `ffe-core`, `ffe-form`, `ffe-spinner` and `ffe-dropdown` being present and imported in your project.
More specifically, the CSS classes related to dropdowns in those packages should be in your CSS Object Model when using this component.

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

To get an error message showing pass `errorMessage` to the `Dropdown`.
Passing `invalid` to the `Dropdown` will give a red color on the element.

```javascript
<Dropdown defaultValue="foo" invalid="true" errorMessage="test">
    <option value="make_foo" disabled="true">Not Bar</option>
    <option value="bar">Bar</option>
</Dropdown>
```

### Loading state

Loading state can be indicated using `isLoading`. When this is set a loading spinner will be rendered next to the dropdown.

```javascript
<Dropdown isLoading={ true }>...</Dropdown>
```
