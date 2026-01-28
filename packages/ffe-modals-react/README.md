# @sb1/ffe-modals-react

## Installasjon

```bash
npm install --save @sb1/ffe-modals-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/modal/.

Denne pakken er avhengig av `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Beskrivelse

Modal-komponenter for korte, fokuserte interaksjoner i webapplikasjoner. Bruk modaler når du trenger å fange brukerens oppmerksomhet for en enkel oppgave, bekreftelse eller informasjon. Ikke bruk modaler på mobil—bruk ark/sheets.

Når bør du bruke pakken:

- Enkelt steg, tydelig fokus og avbrytbar interaksjon.
- Brukeren skal kunne lukke med Escape, overlay-klikk og dedikert knapp.

Når bør du ikke bruke pakken:

- Lange eller flerstegsprosesser.
- Primær navigasjon eller innhold som hører hjemme i siden.

## Eksempler

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

## Utvikling

For å starte en lokal utviklingsserver, kjør følgende fra designsystem-rotmappen:

```bash
npm install
npm run build
npm start
```

En lokal Storybook-instans med live reloading vil kjøre på http://localhost:6006/.

Eksempelimplementasjoner med de nyeste versjonene av alle komponentene er også tilgjengelige på https://sparebank1.github.io/designsystem.
