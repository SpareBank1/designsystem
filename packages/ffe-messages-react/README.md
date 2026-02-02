# @sb1/ffe-messages-react

## Beskrivelse

React-komponenter for meldinger som kommuniserer status, tips og varsler til brukeren.

### Komponentoversikt

| Komponent         | Bruksområde                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------- |
| `SystemMessage`   | Globale statusmeldinger øverst på siden. Har alltid lukkeknapp.                           |
| `ContextMessage`  | Kontekstuell inline-melding i skjemaer eller seksjoner. Valgfri overskrift og lukkeknapp. |
| `MessageBox`      | Innrammet meldingsområde for varig informasjon. Ingen lukkeknapp.                         |
| `MessageHeader`   | Overskriftkomponent for bruk i meldinger.                                                 |
| `MessageList`     | Liste-container for flere meldingspunkter.                                                |
| `MessageListItem` | Enkelt listepunkt i en `MessageList`.                                                     |

### Type-verdier

**MessageType** (påkrevd for alle meldingskomponenter):

- `'info'` - Generell informasjon
- `'success'` - Vellykket operasjon
- `'tips'` - Tips og råd
- `'warning'` - Advarsel
- `'error'` - Feilmelding (får `role="alert"` for tilgjengelighet)

**Locale** (valgfri, standard er `'nb'`):

- `'nb'` - Norsk bokmål
- `'nn'` - Nynorsk
- `'en'` - Engelsk

## Eksempler

### SystemMessage

Brukes for viktige, midlertidige globale meldinger. Har alltid en lukkeknapp.

```tsx
import { SystemMessage } from '@sb1/ffe-messages-react';

// Enkel bruk - lukkeknapp vises alltid
<SystemMessage type="success">
    Kontoen ble oppdatert.
</SystemMessage>

// Med callback når brukeren lukker meldingen
<SystemMessage
    type="info"
    locale="nb"
    onClose={() => console.log('Melding lukket')}
>
    Systemet oppdateres kl. 22:00.
</SystemMessage>

// Med egendefinert ikon
<SystemMessage type="warning" iconFileUrl="/icons/custom-warning.svg">
    Planlagt vedlikehold i morgen.
</SystemMessage>
```

**SystemMessage props:**
| Prop | Type | Påkrevd | Standard | Beskrivelse |
|------|------|---------|----------|-------------|
| `type` | `'info' \| 'success' \| 'tips' \| 'warning' \| 'error'` | Ja | - | Meldingstype som styrer ikon og farge |
| `locale` | `'nb' \| 'nn' \| 'en'` | Nei | `'nb'` | Språk for aria-label på lukkeknapp |
| `onClose` | `() => void` | Nei | - | Callback som kalles når meldingen lukkes |
| `iconFileUrl` | `string` | Nei | - | URL til egendefinert SVG-ikon |
| `className` | `string` | Nei | - | Ekstra CSS-klasser |
| `children` | `ReactNode` | Nei | - | Innholdet i meldingen |

---

### ContextMessage

Brukes for kontekstuell tilbakemelding i skjemaer eller seksjoner. Lukkeknapp er valgfri.

```tsx
import { ContextMessage, MessageList, MessageListItem } from '@sb1/ffe-messages-react';

// Enkel melding med overskrift som streng
<ContextMessage type="warning" header="Sjekk opplysningene">
    Noen felter mangler informasjon.
</ContextMessage>

// Med lukkeknapp og kompakt visning
<ContextMessage
    type="error"
    header="Feil i skjema"
    closeButton={true}
    compact={true}
    onClose={() => console.log('Lukket')}
>
    Rett feilene før du sender inn.
</ContextMessage>

// Med liste over flere meldinger
<ContextMessage type="warning" header="Manglende felter" closeButton={true}>
    <MessageList>
        <MessageListItem>Personnummer mangler</MessageListItem>
        <MessageListItem>Adresse er ugyldig</MessageListItem>
    </MessageList>
</ContextMessage>

// Uten overskrift
<ContextMessage type="info">
    Husk å lagre endringene dine.
</ContextMessage>
```

**ContextMessage props:**
| Prop | Type | Påkrevd | Standard | Beskrivelse |
|------|------|---------|----------|-------------|
| `type` | `'info' \| 'success' \| 'tips' \| 'warning' \| 'error'` | Ja | - | Meldingstype som styrer ikon og farge |
| `header` | `string \| ReactElement<MessageHeaderProps>` | Nei | - | Overskrift for meldingen |
| `closeButton` | `boolean` | Nei | `false` | Vis lukkeknapp |
| `compact` | `boolean` | Nei | `false` | Kompakt visning med mindre padding |
| `locale` | `'nb' \| 'nn' \| 'en'` | Nei | `'nb'` | Språk for aria-label på lukkeknapp |
| `onClose` | `() => void` | Nei | - | Callback som kalles når meldingen lukkes |
| `iconFileUrl` | `string` | Nei | - | URL til egendefinert SVG-ikon |
| `className` | `string` | Nei | - | Ekstra CSS-klasser |
| `children` | `ReactNode` | Nei | - | Innholdet i meldingen |

