# @sb1/ffe-context-message-react

## Beskrivelse

React-komponenter for kontekstuelle meldinger (info, tips, suksess, feil).

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `ContextInfoMessage`
- `ContextTipsMessage`
- `ContextSuccessMessage`
- `ContextErrorMessage`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-context-message-react
```

## API-referanse

### ContextInfoMessage Props

Ingen komponentspesifikke props utover native HTML-attributter.

### ContextTipsMessage Props

Ingen komponentspesifikke props utover native HTML-attributter.

### ContextSuccessMessage Props

Ingen komponentspesifikke props utover native HTML-attributter.

### ContextErrorMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `alert` | `boolean` | Nei | - |

## Eksempler (fra README)

```tsx
<ContextInfoMessage
    headerText="Viktig informasjon"
    showCloseButton={true}
    onCloseRest={() => console.log('Lukket')}
>
    <p>Denne meldingen kan lukkes.</p>
</ContextInfoMessage>
```

```tsx
<ContextTipsMessage compact={true}>
    <p>Et kort tips i kompakt format.</p>
</ContextTipsMessage>
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
