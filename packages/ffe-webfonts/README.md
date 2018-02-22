# FFE web fonts

## Install

```
npm install ffe-webfonts
```

## Usage

There are two ways to use `ffe-webfonts`:

1. Copy the font files from `node_modules/` and use `fonts.less`
2. Use `fonts.css` where the fonts are base64 encoded inline

**You also need to include the webfonts license.** It is included as a comment in both `fonts.css` and `fonts.less`.
Just make sure your build tools don't strip those comments out.

Approach 1 is propably what you want for performance reasons.

### Using Less

Copy the font files from `node_modules/ffe-webfonts/fonts/` to a folder that will be shipped with your app. You can use
npm-scripts, (if you use Webpack) [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin), or what
ever you see fit to get the files to where they need to be.

Import `node_modules/ffe-webfonts/fonts.less` in your app:

```less
@import 'npm://ffe-webfonts/fonts.less';                      // with less-plugin
@import '~ffe-webfonts/fonts.less';                           // with webpack and less-loader
@import '../path/to/node_modules/ffe-webfonts/fonts.less';    // by path
```

You need to provide a constant named `@fonts-url` after the `@import` with a URL path to the fonts folder so the browser
knows where to download the font files.

```less
@import '~ffe-webfonts/fonts.less';
@fonts-url: '/privat/forsikring/fonts';
```

### CSS with inline fonts

```css
@import url('~ffe-webfonts/fonts.css');
```

```less
@import (inline) '~ffe-webfonts/fonts.css';
```

# Licenses

* Source code is licensed under MIT
* The MuseoSans fonts are licensed separately. See LICENSE-fonts.md.
