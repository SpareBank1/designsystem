# @sb1/ffe-webfonts

## Install

```
npm install @sb1/ffe-webfonts
```

## Usage

Full documentation on typgraphy usage is available at https://design.sparebank1.no/komponenter/typografi/.

There are two ways to use `ffe-webfonts`:

1. Copy the font files from `node_modules/@sb1/ffe-webfonts/fonts/` and use `sb1-fonts.less`
2. Use `sb1-fonts.css`, where the fonts are base64 encoded inline

Approach 1 is probably what you want for performance reasons.

### Using Less

Copy the font files from `node_modules/@sb1/ffe-webfonts/fonts/` to a folder that will be shipped with your app. You can use npm-scripts, (if you use Webpack) [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin), or whatever you see fit to get the files to where they need to be.

Import `node_modules/@sb1/ffe-webfonts/sb1-fonts.less` in your app:

```less
@import 'npm://@sb1/ffe-webfonts/sb1-fonts.less'; // with less-plugin
@import '~@sb1/ffe-webfonts/sb1-fonts.less'; // with webpack and less-loader
@import '../path/to/node_modules/@sb1/ffe-webfonts/sb1-fonts.less'; // by path
```

You need to provide a constant named `@fonts-url` after the `@import` with a URL path to the fonts folder so the browser knows where to download the font files.

```less
@import '~@sb1/ffe-webfonts/sb1-fonts.less';
@fonts-url: '/privat/forsikring/fonts';
```

### CSS with inline fonts

```css
@import url('~@sb1/ffe-webfonts/sb1-fonts.css');
```

```less
@import (inline) '~@sb1/ffe-webfonts/sb1-fonts.css';
```

# Licenses

-   Source code is licensed under MIT

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
