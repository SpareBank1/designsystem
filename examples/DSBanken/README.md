# Sparebank1 Designsystem Eksempel App

## Om

Denne eksempel-appen er ment å hjelpe deg å se hvordan designsystem-komponentene kan brukes i en React-app.
Ikke kopier dette og anta at det er klart for produksjon i ditt Sparebank1-prosjekt, men bruk det som et
utgangspunkt. Bare de faktiske komponentene importert fra designsystemet har gjennomgått prosessene som sikrer at det
oppfyller våre standarder når det gjelder tilgjengelighet, ytelse og design.

Det er også opinionert og er kulminasjonen av vår erfaring med å utvikle apper innen AWL-plattformen til Sparebank1.

## Hvordan denne appen ble satt opp

```bash
# Opprett prosjektmappe
mkdir DSBanken
cd DSBanken
```

### Initialiser prosjekt med npm

```bash
npm init -y
```

### Installer kjerneavhengigheter for React + TypeScript + Vite
```bash

npm install react react-dom
npm install -D @vitejs/plugin-react vite typescript @types/react @types/react-dom
```

### Installer SB1/FFE designsystem komponenter
```bash
npm install @sb1/ffe-accordion @sb1/ffe-accordion-react @sb1/ffe-account-selector-react @sb1/ffe-buttons-react @sb1/ffe-cards-react @sb1/ffe-chart-donut-react @sb1/ffe-collapse-react @sb1/ffe-context-message-react @sb1/ffe-core-react @sb1/ffe-datepicker-react @sb1/ffe-dropdown-react @sb1/ffe-feedback-react @sb1/ffe-file-upload-react @sb1/ffe-form-react @sb1/ffe-grid-react @sb1/ffe-icons-react @sb1/ffe-lists-react @sb1/ffe-message-box-react @sb1/ffe-messages-react @sb1/ffe-modals-react @sb1/ffe-chips-react @sb1/ffe-pagination-react @sb1/ffe-searchable-dropdown-react @sb1/ffe-spinner-react @sb1/ffe-symbols-react @sb1/ffe-system-message-react @sb1/ffe-tables-react @sb1/ffe-tabs-react```

### Install LESS support
```bash
npm install -D less
```
**OBS, for å teste med lokale endringer må du bruke `npm link`**

Her er en start for å få mange av avhengighetene til å fungere med lokale endringer i FFE-pakkene:
`npm link @sb1/ffe-core @sb1/ffe-form-react @sb1/ffe-form @sb1/ffe-buttons @sb1/ffe-buttons-react @sb1/ffe-accordion @sb1/ffe-accordion-react`,
hvis du først kjører `npm link` i de respektive pakkene.

### Create basic project structure
```bash
mkdir -p src/components src/styles
touch src/main.tsx src/App.tsx src/styles/main.less
```

### Create TypeScript configuration
```bash
cat > tsconfig.json << EOF
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF
```

### Create Vite configuration
```bash
cat > vite.config.ts << EOF
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        math: 'always',
        additionalData: '@import "@sb1/ffe-core/less/ffe.less";'
      }
    }
  }
})
EOF
```

### Create index.html
```bash

cat > index.html << EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DSBanken</title>
  </head>
  <body class="ffe-body-text">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF
```

### Add scripts to package.json
```bash
npm pkg set scripts.dev="vite"
npm pkg set scripts.build="tsc && vite build"
npm pkg set scripts.preview="vite preview"
```

### Start development server
```bash
npm run dev
```

## Lokal Utvikling med FFE-pakker fra Kildekode

For å fasilitere raskere utvikling og testing av endringer i FFE-pakkene direkte i denne eksempelapplikasjonen (`sbanky`), er Vite-konfigurasjonen satt opp med aliaser. Disse aliasene peker import av `@sb1/ffe-*`-pakker direkte til deres respektive kildekodemapper (`src`) i `../../packages/`-strukturen.

**Hvordan det fungerer:**

*   **Vite-aliaser:** I `vite.config.ts` og `vitest.config.ts` er det definert `resolve.alias` som mapper pakkenavn (f.eks. `@sb1/ffe-cards-react`) til den lokale stien til pakkens `src/index.ts` (eller tilsvarende inngangspunkt).
*   **Kompilering på direkten:** Vite vil automatisk kompilere TypeScript-kildekoden fra disse lokale FFE-pakkene "on-the-fly" både for utviklingsserveren (`npm run dev`) og for tester (`npm run test`). Det er vanligvis ikke nødvendig å kjøre en separat build-prosess inne i hver FFE-pakke.
*   **React-instans:** Aliaser er også satt opp for `react` og `react-dom` for å sikre at både `sbanky`-appen og de lokalt koblede FFE-pakkene bruker samme React-instans, noe som forhindrer vanlige feil knyttet til "invalid hook call" eller flere React-kopier.

