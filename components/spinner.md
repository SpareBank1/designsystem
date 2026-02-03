# @sb1/ffe-spinner-react

## Beskrivelse

Lasteindikator for pågående prosesser.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Spinner`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-spinner-react
```

## API-referanse

### Spinner Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `immediate` | `boolean` | Nei | - |
| `large` | `boolean` | Nei | - |
| `loadingText` | `React.ReactNode` | Nei | - |
| `locale` | `'nb' | 'nn' | 'en'` | Nei | 'nb', 'nn', or 'en' |

## Eksempler (fra README)

```tsx
<Spinner />
<Spinner large={true} />
<Spinner immediate={true} />
```

```tsx
<Spinner loadingText="Laster inn data..." />
```

```tsx
function DataLoader() {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <Spinner loadingText="Henter data..." />;
    }

    return <div>{/* Vis data her */}</div>;
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
