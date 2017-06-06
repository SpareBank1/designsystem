# ffe-checkbox-react

React implementation of the checkbox found in FFE

## Install

```
$ npm install --save ffe-checkbox-react ffe-form
```

`ffe-checkbox-react` depends on `ffe-form` being present and imported in your
project. More specifically, the CSS classes related to checkboxes in ffe-core
should be in your CSS Object Model when using this component:

```less
@import 'npm://ffe-form/less/checkbox';   // Less with less-plugin-npm-import
@import '~ffe-form/less/checkbox';        // Less with webpack and less-loader
```

## Usage

```javascript
import Checkbox from 'ffe-checkbox-react';

<Checkbox
        onChange={ function }
        checked={ boolean }
        name={ string }
        label={ string }
        invalid={ boolean }
        noMargins={ boolean } // disables top- and bottom margins, useful for use in tables etc
/>
```

If you need a more complex description, use `children`:

```
<Checkbox>
    <Icon />
    Some text
    <AnotherIcon />
</Checkbox>
```
