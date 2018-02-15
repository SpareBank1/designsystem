# ffe-details-list-react

## Install

```
$ npm install --save ffe-details-list-react
```

Add the included less file to your imports as well:

```css
@import 'node_modules/ffe-details-list-react/less/ffe-details-list-react';
```

## Usage

For more information about how and when to use this component, check the [documentation](src/DetailList.md).

### NOTE: This package does not use the `ffe-details-list` package

The `ffe-details-list` package is deprecated and kept around for legacy reasons. This React component uses the
`ffe-grid`-package to attain the same design and behavior, without the need for any extra LESS packages. This way, the
`ffe-details-list` components can be used in connection to other `ffe-grid`-based components.
