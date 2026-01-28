# @sb1/ffe-messages-react

## Beskrivelse

Samlede meldingskomponenter for å kommunisere status, tips og varsler. Bruk `SystemMessage` for global status, `ContextMessage` for kontekstuell inline tilbakemelding (med valgfri overskrift og lukkeknapp), og `MessageBox` for innrammede meldinger. Komponer `MessageHeader` og `MessageList`/`MessageListItem` for å strukturere innhold. Velg `type` (`info`, `success`, `tips`, `warning`, `error`) for å styre ikon, farge og tilgjengelighetsroller.

## Eksempler

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

## Installasjon

```bash
npm install --save @sb1/ffe-messages-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/meldinger.

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