---

### MessageBox

Brukes for varig informasjon som ikke skal lukkes av brukeren.

```tsx
import { MessageBox, MessageHeader } from '@sb1/ffe-messages-react';

// Enkel bruk med overskrift som streng
<MessageBox type="info" header="Viktig informasjon">
    Husk å lagre endringer før du går videre.
</MessageBox>

// Med tilpasset overskriftsnivå
<MessageBox
    type="tips"
    header={<MessageHeader as="h3">Tips</MessageHeader>}
>
    Du kan spare tid ved å bruke hurtigtaster.
</MessageBox>

// Uten overskrift
<MessageBox type="success">
    Alle felt er korrekt utfylt.
</MessageBox>
```

**MessageBox props:**
| Prop | Type | Påkrevd | Standard | Beskrivelse |
|------|------|---------|----------|-------------|
| `type` | `'info' \| 'success' \| 'tips' \| 'warning' \| 'error'` | Ja | - | Meldingstype som styrer ikon og farge |
| `header` | `string \| ReactElement<MessageHeaderProps>` | Nei | - | Overskrift for meldingen |
| `locale` | `'nb' \| 'nn' \| 'en'` | Nei | `'nb'` | Språk for aria-label |
| `iconFileUrl` | `string` | Nei | - | URL til egendefinert SVG-ikon |
| `className` | `string` | Nei | - | Ekstra CSS-klasser |
| `children` | `ReactNode` | Nei | - | Innholdet i meldingen |

---

### MessageHeader

Overskriftkomponent med riktig styling. Brukes inne i meldinger eller som verdi til `header`-prop.

```tsx
import { MessageHeader } from '@sb1/ffe-messages-react';

// Standard (rendres som h2)
<MessageHeader>Overskrift</MessageHeader>

// Med tilpasset HTML-element
<MessageHeader as="h3">Overskrift som h3</MessageHeader>
<MessageHeader as="span">Overskrift som span</MessageHeader>
```

**MessageHeader props:**
| Prop | Type | Påkrevd | Standard | Beskrivelse |
|------|------|---------|----------|-------------|
| `as` | `ElementType` | Nei | `'h2'` | HTML-element eller React-komponent |
| `className` | `string` | Nei | - | Ekstra CSS-klasser |
| `children` | `ReactNode` | Nei | - | Overskriftsteksten |

---

### MessageList og MessageListItem

Brukes for å vise flere meldingspunkter som en liste.

```tsx
import {
    ContextMessage,
    MessageList,
    MessageListItem,
} from '@sb1/ffe-messages-react';

<ContextMessage type="error" header="Rett følgende feil">
    <MessageList>
        <MessageListItem>E-postadresse er ugyldig</MessageListItem>
        <MessageListItem>Telefonnummer må ha 8 siffer</MessageListItem>
        <MessageListItem>Postnummer finnes ikke</MessageListItem>
    </MessageList>
</ContextMessage>;
```

**MessageList props:**
| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `children` | `ReactNode` | Ja | `MessageListItem`-elementer |

**MessageListItem props:**
| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `children` | `ReactNode` | Ja | Tekst eller innhold for listepunktet |

---

### Komplett eksempel

```tsx
import {
    SystemMessage,
    ContextMessage,
    MessageBox,
    MessageHeader,
    MessageList,
    MessageListItem,
} from '@sb1/ffe-messages-react';

export function MessagesDemo() {
    const [showSystemMessage, setShowSystemMessage] = React.useState(true);

    return (
        <div>
            {/* Global systemmelding */}
            {showSystemMessage && (
                <SystemMessage
                    type="success"
                    locale="nb"
                    onClose={() => setShowSystemMessage(false)}
                >
                    Endringene dine er lagret.
                </SystemMessage>
            )}

            {/* Kontekstuell feilmelding i skjema */}
            <ContextMessage
                type="error"
                header="Skjemaet inneholder feil"
                closeButton={true}
                compact={true}
            >
                <MessageList>
                    <MessageListItem>Fornavn er påkrevd</MessageListItem>
                    <MessageListItem>E-post er ugyldig</MessageListItem>
                </MessageList>
            </ContextMessage>

            {/* Informasjonsboks */}
            <MessageBox type="info" header="Om personvern">
                Vi lagrer kun nødvendig informasjon for å gi deg best mulig
                tjeneste. Les mer i vår personvernerklæring.
            </MessageBox>
        </div>
    );
}
```

## Installasjon

```bash
npm install --save @sb1/ffe-messages-react
```

Merk: Pakken krever at `@sb1/ffe-messages` (CSS) er installert og importert i prosjektet.

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/meldinger.

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
