# Felles Front End i SpareBank 1

[![Build Status](https://travis-ci.org/SpareBank1/designsystem.svg?branch=master)](https://travis-ci.org/SpareBank1/designsystem)
[![Coverage Status](https://coveralls.io/repos/github/SpareBank1/designsystem/badge.svg?branch=master)](https://coveralls.io/github/SpareBank1/designsystem?branch=master)

Dette repositoryet inneholder designdokumentasjon, teknisk dokumentasjon, og kode for SpareBank 1 sitt designsystem og
implementasjonen av det - Felles frontend (FFE).

Designsystemet består av innholdet i dette repoet + verktøykassen i Figma. Begge deler håndteres av designsystem-teamet, som kan nås på #ext-designsystem på slack, eller via github issues.

## :art: Kom i gang - Figma

Verktøykassen i Figma inneholder (nesten) alle komponentene som finnes i FFE, og oppdateres regelmessig sammen med resten av FFE.
For tilgang, ta kontakt med designsystem-teamet på #ext-designsystem på slack, så hjelper de deg.

### Holde seg oppdatert

Verktøykassa blir oppdatert av designsystem-teamet ved endringer, eller når nye ting legges til. Endringene annonseres enn så
lenge via interne kanaler - spør fagleder, så blir du pekt i riktig retning for å få med deg disse beskjedene :+1:

Har du en idé til en forbedring eller et nytt konsept? Så bra! :tada: Ta kontakt via slack i #ext-designsystem kanelen, så
kan vi diskutere det videre! Er det derimot en bug, så si gjerne fra ved å åpne ett issue her på Github.

## :computer: Kom i gang - FFE

**Skal du bruke FFE for første gang? Se på dokumentasjonen under [Kom i gang](https://design.sparebank1.no/kom-i-gang.html#kom-i-gang_for-utviklere)** :book:

Resten av denne READMEen hjelper deg med å komme i gang med utvikling på selve designsystemet og pakkene som finnes her.

### Kom i gang

Klon ned repoet, og kjør `npm install`. Dette vil installere alle dependencies for alle pakker, så du kan begynne
kjøre opp alt lokalt. Når denne kommandoen er ferdig, kan du kjøre følgende kommandoer fra rotpakken:

```bash
npm start              # Starter en lokal server på localhost:6060
npm test               # Kjør alle tester for alle pakker
npm run lint           # Lint alle pakker
npm run build          # Bygg alle pakker
npm run build:all      # Bygg alle pakker og dokumentasjon
```

### Hvordan ser jeg hva som er nytt?

For å holde tritt med nye versjoner kan vi anbefale [npm-check-update](https://www.npmjs.com/package/npm-check-updates).
Med det installert kan du kjøre kommandoen `ncu` i prosjektet ditt og få en oppsummering av hvilke pakker som har fått
nye versjoner. Du kan også få en slags oversikt over nye versjoner ved å se på Git tags. Hver release får sin egen tag
på formatet _pakkenavn@versjon_.

Hver pakke har sin egen CHANGELOG.md, for eksempel [denne for ffe-core](packages/ffe-core/CHANGELOG.md). Følg med der
for å få oversikt over nye features, bugfixer, og _breaking changes_.

## Bidra!

Vi oppfordrer alle, både rutinerte og ferske, til å opprette issues, sende inn pull requests og kommentere på andres
bidrag. Ta en titt på [CONTRIBUTING.md](CONTRIBUTING.md) for hvordan du går frem.

## Licenses

-   Source code is licensed under MIT
-   The MuseoSans fonts are licensed separately. See LICENSE-fonts.md.
