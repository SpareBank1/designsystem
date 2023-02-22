# Felles Front End i SpareBank 1

Dette repositoryet inneholder koden til SpareBank 1 sitt designsystem og noe teknisk dokumentasjon.

Designsystemet består av innholdet i dette repoet (ofte referert til som Felles Frontend, forkortet til FFE), designsystem-bibliotekene i Figma og dokumentasjonen som finnes på [design.sparebank1.no](https://design.sparebank1.no). Alle disse delene håndteres av designsystem-teamet, som kan nås på vår interne Slack i #ext-designsystem, via mail på [designsystem@sparebank1.no](mailto:designsystem@sparebank1.no) eller via GitHub issues.

## :runner: Kom i gang med å bruke designsystemet

Dokumentasjon på hvordan man kommer i gang med å bruke FFE finner du under [kom i gang](https://design.sparebank1.no/kom-i-gang/) i dokumentasjonen.

## :pencil: Hvordan gjøre endringer i FFE?

Skal du gjøre endringer i FFE for første gang? Se på dokumentasjonen under [Guide til GitHub](https://design.sparebank1.no/bidra/guide-til-github/)

Komponentene i FFE er delt opp i to NPM-pakker hver. Pakker med `-react` i navnet inneholder react-implementasjon og tester, mens øvrige pakker inneholder (Less-basert) styling.

## :computer: Kjøre opp designsystemet lokalt

Klon ned repoet, og kjør `npm install`. Dette vil installere alle dependencies for alle pakker, og må kjøres før du kan kjøre noen av de andre kommandoene.

```bash
npm start              # Starter en lokal server på localhost:1234
npm test               # Kjør alle tester for alle pakker
npm run lint           # Lint alle pakker
npm run build          # Bygg alle pakker
npm run clean          # Fjern node_modules fra pakkene (ikke root)
```

## :sparkles: Bidra!

Vi oppfordrer alle, både rutinerte og ferske, til å opprette issues, sende inn pull requests og kommentere på andres
bidrag. Ta en titt på [Bidra-seksjonen](https://design.sparebank1.no/bidra/alle-kan-bidra/) i dokumentasjonen om hvordan du går frem.

## Licenses

-   Source code is licensed under MIT
-   The MuseoSans fonts are licensed separately. See LICENSE-fonts.md.
