# Tekniske Detaljer

Denne filen inneholder forklaringer på spesifikke tekniske valg og konvensjoner i prosjektet.

## Hvorfor `.js`-endelser i relative importer i TypeScript (`.ts`/`.tsx`)?

Du vil legge merke til at relative importer i TypeScript-filer ofte har en `.js`-endelse, for eksempel:

```typescript
import { MinKomponent } from './MinKomponent.js';
// i stedet for
// import { MinKomponent } from './MinKomponent';
```

Selv om dette kan virke rart ved første øyekast (vi importerer jo en `.ts`-fil under utvikling), er det **nødvendig** og **korrekt** på grunn av følgende:

1.  **`moduleResolution: "NodeNext"` (eller `"Node16"`)**: Vi bruker `"moduleResolution": "NodeNext"` i vår `tsconfig.json`. Denne innstillingen instruerer TypeScript til å etterligne Node.js sin moderne modulresolusjonsstrategi for ES Modules (ESM).
2.  **Node.js ESM krever filendelser**: Når Node.js løser relative `import`-stier for ES Modules, *krever* det at filendelsen er inkludert (f.eks. `.js`, `.mjs`). Node.js ser ikke etter `.ts`-filer.
3.  **TypeScript kompilerer til JavaScript**: Koden vi skriver i `.ts` blir kompilert til `.js`. Importstien i den kompilerte JavaScript-koden må derfor peke på den faktiske `.js`-filen som eksisterer etter bygging. Ved å bruke `.js`-endelsen i TypeScript-koden, sikrer vi at importstiene er korrekte i den endelige JavaScript-koden.
4.  **Type-sjekking fungerer fortsatt**: TypeScript er smart nok til å forstå at `import './MinKomponent.js'` i en `.ts`-fil egentlig refererer til `MinKomponent.ts` (eller `MinKomponent.tsx`) under utvikling og type-sjekking. Du får fortsatt all type-sikkerhet og auto-fullføring som forventet.

**Konklusjon:** Bruken av `.js`-endelser i relative importer i TypeScript er en konsekvens av å modernisere byggeprosessen vår for å støtte ES Modules korrekt i henhold til Node.js-standarden. Det sikrer at importene fungerer som forventet etter kompilering. 