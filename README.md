# ffe-message-box-react

## Install

```
$ npm install --save ffe-message-box-react
```

The package also has peer dependencies on `ffe-core@^8.1.0`,
`ffe-icons-react@^2.1.0` and `ffe-message-box@^3.0.0`.

## Usage

This package expects `ffe-core` and `ffe-message-box` to be imported in your
project's main css- or less-file.

This package contains 4 different message box components, all of which have the
same API.

The different components included are as follows:

```javascript
<SuccessMessage />
<ErrorMessage />
<TipsMessage />
<InfoMessage />
```

The components accept the following props:

- `title`: A title shown as a H4 sized heading at the top. Not required.
- `content`: Content rendered inside a `<p />` tag. Can include HTML.
- `children`: Content rendered without an enclosing tag.
- `style`: Styling object for applying style to the outermost container.

Note that no props are required. However, you should at least provide either
`content` or children for the component to look and behave correctly.

### Example usage

```javascript
import { SuccessMessage, ErrorMessage } from 'ffe-message-box-react';

<SuccessMessage
    title="Regionsperre er nå oppdatert!"
    content="Dersom noen forsøker å bruke kortet i en sperret region mottar du en SMS (gratis)."
/>

<ErrorMessage
    title="Noe gikk galt"
>
    <p className="ffe-body-text">
        Vi opplever dessverre tekniske problemer tilknyttet regionsperre.
    </p>
    <p className="ffe-body-text">
        Vi jobber med å rette opp feilen. Prøv igjen senere, eller kontakt oss
        for spørsmål.
    </p>
</ErrorMessage>
```

The current version of the package can be seen in the SB1 Design Manual at
[***REMOVED***](***REMOVED***).

### `content` vs `children`

If you have a single paragraph string you want to print out, feel free to use
the `content` property. If you have several paragraphs or some kind of custom
HTML structure you want to use as content, provide the content as children.
