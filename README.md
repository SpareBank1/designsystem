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
<Dropdown label={ string } onChange={ function }>
    { cards.map(c => <option value={ c.id }>{ c.name  }</option>) }    
</Dropdown>
```

The passed function will be called with the `SynthethicEvent` dispatched by `React`, 
allowing access to the `value` property of the selected option through `e.target.value`, where `e` is the argument passed.

