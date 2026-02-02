# @sb1/ffe-modals-react

## Installasjon

```bash
npm install --save @sb1/ffe-modals-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/modal/.

Denne pakken er avhengig av `@sb1/ffe-icons-react` og `@sb1/ffe-buttons-react`.
Husk å importere less-filene.

## Beskrivelse

Modal-komponenter for korte, fokuserte interaksjoner i webapplikasjoner. Bruk modaler når du trenger å fange brukerens oppmerksomhet for en enkel oppgave, bekreftelse eller informasjon. Ikke bruk modaler på mobil - bruk ark/sheets.

Når bør du bruke pakken:

- Enkelt steg, tydelig fokus og avbrytbar interaksjon.
- Brukeren skal kunne lukke med Escape, overlay-klikk og dedikert knapp.

Når bør du ikke bruke pakken:

- Lange eller flerstegsprosesser.
- Primær navigasjon eller innhold som hører hjemme i siden.

### Eksporterte komponenter og typer

```tsx
import {
    Modal,
    ModalHandle,
    ModalProps,
    ModalBlock,
} from '@sb1/ffe-modals-react';
```

| Eksport       | Type      | Beskrivelse                                      |
| ------------- | --------- | ------------------------------------------------ |
| `Modal`       | Component | Hovedkomponenten for modal-dialog                |
| `ModalHandle` | Type      | TypeScript-type for ref-objektet som eksponeres  |
| `ModalProps`  | Type      | TypeScript-type for Modal-komponentens props     |
| `ModalBlock`  | Component | Wrapper-komponent for innhold med riktig padding |

### Modal Props

`Modal` utvider `React.ComponentPropsWithoutRef<'dialog'>`, så alle standard HTML dialog-attributter er støttet.

| Prop              | Type                          | Påkrevd | Default         | Beskrivelse                                       |
| ----------------- | ----------------------------- | ------- | --------------- | ------------------------------------------------- |
| `ariaLabelledby`  | `string`                      | Ja      | -               | ID til overskriftselementet som beskriver modalen |
| `locale`          | `'nb' \| 'nn' \| 'en'`        | Nei     | `'nb'`          | Språk for lukkeknapp-tekst                        |
| `onClose`         | `() => void`                  | Nei     | -               | Callback som kalles når modalen lukkes            |
| `portalContainer` | `Element \| DocumentFragment` | Nei     | `document.body` | Container-element for React portal                |
| `className`       | `string`                      | Nei     | -               | Ekstra CSS-klasser                                |
| `children`        | `React.ReactNode`             | Nei     | -               | Innholdet i modalen                               |

### ModalHandle (ref-metoder)

Modal bruker `forwardRef` og eksponerer et `ModalHandle`-objekt via ref:

| Metode/Egenskap | Type                                 | Beskrivelse                                            |
| --------------- | ------------------------------------ | ------------------------------------------------------ |
| `open()`        | `() => void`                         | Åpner modalen                                          |
| `close()`       | `() => void`                         | Lukker modalen                                         |
| `isOpen`        | `boolean` (readonly)                 | Returnerer `true` hvis modalen er åpen                 |
| `dialogRef`     | `React.RefObject<HTMLDialogElement>` | Direkte tilgang til det underliggende dialog-elementet |

### ModalBlock Props

`ModalBlock` utvider `React.ComponentPropsWithoutRef<'div'>`, så alle standard HTML div-attributter er støttet.

| Prop        | Type              | Påkrevd | Default | Beskrivelse         |
| ----------- | ----------------- | ------- | ------- | ------------------- |
| `className` | `string`          | Nei     | -       | Ekstra CSS-klasser  |
| `children`  | `React.ReactNode` | Nei     | -       | Innholdet i blokken |

## Eksempler

### Grunnleggende bruk

```tsx
import React, { useRef } from 'react';
import { Modal, ModalHandle, ModalBlock } from '@sb1/ffe-modals-react';

export function BasicModalExample() {
    const modalRef = useRef<ModalHandle>(null);

    return (
        <div>
            <button onClick={() => modalRef.current?.open()}>Åpne modal</button>

            <Modal
                ref={modalRef}
                ariaLabelledby="modal-title"
                onClose={() => console.log('Modal ble lukket')}
            >
                <ModalBlock>
                    <h2 id="modal-title">Tittel på modal</h2>
                    <p>Innhold i modalen.</p>
                    <button onClick={() => modalRef.current?.close()}>
                        Lukk
                    </button>
                </ModalBlock>
            </Modal>
        </div>
    );
}
```

### Med designsystem-knapper og språkstøtte

```tsx
import React, { useRef } from 'react';
import { Modal, ModalHandle, ModalBlock } from '@sb1/ffe-modals-react';
import {
    ActionButton,
    SecondaryButton,
    ButtonGroup,
} from '@sb1/ffe-buttons-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';

