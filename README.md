# Felles Front End i SpareBank 1

Dette repositoryet inneholder koden til SpareBank 1 sitt designsystem og noe teknisk dokumentasjon.

Designsystemet består av innholdet i dette repoet (ofte referert til som Felles Frontend, forkortet til FFE), designsystem-bibliotekene i Figma og dokumentasjonen som finnes på [design.sparebank1.no](https://design.sparebank1.no). Alle disse delene håndteres av designsystem-teamet, som kan nås på vår interne Slack i #ext-designsystem, via mail på [designsystem@sparebank1.no](mailto:designsystem@sparebank1.no) eller via GitHub issues.

## :runner: Kom i gang med å bruke designsystemet

Dokumentasjon på hvordan man kommer i gang med å bruke FFE finner du under [kom i gang](https://design.sparebank1.no/kom-i-gang/) i dokumentasjonen.

## :pencil: Hvordan gjøre endringer i FFE?

Skal du gjøre endringer i FFE for første gang? Se på dokumentasjonen under [Guide til GitHub](https://design.sparebank1.no/bidra/guide-til-github/)

Komponentene i FFE er delt opp i to NPM-pakker hver. Pakker med `-react` i navnet inneholder react-implementasjon og tester, mens øvrige pakker inneholder (Less-basert) styling.

## :computer: Kjøre opp designsystemet lokalt

Klon ned repoet, og kjør `npm install`. Dette vil installere alle avhengigheter for alle pakker, og må kjøres før du kan kjøre noen av de andre kommandoene.

```bash
npm start              # Starter en lokal server på localhost:1234
npm test               # Kjør alle tester for alle pakker
npm run lint           # Lint alle pakker
npm run build          # Bygg alle pakker
npm run clean          # Fjern node_modules fra pakkene (ikke root)
```

## :robot: AI Context for MCP Servere

FFE designsystemet genererer automatisk AI-kontekst dokumentasjon som kan brukes av Model Context Protocol (MCP) servere. Dette gjør det enkelt for AI-assistenter å forstå og bruke komponentene.

```bash
npm run update:ai-context  # Generer AI kontekst dokumentasjon
```

Scriptet `scripts/generate-enhanced-ai-context.js` genererer strukturert dokumentasjon i `/mcp-context/` mappen:

- `overview.md` - Overordnet oversikt over designsystemet
- `components/*.md` - Detaljert dokumentasjon for hver komponent
- `ai-context-resources.json` - Manifest for MCP servere

Informasjonen hentes automatisk fra:

- `README.md` filer i hver pakke (beskrivelser og eksempler)
- `.mdx` filer i `src/` mapper (bruksanvisninger på norsk)
- `src/index.ts` (eksporterte komponenter)
- `.tsx` filer (TypeScript type-informasjon)
- `ffe-dependencies.json` (pakkeavhengigheter)

Denne dokumentasjonen kan lastes som ressurser av en MCP server for å gi AI-assistenter tilgang til oppdatert informasjon om alle FFE komponenter, hvordan de installeres, brukes, og hvilke avhengigheter de har.

## :sparkles: Bidra!

Vi oppfordrer alle, både rutinerte og ferske, til å opprette en oppgave (issue), sende inn fletteforespørsel (pull request) og kommentere på andres
bidrag. Ta en titt på [Bidra-seksjonen](https://design.sparebank1.no/bidra/alle-kan-bidra/) i dokumentasjonen om hvordan du går frem.

## Licenses

- Source coden er licensed under MIT
- The MuseoSans fonts are licensed separately. See LICENSE-fonts.md.
