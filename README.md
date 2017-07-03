# ffe-grid-react

## Install

```
$ npm install --save ffe-grid-react
```

## Usage

Like all React packages in FFE, this package expects the package `ffe-grid` to be imported in your project's main css- or less-file.

```javascript
import { Grid, GridRow, GridCol } from 'ffe-grid-react';

render() {
    return (
        <Grid>
            <GridRow className='my-special-row' reverse={true}>
                <GridCol
                    center={true}
                    lg={{ cols: 4, offset: 4 }}
                    md={{ cols: 4, offset: 4 }}
                    sm={12}
                >
                    <p>This is a column</p>
                </GridCol>
            </GridRow>
            <GridRow bgBluePale={true}>
                <GridCol
                    lg="2"
                    md="2"
                    sm="6"
                >
                    <p>This is also a column</p>
                </GridCol>
            </GridRow>
        </Grid>
    );
}
```

To set the number of cols and offset for `lg`, `md` or `sm` displays use the object syntax, for just setting the number of cols you can supply either a string or a number.

All the components aim to support the same modifiers that can be found in [ffe-grid](***REMOVED***). Modifiers that are snake-cased in `ffe-grid` is supplied with camelCase to the react-components.

All components support the 'className' property and can accept a custom element name via the 'element' property if something other than a _div_ should be used.

## Grid overlay

For å lettere inspisere hvordan innholdet legger seg i kolonner, eller for å se hvordan gridden vil kunne passe inn på en eksisterende webside eksporteres det et separat util som vil lage en full-skjerm overlay med kolonner på en eksisterende side. Fra denne modulen eksporteres bare en funksjon som lager en fixed positioned div og det er opp til applikasjonen hvordan man ønsker å bruke den.

Et eksempel er
```javascript
import showGrid from 'ffe-grid-react/lib/show-grid';
window.showGrid = showGrid;
```

Funksjonen man importerer fra `ffe-grid-react/lib/show-grid` fungerer som en toggle.

## Test

# Local

For å teste endringer lokalt kan man kjøre i dette prosjektes mappe:

```
sudo npm link
```

Og i prosjektet som skal bruke endringene gjort lokalt kan man kjøre:

```
npm link ffe-grid-react
```
