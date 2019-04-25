# @sb1/ffe-grid-react

## Install

```
npm install --save @sb1/ffe-grid-react
```

## Usage

Run Styleguidist from the repository root to see live examples and documentation,
or see the markdown files next to the component code in `src/`.

## TypeScript definition files

This component supports TypeScript - please update `index.d.ts` if you change any
of the external methods or properties in this component.

## DevTool: Grid overlay

For å lettere inspisere hvordan innholdet legger seg i kolonner, eller for å se hvordan gridden vil kunne passe inn på en eksisterende webside eksporteres det et separat util som vil lage en full-skjerm overlay med kolonner på en eksisterende side. Fra denne modulen eksporteres bare en funksjon som lager en fixed positioned div og det er opp til applikasjonen hvordan man ønsker å bruke den.

Et eksempel er

```javascript
import showGrid from '@sb1/ffe-grid-react/lib/show-grid';
window.showGrid = showGrid;
```

Funksjonen man importerer fra `ffe-grid-react/lib/show-grid` fungerer som en toggle.
