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
