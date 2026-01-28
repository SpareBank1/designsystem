# @sb1/ffe-modals-react

## Beskrivelse

Modal-komponenter for korte, fokuserte interaksjoner i webapplikasjoner. Bruk modaler når du trenger å fange brukerens oppmerksomhet for en enkel oppgave, bekreftelse eller informasjon. Ikke bruk modaler på mobil—bruk ark/sheets.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `Modal`
- `ModalHandle`
- `ModalBlock`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-modals-react @sb1/ffe-icons-react @sb1/ffe-modals @sb1/ffe-icons @sb1/ffe-core
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-icons-react`
- `@sb1/ffe-modals`
- `@sb1/ffe-icons`
- `@sb1/ffe-core`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
@import '@sb1/ffe-modals/css/modal.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

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

export function ModalDemo() {
    const modalRef = useRef<ModalHandle>(null);

    return (
        <div>
            <button onClick={() => modalRef.current?.open()}>Åpne modal</button>

            <Modal
                ref={modalRef}
                ariaLabelledby="modal-title"
                onClose={() => console.log('Lukket')}
            >
                <h2 id="modal-title">Tittel</h2>
                <p>Innhold i modal.</p>
                <ModalBlock>
                    <button onClick={() => modalRef.current?.close()}>
                        Lukk
                    </button>
                </ModalBlock>
            </Modal>
        </div>
    );
}
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
