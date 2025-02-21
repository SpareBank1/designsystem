# @sb1/ffe-vite-less

En Vite-plugin som automatisk injiserer FFE LESS-importer i LESS-filene dine.

## Installasjon

```bash
npm install --save-dev @sb1/ffe-vite-less
# eller
yarn add -D @sb1/ffe-vite-less
```

## Bruk

Legg til pluginen i din `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import ffeLessPlugin from '@sb1/ffe-vite-less';

export default defineConfig({
    plugins: [ffeLessPlugin()],
});
```

### Alternativer

Pluginen aksepterer følgende alternativer:

- `nodeModulesPath`: Egendefinert sti til node_modules-mappen. Hvis ikke angitt, vil standard node_modules-sti brukes.

```typescript
ffeLessPlugin({
    nodeModulesPath: '/egendefinert/sti/til/node_modules/@sb1',
});
```

## Hvordan det fungerer

Pluginen injiserer automatisk FFE LESS-importer i starten av LESS-filene dine. Den vil:

1. Importere FFE core colors først
2. Importere alle andre FFE LESS-filer som finnes i node_modules/@sb1
3. Hoppe over filer som allerede inneholder FFE-importer
4. Hoppe over ffe-core/less/variables.less for å unngå dupliserte importer

## Lisens

MIT-lisens. Se LICENSE i README.md i hoved-FFE-repositoriet.
