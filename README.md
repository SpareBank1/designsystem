# ffe-message-box-react

## Install

```
$ npm install --save ffe-message-box-react
```

## Usage

Like all React packages in FFE, this package expects the package `ffe-message-box` to be imported in your project's main css- or less-file.

Import one or more of the four predefined message types, passing a title and content either as a prop or component children.

```javascript
import { SuccessMessage, ErrorMessage } from 'ffe-message-box-react';

<SuccessMessage
    title="Regionsperre er nå oppdatert!" 
    content="Dersom noen forsøker å bruke kortet i en sperret region mottar du en SMS (gratis)." />

<ErrorMessage
    title="Noe gikk galt">
    Vi opplever dessverre tekniske problemer tilknyttet regionsperre. 
    Vi jobber med å rette opp feilen. Prøv igjen senere, eller kontakt oss for spørsmål.
</ErrorMessage>
```

## Examples

The current version of the package can be seen in the SB1 Design Manual at [***REMOVED***](***REMOVED***).