# Felles Front End i SpareBank 1

Felles front end (FFE) sitt felles repository. Her vil du finne alle komponentene i FFE, både for LESS og React.

Hver pakke har hver sin katalog under [packages/](packages/).

## Kom i gang!

Klon ned repoet, og kjør `npm install`. Dette vil installere alle dependencies for alle pakker, så du kan begynne
kjøre opp alt lokalt. Når denne kommandoen er ferdig, kan du kjøre følgende kommandoer fra rotpakken:


```bash
npm start       # Starter en lokal server på localhost:6060
npm test        # Kjør alle tester for alle pakker
npm run lint    # Lint alle pakker
npm run build   # Bygg alle pakker
npm run build:htdocs   # Bygg dokumentasjon
```

## Hvordan ser jeg hva som er nytt?

For å holde tritt med nye versjoner kan vi anbefale [npm-check-update](https://www.npmjs.com/package/npm-check-updates).
Med det installert kan du kjøre kommandoen `ncu` i prosjektet ditt og få en oppsummering av hvilke pakker som har fått
nye versjoner. Du kan også få en slags oversikt over nye versjoner ved å se på Git tags. Hver release får sin egen tag
på formatet _pakkenavn@versjon_.

Hver pakke har sin egen CHANGELOG.md, for eksempel [denne for ffe-core](packages/ffe-core/CHANGELOG.md). Følg med der
for å få oversikt over nye features, bugfixer, og _breaking changes_.

## Bidra!

Vi oppfordrer alle, både rutinerte og ferske, til å opprette issues, sende inn pull requests og kommentere på andres
bidrag. Ta en titt på [CONTRIBUTE.md](CONTRIBUTE.md) for hvordan du går frem.

# Licenses

* Source code is licensed under MIT
* The MuseoSans fonts are licensed separately. See LICENSE-fonts.md.
