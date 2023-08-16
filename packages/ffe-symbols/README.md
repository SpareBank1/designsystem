# @sb1/ffe-symbols

## Install

```bash
npm install --save @sb1/ffe-symbols
```

## Usage

Full documentation on icon usage is available at https://design.sparebank1.no/komponenter/ikoner/.

There are two ways to use `ffe-symbols`:

1. Copy the font files from `node_modules/@sb1/ffe-symbols/icons/` and use `ffe-symbol.less`
2. Use `ffe-symbol.css`, where the icon font is base64 encoded inline

Approach 1 is probably what you want for performance reasons.

### Using Less

Copy the font files from `node_modules/@sb1/ffe-symbols/icons/` to a folder that will be shipped with your app. You can use npm-scripts, (if you use Webpack) [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin), or whatever you see fit to get the files to where they need to be.

Import `node_modules/@sb1/ffe-symbols/ffe-symbol.less` in your app:

```less
@import 'npm://@sb1/ffe-symbols/ffe-symbol.less'; // with less-plugin
@import '~@sb1/ffe-symbols/ffe-symbol.less'; // with webpack and less-loader
@import '../path/to/node_modules/@sb1/ffe-symbols/ffe-symbol.less'; // by path
```

You need to provide a constant named `@icons-url` after the `@import` with a URL path to the fonts folder so the browser knows where to download the font files.

```less
@import '~@sb1/ffe-symbols/ffe-symbol.less';
@icons-url: '/privat/forsikring/icons';
```

### CSS with inline fonts

```css
@import url('~@sb1/ffe-symbols/ffe-symbol.css');
```

```less
@import (inline) '~@sb1/ffe-symbols/ffe-symbol.css';
```

## React component

See `@sb1/ffe-symbols-react`.

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.
NOTE: `component-overview` uses the css-implementation, so you'll have to run `npm run build` to see the changes made to the styling.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