export function ModalWithButtonsExample() {
    const modalRef = useRef<ModalHandle>(null);
    const headingId = 'modal-heading';

    return (
        <>
            <ActionButton
                type="button"
                onClick={() => modalRef.current?.open()}
            >
                Åpne modal
            </ActionButton>

            <Modal
                ref={modalRef}
                ariaLabelledby={headingId}
                locale="nb"
                onClose={() => console.log('Lukket')}
            >
                <ModalBlock>
                    <Heading2 id={headingId}>Bekreft handling</Heading2>
                    <Paragraph>Er du sikker på at du vil fortsette?</Paragraph>
                    <ButtonGroup thin={true} ariaLabel="Handlingsknapper">
                        <SecondaryButton
                            type="button"
                            onClick={() => modalRef.current?.close()}
                        >
                            Avbryt
                        </SecondaryButton>
                        <ActionButton autoFocus={true} type="button">
                            Bekreft
                        </ActionButton>
                    </ButtonGroup>
                </ModalBlock>
            </Modal>
        </>
    );
}
```

### Tilpasset innhold (med bilde eller grafikk)

```tsx
import React, { useRef } from 'react';
import { Modal, ModalHandle, ModalBlock } from '@sb1/ffe-modals-react';
import {
    ActionButton,
    SecondaryButton,
    ButtonGroup,
} from '@sb1/ffe-buttons-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';

export function CustomContentModalExample() {
    const modalRef = useRef<ModalHandle>(null);
    const headingId = 'custom-modal-heading';

    return (
        <>
            <ActionButton
                type="button"
                onClick={() => modalRef.current?.open()}
            >
                Åpne modal
            </ActionButton>

            <Modal ref={modalRef} ariaLabelledby={headingId}>
                {/* Innhold utenfor ModalBlock får ingen padding */}
                <div
                    style={{
                        height: 150,
                        width: '100%',
                        background:
                            'var(--ffe-color-surface-secondary-default)',
                    }}
                />
                {/* ModalBlock gir riktig padding til innholdet */}
                <ModalBlock>
                    <Heading2 id={headingId}>Modal med bilde</Heading2>
                    <Paragraph>
                        Legg innhold utenfor ModalBlock for å få full bredde.
                    </Paragraph>
                    <ButtonGroup thin={true} ariaLabel="Handlingsknapper">
                        <SecondaryButton
                            type="button"
                            onClick={() => modalRef.current?.close()}
                        >
                            Lukk
                        </SecondaryButton>
                    </ButtonGroup>
                </ModalBlock>
            </Modal>
        </>
    );
}
```

### Dark mode

```tsx
import React, { useRef } from 'react';
import { Modal, ModalHandle, ModalBlock } from '@sb1/ffe-modals-react';
import { ActionButton } from '@sb1/ffe-buttons-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';

export function DarkModeModalExample() {
    const modalRef = useRef<ModalHandle>(null);

    return (
        <>
            <ActionButton
                type="button"
                onClick={() => modalRef.current?.open()}
            >
                Åpne modal
            </ActionButton>

            <Modal
                ref={modalRef}
                ariaLabelledby="dark-modal-heading"
                className="ffe-dark regard-color-scheme-preference"
            >
                <ModalBlock>
                    <Heading2 id="dark-modal-heading">Dark mode modal</Heading2>
                    <Paragraph>
                        Legg til className ffe-dark for å aktivere dark mode.
                    </Paragraph>
                    <ActionButton
                        type="button"
                        onClick={() => modalRef.current?.close()}
                    >
                        Lukk
                    </ActionButton>
                </ModalBlock>
            </Modal>
        </>
    );
}
```

### Sjekke om modal er åpen

```tsx
import React, { useRef } from 'react';
import { Modal, ModalHandle, ModalBlock } from '@sb1/ffe-modals-react';

export function CheckModalStateExample() {
    const modalRef = useRef<ModalHandle>(null);

    const handleToggle = () => {
        if (modalRef.current?.isOpen) {
            modalRef.current.close();
        } else {
            modalRef.current?.open();
        }
    };

    return (
        <div>
            <button onClick={handleToggle}>Toggle modal</button>

            <Modal ref={modalRef} ariaLabelledby="toggle-modal-title">
                <ModalBlock>
                    <h2 id="toggle-modal-title">Togglebar modal</h2>
                    <p>Denne modalen kan toggles med samme knapp.</p>
                </ModalBlock>
            </Modal>
        </div>
    );
}
```

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
