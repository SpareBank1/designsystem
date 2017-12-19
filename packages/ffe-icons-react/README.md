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
Note that doing this will inline every single icon we have
available in your final bundle so you might want to avoid
doing this for production code

Alternatively import each icon as a sub module.

```javascript
import React from 'react';
import ChevronIcon from 'ffe-icons-react/chevron-ikon';

<ChevronIcon className="icon"/>
```
Doing this will ensure that only the icons you actually
use are sent to the client.

### Available props

```
className: PropTypes.string
desc: PropTypes.string
focusable: PropTypes.bool
onClick: PropTypes.func
style: PropTypes.object
tabIndex: PropTypes.number
title: PropTypes.string
```

* Use css and `className` to change size and color, or use `style` and react inline styles.
* Use `desc` to create a `<desc></desc>` element inside the icon. Default is `''`.
* Use `focusable` to make svg focusable on old IE. Default is false.
* Use `tabIndex` to set tabIndex of the icon. Default is undefined.
* Use `title` to create a `<title></title>` element inside the icon. Default is `''`.




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
