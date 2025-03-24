# ESLint Flat Config Migreringsguide

## Oversikt

SpareBank 1 designsystem har migrert fra ESLints eldre konfigurasjonsformat (`.eslintrc.*` filer) til det nye flat config-systemet (`eslint.config.js`). Dette dokumentet forklarer den nye strukturen og gir veiledning for utvikling.

## Hvorfor Flat Config?

ESLint beveger seg mot flat config-systemet som deres anbefalte tilnærming. Fordeler inkluderer:

- Native ESM-støtte
- Bedre ytelse
- Forenklet konfigurasjonsarv
- Mer fleksible konfigurasjonsalternativer
- Fremtidssikker oppsett (eldre konfigurasjon vil etterhvert bli utfaset)

## Konfigurasjonsstruktur

### Rotkonfigurasjon

Rotkonfigurasjonsfilen er `/eslint.config.js` og inneholder:

- Basiskonfigurasjon fra FFE-config
- Prettier-integrasjon
- TypeScript-støtte
- Testfilinnstillinger med Jest globals

```javascript
// Root eslint.config.js (forenklet eksempel)
export default [
  ffeConfig,
  prettierConfig,
  {
    // TypeScript og andre globale innstillinger
  },
  {
    files: ["**/*.spec.js", "**/*.spec.tsx", "**/*.spec.ts"],
    languageOptions: {
      globals: {
        // Jest globals
      }
    }
  }
];
```

### Pakkespesifikk konfigurasjon

Hver pakke i designsystemet har sin egen `eslint.config.js`-fil som utvider rotkonfigurasjonen. Dette muliggjør pakkespesifikke regler og innstillinger.

```javascript
// Package eslint.config.js (forenklet eksempel)
import rootConfig from '../../eslint.config.js';

export default [
  ...rootConfig,
  {
    // Pakkespesifikk konfigurasjon her
  }
];
```

## Viktige endringer

1. **ESM-syntaks**: Konfigurasjonsfiler bruker nå ES module-syntaks (`export default` i stedet for `module.exports`)
2. **Globals**: Miljøinnstillinger (`env`) defineres nå i `languageOptions.globals`
3. **Filmønster**: Bruk `files`-egenskapen for å målrette spesifikke filmønstre
4. **Plugins**: Plugins importeres direkte og registreres i `plugins`-egenskapen

## Bruk

### Kjøre ESLint

For å kjøre ESLint på tvers av kodebasen:

```bash
# Fra rotmappen
npm run eslint -- "packages/*/src/**/*.{js,jsx,ts,tsx}"

# Med auto-fix
npm run eslint:fix -- "packages/*/src/**/*.{js,jsx,ts,tsx}"

# For en spesifikk pakke
cd packages/package-name
npm run lint
```

### Legge til pakkespesifikke regler

For å legge til regler spesifikke for en pakke, endre pakkens `eslint.config.js`-fil:

```javascript
export default [
  ...rootConfig,
  {
    files: ['**/*.jsx', '**/*.tsx'],  // Målrett spesifikke filer
    rules: {
      'react/prop-types': 'off',      // Eksempel på regeloverstyring
    },
  },
];
```

## React-konfigurasjon

React-pakker har ytterligere konfigurasjon for å støtte JSX/TSX-filer:

```javascript
// For React-pakker
export default [
  ...rootConfig,
  {
    files: ['**/*.jsx', '**/*.tsx'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
```

## Beste praksis

1. **Ikke endre rotkonfigurasjonen**: Unngå å endre rotkonfigurasjonen direkte. Opprett i stedet pakkespesifikke overstyringer.

2. **Bruk filmønstre**: Målrett spesifikke filtyper ved hjelp av `files`-egenskapen i stedet for å stole på global konfigurasjon.

3. **Tydelige regelunntak**: Når du deaktiverer eller endrer regler, inkluder kommentarer som forklarer hvorfor unntaket er nødvendig.

4. **Regelmessige oppdateringer**: Hold ESLint og relaterte plugins oppdatert for å dra nytte av forbedringer og feilrettinger.

## Feilsøking

- **Konfigurasjon ikke anvendt**: Sørg for at du bruker riktig sti til konfigurasjonsfilen med `--config ./eslint.config.js`
- **Modulefeil**: Sørg for at alle nødvendige plugins er installert og korrekt importert
- **Motstridende regler**: Sjekk for regelkonflikter mellom Prettier- og ESLint-konfigurasjoner

## Ressurser

- [ESLint Flat Config-dokumentasjon](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [ESLint Migreringsguide](https://eslint.org/docs/latest/use/migrate-to-eslint-9.0.0)
