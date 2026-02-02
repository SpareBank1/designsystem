# @sb1/ffe-modals-react

## Installasjon

```bash
npm install --save @sb1/ffe-modals-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

Avhengig av `@sb1/ffe-icons-react` og `@sb1/ffe-buttons-react`.

```css
@import '@sb1/ffe-modals/css/modals.css';
```

## Beskrivelse

Modal-komponenter for korte, fokuserte interaksjoner. Bruk for enkle oppgaver, bekreftelser eller informasjon. Ikke bruk på mobil - bruk ark/sheets.

Bruk når: Enkelt steg, tydelig fokus, avbrytbar interaksjon.
Ikke bruk for: Lange/flerstegsprosesser eller primær navigasjon.

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

## Eksempler

### Grunnleggende bruk

```tsx
import React, { useRef } from 'react';
import { Modal, ModalHandle, ModalBlock } from '@sb1/ffe-modals-react';
import {
    ActionButton,
    SecondaryButton,
    ButtonGroup,
} from '@sb1/ffe-buttons-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';

export function ModalExample() {
    const modalRef = useRef<ModalHandle>(null);

    return (
        <>
            <ActionButton onClick={() => modalRef.current?.open()}>
                Åpne modal
            </ActionButton>

            <Modal
                ref={modalRef}
                ariaLabelledby="modal-heading"
                locale="nb"
                onClose={() => console.log('Lukket')}
            >
                <ModalBlock>
                    <Heading2 id="modal-heading">Bekreft handling</Heading2>
                    <Paragraph>Er du sikker på at du vil fortsette?</Paragraph>
                    <ButtonGroup thin={true} ariaLabel="Handlingsknapper">
                        <SecondaryButton
                            onClick={() => modalRef.current?.close()}
                        >
                            Avbryt
                        </SecondaryButton>
                        <ActionButton autoFocus={true}>Bekreft</ActionButton>
                    </ButtonGroup>
                </ModalBlock>
            </Modal>
        </>
    );
}
```

### Tilpasset innhold (med bilde eller grafikk)

Innhold utenfor `ModalBlock` får ingen padding (nyttig for bilder/grafikk):

```tsx
<Modal ref={modalRef} ariaLabelledby={headingId}>
    <div
        style={{
            height: 150,
            width: '100%',
            background: 'var(--ffe-color-surface-secondary-default)',
        }}
    />
    <ModalBlock>
        <Heading2 id={headingId}>Modal med bilde</Heading2>
        <Paragraph>Innhold her får padding.</Paragraph>
    </ModalBlock>
</Modal>
```

### Dark mode

Legg til `className="ffe-dark"` for dark mode.

### Sjekke om modal er åpen

Bruk `modalRef.current?.isOpen` for å sjekke tilstand.

## Utvikling

```bash
npm install
npm run build
npm start
```

Lokal Storybook kjører på http://localhost:6006/.
