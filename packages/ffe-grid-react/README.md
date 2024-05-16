# @sb1/ffe-grid-react

## Install

```
npm install --save @sb1/ffe-grid-react
```

## Usage

Full documentation on grid usage is available at https://design.sparebank1.no/komponenter/grid/.

## DevTool: Grid overlay

For å lettere inspisere hvordan innholdet legger seg i kolonner, eller for å se hvordan gridden vil kunne passe inn på en eksisterende webside eksporteres det et separat util som vil lage en full-skjerm overlay med kolonner på en eksisterende side. Fra denne modulen eksporteres bare en funksjon som lager en fixed positioned div og det er opp til applikasjonen hvordan man ønsker å bruke den.

Et eksempel er

```javascript
import showGrid from '@sb1/ffe-grid-react/lib/show-grid';
window.showGrid = showGrid;
```

Funksjonen man importerer fra `ffe-grid-react/lib/show-grid` fungerer som en toggle.

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
