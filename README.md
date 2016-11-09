# ffe-system-message-react

## Install

```
$ npm install --save ffe-system-message-react
```

## Usage

Like all React packages in FFE, this package expects the package `ffe-system-message` to be imported in your project's main css- or less-file.

Import one or more of the three predefined message types, passing a header as a prop and content as component children.

```javascript
import { SystemInfoMessage, SystemErrorMessage } from 'ffe-system-message-react';

<SystemInfoMessage header="En nyttig beskjed">
    Alt du sender inn her rendres i et p-element
</SystemInfoMessage>
```

## Examples

The current version of the package can be seen in the SB1 Design Manual at [***REMOVED***](***REMOVED***).

## Development

To run a standalone (and extremely simple) application for testing changes to either this component or its sibling CSS package. Clone this repo and run
```
$ npm install && npm run dev
```
This should spin up a server on [localhost:3000](http://localhost:3000).

For testing changes to the CSS package, first run `npm link` in the root of the cloned [ffe-system-message](***REMOVED***) pacakge and then run `npm link ffe-system-message` in the root of this package. Changes in the CSS file(s) should reflect immediately in the app running on port 3000.
