# @sb1/ffe-modals-react

## Beskrivelse

Modal-komponenter for korte, fokuserte interaksjoner. Bruk for enkle oppgaver, bekreftelser eller informasjon. Ikke bruk på mobil - bruk ark/sheets.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Modal`
- `ModalHandle`
- `ModalBlock`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-modals-react
```

## API-referanse

### Modal Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `ariaLabelledby` | `string` | Ja | Id of modal heading |
| `locale` | `Locale` | Nei | Locale used |
| `onClose` | `() => void` | Nei | Called when dialog is closed |
| `portalContainer` | `Parameters<typeof createPortal>[1]` | Nei | Container for portal, default is document.body |

### ModalHandle Props

Ingen komponentspesifikke props utover native HTML-attributter.

### ModalBlock Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Når bør du bruke

Når skal komponenten brukes?

Modalvinduer skal **IKKE** brukes i mobilapplikasjoner. I app anbefales det å bruke eksternt lag eller sheet der det anses som nødvendig.

Modalvinduer skal kun aktiveres av bruker ved brukers direkte interaksjon med en knapp på nettsiden, eller for å gi brukeren viktige informasjonsvarsler. Modalen vil da gi brukeren et nytt grensesnitt, men under samme kontekst som siden bruker var på ved aktivering.

En modal skal alltid ha en heading nivå 2. Ikke bruk modalvinduer for funksjonelle prosesser med flere steg.

For å lukke eller åpne en modal brukes `ModalHandle`. Innhold kan plasseres i en eller flere `<ModalBlock/>`.

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
