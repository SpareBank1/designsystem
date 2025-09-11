# @sb1/ffe-core

**ffe-core** contains styling common to all components in FFE - typography, colors, etc.
It also includes JavaScript exports for color and breakpoint variables.

## Install

```bash
npm install --save @sb1/ffe-core
npm install --save-dev less less-plugin-npm-import    # less-plugin is optional, but can simplify imports
```

## Usage

Full documentation on usage is available at:

- https://design.sparebank1.no/komponenter/typografi/
- https://design.sparebank1.no/profil/farger/
- https://design.sparebank1.no/profil/spacing/

```less
/* Your project's main .less import file */
@import 'npm://@sb1/ffe-core/less/ffe'; // with less-plugin
@import '~@sb1/ffe-core/less/ffe'; // with webpack and less-loader
@import '../path/to/node_modules/@sb1/ffe-core/less/ffe'; // direct reference
```

### Importing specific parts

In some cases, you may not require everything in this package. You can import the
parts you require if you want:

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

### Importing compiled CSS

If your project does not use Less, you can import the compiled styling:

```css
@import '~@sb1/ffe-core/css/ffe.css';
```

## Theming with CSS custom properties

Theming of components is supported through a set of custom properties, defined in a `less/theme.less` file in every styling package. The properties in `ffe-core` constitute a base theme, which is in turn used as default values in other packages. You may override the properties in each individual package in order to customize a single component, or override the properties defined in `ffe-core` to customize a sitewide theme.

If your project uses the core styling, you're probably good to go. If not, make sure to import the core properties in `theme.less` from `ffe-core`:

```css
@import '~@sb1/ffe-core/less/theme';
```

## Design tokens

This package provides a set of less files containing variables for colors and other reusable constants. These files are:

- less/breakpoints.less
- less/colors.less
- less/dimensions.less
- less/motion.less
- less/spacing.less

The less variables specified in this package are also available as named JavaScript imports. This can be useful for consumers that use CSS-in-JS, or that need access to these values in their JavaScript for other reasons. They are named the same as their LESS siblings, but are camelCased, and do not have the `@ffe-` prefix.

This is how you import them:

```js
import {
    fargeHvit,
    fargeFjell30,
    breakpointMd,
    spacingXl,
} from '@sb1/ffe-core';
```

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
