# ffe-icons-react

React component with all svg icons in ffe-icons inlined. 

## Install

```
npm install --save ffe-icons-react
```

## Usage

Import the main module and use iconName as a prop.

```javascript
import React from 'react';
import Icon from 'ffe-icons-react';

<Icon className="icon" iconName="chevron-ikon"/>
```

Alternatively import each icon as a sub module.

```javascript
import React from 'react';
import ChevronIcon from 'ffe-icons-react/chevron-ikon';

<ChevronIcon className="icon"/>
```

### Available props

```
className: React.PropTypes.string,
style: React.PropTypes.object,
focusable: React.PropTypes.bool,
title: React.PropTypes.string,
desc: React.PropTypes.string,
tabIndex: React.PropTypes.number
```

* Use css and `className` to change size and color, or use `style` and react inline styles.
* Use `focusable` to make svg focusable on old IE. Default is false.
* Use `title` to create a `<title></title>` element inside the icon. Default is `''`.
* Use `desc` to create a `<desc></desc>` element inside the icon. Default is `''`.
* Use `tabIndex` to set tabIndex of the icon. Default is undefined.




## Development

### Building
```
npm install

npm run build
```
or
```
./buildCI.sh
```
### Testserver

```
npm run server
```
Server is now available on http://localhost:8080