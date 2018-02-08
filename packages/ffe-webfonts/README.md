# FFE web fonts

## Install

```
npm install ffe-webfonts
```

## Usage

### less

FFE trenger at det er definert en konstant 'fonts-url'. Denne må inneholde rot-pathen i appens URL.
FFEs fonter må kopieres til denne pathen, f.eks. /privat/forsikring/fonts.


```less
@import "npm://ffe-webfonts/fonts.less";                      // med less-plugin
@import "~ffe-webfonts/fonts.less";                           // med webpack og less-loader
@import "../path/to/node_modules/ffe-webfonts/fonts.less";    // direkte referanse

@fonts-url: '/privat/forsikring/fonts';


### CSS med inline fonts som data-uris.

```css
@import url("~ffe-webfonts/fonts.css");
```

```less
@import (inline) "~ffe-webfonts/fonts.css";
```
