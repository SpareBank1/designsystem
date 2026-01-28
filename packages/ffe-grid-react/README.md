# @sb1/ffe-grid-react

## Beskrivelse

Grid-system for responsive layouts (foreldet - bruk CSS Grid eller Flexbox i stedet).

## Installasjon

```bash
npm install --save @sb1/ffe-grid-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/grid/.

## DevTool: Grid overlay

For å lettere inspisere hvordan innholdet legger seg i kolonner, eller for å se hvordan gridden vil kunne passe inn på en eksisterende webside eksporteres det et separat util som vil lage en full-skjerm overlay med kolonner på en eksisterende side. Fra denne modulen eksporteres bare en funksjon som lager en fixed positioned div og det er opp til applikasjonen hvordan man ønsker å bruke den.

Et eksempel er

```javascript
import showGrid from '@sb1/ffe-grid-react/lib/show-grid';
window.showGrid = showGrid;
```

Funksjonen man importerer fra `ffe-grid-react/lib/show-grid` fungerer som en toggle.

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
