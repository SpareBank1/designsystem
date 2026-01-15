# @sb1/ffe-header

## Install

```bash
npm install --save @sb1/ffe-core @sb1/ffe-header
```

## Usage

```less
@import 'path/to/node_modules/@sb1/ffe-header/less/ffe-header';
```

If you need a version without a dependency on `@sb1/ffe-core` and `@sb1/ffe-buttons` you can use
the `-nodeps` suffix in your import.

```less
@import 'path/to/node_modules/@sb1/ffe-header/less/ffe-header-nodeps';
```

This packages provides a transpiled version of `ffe-header-nodeps.less` in
`css/ffe-header.css'.

## Theming with CSS custom properties

In order to support theming of components, this package contains styling that depends on a set of custom properties, defined in `less/theme.less`. These properties in turn depend on a base theme defined in `ffe-core`.

If your project uses the `ffe-core`, you're probably good to go. If not, make sure to import the core properties in `theme.less`:

```css
@import '~@sb1/ffe-core/less/theme';
```

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `Storybook` with live reloading will run at http://localhost:6006/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
