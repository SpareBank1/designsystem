# @sb1/ffe-messages-react

## Beskrivelse

Samlede meldingskomponenter for å kommunisere status, tips og varsler. Bruk `SystemMessage` for global status, `ContextMessage` for kontekstuell inline tilbakemelding (med valgfri overskrift og lukkeknapp), og `MessageBox` for innrammede meldinger. Komponer `MessageHeader` og `MessageList`/`MessageListItem` for å strukturere innhold. Velg `type` (`info`, `success`, `tips`, `warning`, `error`) for å styre ikon, farge og tilgjengelighetsroller.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `SystemMessage`
- `ContextMessage`
- `MessageBox`
- `MessageHeader`
- `MessageList`
- `MessageListItem`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-messages-react @sb1/ffe-icons-react @sb1/ffe-messages @sb1/ffe-icons @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-icons-react`
- `@sb1/ffe-messages`
- `@sb1/ffe-icons`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-messages/css/messages.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### SystemMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `type` | `MessageType` | Ja | info, success, tips, warning or error |
| `iconFileUrl` | `string` | Nei | url to svg icon to override default |
| `locale` | `Locale` | Nei | nn, nb or en |
| `onClose` | `() => void` | Nei | Called when closed |

### ContextMessage Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `compact` | `boolean` | Nei | Renders a more compact version of the context message |
| `iconFileUrl` | `string` | Nei | url to svg icon to override default |
| `locale` | `Locale` | Nei | Decides the language of the aria-label for the close icon |
| `type` | `MessageType` | Ja | info, success, tips, warning or error |
| `onClose` | `() => void` | Nei | Called when closed |
| `closeButton` | `boolean` | Nei | Show close button |
| `header` | `React.ReactElement<MessageHeaderProps> | string` | Nei | The header |

### MessageBox Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `iconFileUrl` | `string` | Nei | url to svg icon to override default |
| `header` | `React.ReactElement<MessageHeaderProps> | string` | Nei | The header |
| `type` | `MessageType` | Ja | info, success, tips, warning or error |
| `locale` | `Locale` | Nei | Decides the language of the aria-label for the close icon |

### MessageHeader Props

Ingen komponentspesifikke props utover native HTML-attributter.

### MessageList Props

Ingen komponentspesifikke props utover native HTML-attributter.

### MessageListItem Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Eksempler (fra README)

```tsx
import {
    SystemMessage,
    ContextMessage,
    MessageBox,
    MessageHeader,
    MessageList,
    MessageListItem,
} from '@sb1/ffe-messages-react';

export function MessagesExamples() {
    return (
        <div>
            {/* SystemMessage: global status med lukkeknapp */}
            <SystemMessage type="success" locale="nb" onClose={() => {}}>
                Kontoen ble oppdatert.
            </SystemMessage>

            {/* ContextMessage: inline melding med overskrift og valgfri lukkeknapp */}
            <ContextMessage
                type="warning"
                header="Sjekk opplysningene"
                closeButton
                compact
            >
                <MessageList>
                    <MessageListItem>Personnummer mangler</MessageListItem>
                    <MessageListItem>Adresse er ugyldig</MessageListItem>
                </MessageList>
            </ContextMessage>

            {/* MessageBox: innrammet meldingsområde med overskrift */}
            <MessageBox
                type="info"
                header={
                    <MessageHeader as="h3">Viktig informasjon</MessageHeader>
                }
            >
                Husk å lagre endringer før du går videre.
            </MessageBox>
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
