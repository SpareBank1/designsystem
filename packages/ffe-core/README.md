# @sb1/ffe-core

**ffe-core** has Less common to all components in FFE - typography, colors, etc.
It also includes JavaScript exports for color and breakpoint variables.

## Install

```bash
npm install --save @sb1/ffe-core
npm install --save-dev less less-plugin-npm-import    # less-plugin is optional, but can simplify imports
```

## Usage

```less
/* Your project's main .less import file */
@import 'npm://@sb1/ffe-core/less/ffe';                      // with less-plugin
@import '~@sb1/ffe-core/less/ffe';                           // with webpack and less-loader
@import '../path/to/node_modules/@sb1/ffe-core/less/ffe';    // direct reference
```

In previous versions of `ffe-core`, some styling was applied directly to DOM
elements. This practice is discouraged, but if you require it for legacy
reasons, it is still available as an optional import:
```less
@import '~@sb1/ffe-core/less/ffe-element-styling';
```

### Importing piece by piece

In some cases, you don't require everything in this package. You can import the
pieces you require if you want:

```less
// Variables
@import '~@sb1/ffe-core/less/colors';
@import '~@sb1/ffe-core/less/breakpoints';
@import '~@sb1/ffe-core/less/dimensions';
@import '~@sb1/ffe-core/less/motion';

// Font size mixins
@import '~@sb1/ffe-core/less/font-sizes';
// Basic typography
@import '~@sb1/ffe-core/less/typography';
// Accessibility helpers
@import '~@sb1/ffe-core/less/accessibility';
```

### JavaScript variables

The colors and breakpoint LESS variables specified in this package are also
available as named JavaScript imports. This can be useful for consumers that use
CSS-in-JS, or that need access to these values in their JavaScript for other
reasons. They are named the same as their LESS siblings, but are camelCased, and
are without their `@ffe-` prefix.

This is how you import them:
```js
import { greyCharcoal, white, breakpointMd } from 'ffe-core';
```

Please refer to the [`colors.less`](https://github.com/SpareBank1/designsystem/blob/develop/packages/ffe-core/less/colors.less)
and [`breakpoints.less`](https://github.com/SpareBank1/designsystem/blob/develop/packages/ffe-core/less/breakpoints.less)
files for a full list of exported variables.
