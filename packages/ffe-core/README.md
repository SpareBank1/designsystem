# @sb1/ffe-core

**ffe-core** has Less common to all components in FFE - typography, colors, etc.

## Install

```bash
npm install --save @sb1/ffe-core
npm install --save-dev less less-plugin-npm-import    # less-plugin er valgfri, men kan forenkle imports
```

## Usage

```less
/* Ditt prosjekts .less */
@import 'npm://@sb1/ffe-core/less/ffe';                      // med less-plugin
@import '~@sb1/ffe-core/less/ffe';                           // med webpack og less-loader
@import '../path/to/node_modules/@sb1/ffe-core/less/ffe';    // direkte referanse


/* Om du vil ha element styling finnes det en annen import */
/* Det anbefales ikke å bruke denne siden det kan skape problemer med andre CSS-regler */
@import 'npm://@sb1/ffe-core/less/ffe-element-styling';
```

### Import av enkelte less filer

I noe tilfeller trenger man kanskje kun deler av ffe-core. Derfor kan hver fil importeres for seg selv.

```less
// useful variables
@import '~@sb1/ffe-core/less/colors';
@import '~@sb1/ffe-core/less/breakpoints';
@import '~@sb1/ffe-core/less/dimensions';
@import '~@sb1/ffe-core/less/motion';
@import '~@sb1/ffe-core/less/font-sizes';
@import '~@sb1/ffe-core/less/typography';
@import '~@sb1/ffe-core/less/accessibility';
```
