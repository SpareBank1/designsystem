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
@import 'npm://@sb1/ffe-core/less/ffe'; // with less-plugin
@import '~@sb1/ffe-core/less/ffe'; // with webpack and less-loader
@import '../path/to/node_modules/@sb1/ffe-core/less/ffe'; // direct reference
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
@import '~@sb1/ffe-core/less/spacing';

// Basic typography
@import '~@sb1/ffe-core/less/typography';
// Accessibility helpers
@import '~@sb1/ffe-core/less/accessibility';
```

## Design tokens

This package provides a set of less files containing variables for colors and other reusable constants. These files are:

-   less/breakpoints.less
-   less/colors.less
-   less/dimensions.less
-   less/motion.less
-   less/spacing.less

The less variables specified in this package are also
available as named JavaScript imports. This can be useful for consumers that use
CSS-in-JS, or that need access to these values in their JavaScript for other
reasons. They are named the same as their LESS siblings, but are camelCased, and
are without their `@ffe-` prefix.

This is how you import them:

```js
import {
    fargeHivt,
    fargeFjell30,
    breakpointMd,
    spacingXl,
} from '@sb1/ffe-core';
```
