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

Use css and className to change size and color. 

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