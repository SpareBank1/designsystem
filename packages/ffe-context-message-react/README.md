# ffe-context-message-react

## Intended use

Messagebox showing non-critical tip or information about a page or product.

## Install

```
$ npm install --save ffe-context-message-react
```

## Usage

```javascript
import { ContextInfoMessage } from 'ffe-context-message-react';

<ContextInfoMessage>
    <p className="ffe-body-paragraph">
        Info about something interesting
    </p>
</ContextInfoMessage>
```

### Available props

```javascript
animationLengthMs,  // Number. Control close animation length. Default value 300.
children,           // Node. Content in the message. Required.
contentElementId,   // String. Used to link 'children' for universal accessibility.
header,             // String. Header summing up the message.
headerElementId,    // String. Used to link 'header' for universal accessibility.
icon,               // Element, preferably an icon from ffe-icons-react. A white background circle will automatically be set for the icon passed.
locale,             // String. One of 'nb', 'nn' or 'en'. Default value 'nb'.
onClose,            // Function. Callback that is called on close click. Use in conjunction with showCloseButton.
showCloseButton,    // Boolean. Renders a button that lets users close the message.
style,              // Object. Sets styles of the outermost container. Prefer using className.
```

### Peer Dependencies

Like all React packages in FFE, this package expects a Less-package to be imported in your project's main css- or less-file.
This package requires [ffe-context-message](***REMOVED***).

## Examples

The current version of the package can be seen in the SB1 Design Manual at [***REMOVED***](***REMOVED***).

## Development

To run a standalone (and extremely simple) application for testing changes to either this component or its sibling CSS package. Clone this repo and run
```
$ npm install && npm run dev
```
This should spin up a server on [localhost:3000](http://localhost:3000).

For testing changes to the CSS package, first run `npm link` in the root of the cloned [ffe-system-message](***REMOVED***) pacakge and then run `npm link ffe-system-message` in the root of this package. Changes in the CSS file(s) should reflect immediately in the app running on port 3000.
