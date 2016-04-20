# ffe-checkbox-react 

React implementation of the checkbox found in FFE.

## Install

```
$ npm install --save ffe-checkbox-react
```

`ffe-checkbox-react` depends on `ffe-core` being present and imported in your project.
More specifically, the CSS classes related to checkboxes in ffe-core should be in your CSS Object Model when using this component.

## Usage

```javascript
import Checkbox from 'ffe-checkbox-react';

<Checkbox
        onChange={ function }
        checked={ boolean }
        name={ string }
        label={ string } 
/>
```

If you need a description thats more complex than just a string, use `children`:

```
<Checkbox
        onChange={ function }
        checked={ boolean }
        name={ string } >
    <Icon />
    Some text
    <AnotherIcon />
</Checkbox>
```