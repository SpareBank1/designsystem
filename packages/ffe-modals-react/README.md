# @sb1/ffe-modals-react

## Install

```
npm install --save @sb1/ffe-modals-react
```

## Usage

Full documentation on lists usage is available at https://design.sparebank1.no/komponenter/modal/.

This package depends on `@sb1/ffe-icons-react`.
Make sure you import the less-files.

## Description

Modal-komponenter for korte, fokuserte interaksjoner i webapplikasjoner. Bruk modaler når du trenger å fange brukerens oppmerksomhet for en enkel oppgave, bekreftelse eller informasjon. Ikke bruk modaler på mobil—bruk ark/sheets.

Når bør du bruke pakken:

- Enkelt steg, tydelig fokus og avbrytbar interaksjon.
- Brukeren skal kunne lukke med Escape, overlay-klikk og dedikert knapp.

Når bør du ikke bruke pakken:

- Lange eller flerstegsprosesser.
- Primær navigasjon eller innhold som hører hjemme i siden.

## Examples

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
                onClose={() => console.log('Closed')}
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

## Development

To start a local development server, run the following from the designsystem root folder:

```bash
npm install
npm run build
npm start
```

A local instance of `component-overview` with live reloading will run at http://localhost:1234/.

Example implementations using the latest versions of all components are also available at https://sparebank1.github.io/designsystem.
