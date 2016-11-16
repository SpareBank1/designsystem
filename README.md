# ffe-context-message-react

## Intended Use

Messagebox showing non-critical tip or information about a page or product.

## Install

```
$ npm install --save ffe-context-message-react
```

## Usage

Like all React packages in FFE, this package expects the package `ffe-system-message` to be imported in your project's main css- or less-file.


```javascript
import { ContextInfoMessage, ContextTipMessage } from 'ffe-context-message-react';

<ContextInfoMessage 
        header='Content header'
        icon={<ThumbUpIcon />}  
        style={{width : '50%'}}
        onClose={ () => {} }
        showCloseButton={false}
        locale='en'
    >
    <p>
       Info about something interesting
    </p>
</ContextInfoMessage>
```

### Props
```javascript
children : Content in the message. Required,
showCloseButton : Boolean. Required.
locale : One of 'nb', 'ny' or 'en'. Default value 'nb',
header : Content header,
icon : FFEIcon. A white background circle will automatically be set for the icon passed,
style: Style object, sets styles of the outermost container,
onClose : Callback that is called on close click,
```

## Examples

The current version of the package can be seen in the SB1 Design Manual at [design.test.sparebank1.no](http://design.test.sparebank1.no).

## Development

To run a standalone (and extremely simple) application for testing changes to either this component or its sibling CSS package. Clone this repo and run
```
$ npm install && npm run dev
```
This should spin up a server on [localhost:3000](http://localhost:3000).

For testing changes to the CSS package, first run `npm link` in the root of the cloned [ffe-system-message](https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-system-message) pacakge and then run `npm link ffe-system-message` in the root of this package. Changes in the CSS file(s) should reflect immediately in the app running on port 3000.
