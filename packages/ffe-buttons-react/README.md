# @sb1/ffe-buttons-react

## Installasjon

```bash
npm install --save @sb1/ffe-buttons-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://design.sparebank1.no/komponenter/knapper/.

Denne pakken er avhengig av `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Beskrivelse

Reaktive knapp-komponenter i FFE for handlinger med korrekt visuell hierarki og tilgjengelighetsstøtte. Bruk disse for å kommunisere prioritet (Action, Primary, Secondary, Tertiary), navigasjon (BackButton), utvidelse/visning (Expand/InlineExpand), grupperte knapper og snarveier.

Når bør du bruke pakken:

- Når du trenger konsistent knappestil og semantikk på tvers av apper.
- For tydelig hierarki på handlinger og god tastaturnavigasjon.

Når bør du ikke bruke pakken:

- For lenker som ser ut som knapper—bruk `LinkText` i `ffe-core-react` eller semantisk `<a>` med riktig stil.

## Eksempler

```tsx
import React from 'react';
import {
    ActionButton,
    BackButton,
    ButtonGroup,
    ExpandButton,
    InlineExpandButton,
    PrimaryButton,
    SecondaryButton,
    ShortcutButton,
    TaskButton,
    TertiaryButton,
} from '@sb1/ffe-buttons-react';

export function ButtonsDemo() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div>
            {/* Action: én per side, den viktigste handlingen */}
            <ActionButton onClick={() => alert('Send søknad')}>
                Send søknad
            </ActionButton>

            {/* Primary/Secondary/Tertiary: hierarki av handlinger */}
            <PrimaryButton onClick={() => alert('Lagre')}>Lagre</PrimaryButton>
            <SecondaryButton onClick={() => alert('Avbryt')}>
                Avbryt
            </SecondaryButton>
            <TertiaryButton onClick={() => alert('Mer info')}>
                Mer info
            </TertiaryButton>

            {/* BackButton: navigasjon bakover */}
            <BackButton onClick={() => window.history.back()}>
                Tilbake
            </BackButton>

            {/* Expand/InlineExpand: vis/skjul innhold */}
            <ExpandButton
                expanded={expanded}
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? 'Skjul detaljer' : 'Vis detaljer'}
            </ExpandButton>
            <InlineExpandButton
                expanded={expanded}
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? 'Skjul' : 'Vis'}
            </InlineExpandButton>

            {/* ButtonGroup: gruppering og mellomrom */}
            <ButtonGroup>
                <PrimaryButton>Fortsett</PrimaryButton>
                <SecondaryButton>Avbryt</SecondaryButton>
            </ButtonGroup>

            {/* Shortcut/Task: snarveier og oppgavehandlinger */}
            <ShortcutButton onClick={() => alert('Snarvei')}>
                Snarvei
            </ShortcutButton>
            <TaskButton onClick={() => alert('Start oppgave')}>
                Start oppgave
            </TaskButton>
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