**Forutsetninger for at dette skal fungere:**

1.  **Kildekode må eksistere:** Kildekodemappene for FFE-pakkene (f.eks. `../../packages/ffe-cards-react/src`) må eksistere og inneholde gyldig kode.
2.  **Avhengigheter for FFE-pakker:** Hvis FFE-pakkene har egne, unike avhengigheter (utover det som løses av `sbanky`s `node_modules`), må disse være installert. I et typisk monorepo-oppsett med f.eks. `pnpm workspaces` eller `yarn workspaces`, vil en installasjon i rotmappen av designsystem-repoet håndtere dette. Hvis ikke, kan det være nødvendig å kjøre `npm install` i de individuelle `packages/ffe-*-react`-mappene hvis de har egne `package.json` med unike avhengigheter.
3.  **Ingen spesielle "src"-populerende build-steg:** Oppsettet antar at `src`-mappen i FFE-pakkene inneholder den faktiske kildekoden, og ikke er avhengig av filer som genereres *inn i `src`* av et separat build-steg for den pakken. Standard FFE-pakker følger dette mønsteret.

**Fjerning av `npm link`:**
Med dette alias-baserte oppsettet er det vanligvis ikke lenger nødvendig (og kan til og med være problematisk) å bruke `npm link` for FFE-pakkene. Hvis du tidligere har linket pakker, anbefales det å fjerne disse linkene (`npm unlink <pakke>`) og deretter slette `node_modules` og `package-lock.json` i `sbanky` og kjøre `npm install` på nytt.

**Feilsøking:**
*   Hvis du får "module not found"-feil relatert til en FFE-pakke, sjekk at aliaset er korrekt i `vite.config.ts` / `vitest.config.ts` og at den angitte kildekodestien er gyldig.
*   Hvis du opplever feil relatert til React (f.eks. `useRef is null` eller "invalid hook call"), dobbeltsjekk at React-aliasene er korrekte og at det ikke er flere versjoner av React som lastes.


## Teste lokale endringen i FFE-pakker via npm link
Først må du lenke alle pakkene lokalt.
Du kan kjøre dette scriptet fra rotnivå i designsystemet:
```const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packagesDir = path.resolve(__dirname, 'packages');

try {
    const folders = fs.readdirSync(packagesDir).filter(folder => {
        const folderPath = path.join(packagesDir, folder);
        return fs.statSync(folderPath).isDirectory();
    });

    folders.forEach(folder => {
        const folderPath = path.join(packagesDir, folder);
        console.log(`Running 'npm link' in ${folderPath}...`);
        execSync('npm link', { cwd: folderPath, stdio: 'inherit' });
    });

    console.log('All packages have been linked successfully.');
} catch (error) {
    console.error('An error occurred:', error.message);
}
```

Så kan du lenke dem i `sbanky`-mappen:
```
npm link @sb1/ffe-accordion @sb1/ffe-accordion-react @sb1/ffe-account-selector-react @sb1/ffe-badge @sb1/ffe-badge-react @sb1/ffe-buttons @sb1/ffe-buttons-react @sb1/ffe-cards @sb1/ffe-cards-react @sb1/ffe-chart-donut-react @sb1/ffe-chips @sb1/ffe-chips-react @sb1/ffe-collapse-react @sb1/ffe-context-message @sb1/ffe-context-message-react @sb1/ffe-core @sb1/ffe-core-react @sb1/ffe-datepicker @sb1/ffe-datepicker-react @sb1/ffe-dropdown-react @sb1/ffe-feedback @sb1/ffe-feedback-react @sb1/ffe-file-upload @sb1/ffe-file-upload-react @sb1/ffe-form @sb1/ffe-form-react @sb1/ffe-formatters @sb1/ffe-grid @sb1/ffe-grid-react @sb1/ffe-header @sb1/ffe-icons @sb1/ffe-icons-react @sb1/ffe-lists @sb1/ffe-lists-react @sb1/ffe-messages @sb1/ffe-messages-react @sb1/ffe-modals @sb1/ffe-modals-react @sb1/ffe-pagination @sb1/ffe-pagination-react @sb1/ffe-sb1-logos @sb1/ffe-searchable-dropdown-react @sb1/ffe-shapes @sb1/ffe-shapes-react @sb1/ffe-spinner @sb1/ffe-spinner-react @sb1/ffe-symbols @sb1/ffe-symbols-react @sb1/ffe-tables @sb1/ffe-tables-react @sb1/ffe-tabs @sb1/ffe-tabs-react @sb1/ffe-tags @sb1/ffe-tags-react @sb1/ffe-webfonts
```

