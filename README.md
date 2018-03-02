# Felles Front End i SpareBank 1

[![Build Status](https://travis-ci.org/SpareBank1/designsystem.svg?branch=master)](https://travis-ci.org/SpareBank1/designsystem)

Dette repositoryet inneholder designdokumentasjon, teknisk dokumentasjon, og kode for SpareBank 1 sitt designsystem og
implementasjonen av det - Felles frontend (FFE).

## Designer?

Designsystemet er i stadig endring. Bruk fagleder og miljøet rundt deg for å holde deg oppdatert og forbedre
designsystemet til å passe dine behov.

### Kom i gang

Ta kontakt med faglederne, så hjelper de deg med tilgang til Verktøykassa til Sketch.

Verktøykassa blir oppdatert av faglederene ved endringer eller når nye ting legges til. Endringene annonseres enn så
lenge via interne kanaler - spør fagleder, så blir du pekt i riktig retning for å få med deg disse beskjedene :+1:

Har du en idé til en forbedring eller et nytt konsept? Så bra! :tada: Snakk om den med kollegene dine i fagforumet,
så blir det en felles vurdering om idéen tas inn i designsystemet. Derfra blir det til at Verktøykassa oppdateres,
så åpnes et issue her på Github så en utvikler kan plukke oppgaven og gjøre endringen i FFE.

## Utvikler?

FFE er delt opp i mange mindre pakker. Hver pakke har sin egen katalog under [packages/](packages/).

### Kom i gang!

Klon ned repoet, og kjør `npm install`. Dette vil installere alle dependencies for alle pakker, så du kan begynne
kjøre opp alt lokalt. Når denne kommandoen er ferdig, kan du kjøre følgende kommandoer fra rotpakken:


```bash
npm start              # Starter en lokal server på localhost:6060
npm test               # Kjør alle tester for alle pakker
npm run lint           # Lint alle pakker
npm run build          # Bygg alle pakker
npm run build:htdocs   # Bygg dokumentasjon
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

* Source code is licensed under MIT
* The MuseoSans fonts are licensed separately. See LICENSE-fonts.md.
