# @sb1/ffe-buttons-react

## Beskrivelse

Reaktive knapp-komponenter i FFE for handlinger med korrekt visuell hierarki og tilgjengelighetsstøtte. Bruk disse for å kommunisere prioritet (Action, Primary, Secondary, Tertiary), navigasjon (BackButton), utvidelse/visning (Expand/InlineExpand), grupperte knapper og snarveier.

## Komponenter

Denne pakken eksporterer følgende komponenter:

- `ActionButton`
- `BackButton`
- `ButtonGroup`
- `ExpandButton`
- `InlineExpandButton`
- `PrimaryButton`
- `SecondaryButton`
- `ShortcutButton`
- `TaskButton`
- `TertiaryButton`

## Installasjon

Installer pakken og alle dens avhengigheter:

```bash
npm install @sb1/ffe-buttons-react @sb1/ffe-buttons @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

### Avhengigheter

Denne pakken er avhengig av:

- `@sb1/ffe-buttons`
- `@sb1/ffe-icons-react`
- `@sb1/ffe-core`
- `@sb1/ffe-icons`

## CSS-import

I prosjektets hoved-CSS-fil, importer de nødvendige stilene:

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

Merk: Sørg for å importere `@sb1/ffe-core/css/ffe.css` først, da den inneholder grunnleggende stiler.

## API-referanse

### ActionButton Props

Ingen komponentspesifikke props utover native HTML-attributter.

### BackButton Props

Ingen komponentspesifikke props utover native HTML-attributter.

### ButtonGroup Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `thin` | `boolean` | Nei | Applies the thin modifier to remove margins |
| `inline` | `boolean` | Nei | Applies the inline modifier to make all child buttons inline |
| `ariaLabel` | `string` | Nei | Label for the group of buttons for users with screen reader |

### ExpandButton Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `closeLabel` | `string` | Nei | An accessible label for the close-button, only shown in the "isExpanded" state |
| `isExpanded` | `boolean` | Ja | When true the component will render a circle with an X indicating whatever is controlled is in an expanded state. |
| `size` | `'sm' | 'md' | 'lg'` | Nei | - |

### InlineExpandButton Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `isExpanded` | `boolean` | Ja | When true it will indicate the button is in its open state |

### PrimaryButton Props

Ingen komponentspesifikke props utover native HTML-attributter.

### SecondaryButton Props

Ingen komponentspesifikke props utover native HTML-attributter.

### ShortcutButton Props

Ingen komponentspesifikke props utover native HTML-attributter.

### TaskButton Props

| Prop | Type | Påkrevd | Beskrivelse |
|------|------|---------|-------------|
| `icon` | `ReactElement` | Ja | icon element shown to the left of the label |

### TertiaryButton Props

Ingen komponentspesifikke props utover native HTML-attributter.

## Når bør du bruke

Bruk av knapper

I SpareBank 1 har vi flere typer knapper og hvilken du skal bruke kommer an på situasjonen, og hvilke andre knapper som ligger i «nærheten». Felles for alle knappene er at de kan brukes i situasjoner der du vil gi brukerne muligheten til å utføre ulike typer handlinger i brukergrensesnittet.

Noen eksempler på scenarioer der knapper kan komme til nytte:

- Starte en prosess. F.eks. «Bli kunde», «Sjekk pris», «Meld skade»
- Gi en kommando til systemet. F.eks. «Skriv ut», «Last ned», «Betal», «Bestill»
- Beslutte noe. F.eks. «Kjøp», «Aksepter», «Overfør»
- Navigere i brukergrensesnittet. F.eks. «Neste», «Fortsett», «Søk»
- Endre modus eller visning. F.eks. «Redigér» for å gå til redigeringsmodus, «Vis flere» for å ekspandere en liste

Knapper skal brukes der kundene utfører en handling. Der de skal navigere til andre sider og sider utenfor løsningen brukes [lenker](/komponenter/typografi/) istedenfor. Når du vil at brukeren skal ta et valg er det best å bruke [radioknapper](/komponenter/skjemaelementer/) eller [checkboxer](/komponenter/skjemaelementer/), for å så bekrefte med en knapp.



Gjør sånn:

<CheckList>
    <CheckListItem>Knappen skal brukes til å utføre en handling</CheckListItem>
    <CheckListItem>
        Ha informativ og beskrivende tekst, ikon eller begge deler
    </CheckListItem>
    <CheckListItem>
        Bruk verb i imperiativ form (unntak: konvensjoner som «neste»)
    </CheckListItem>
    <CheckListItem>Ha så kort tekst som mulig</CheckListItem>
</CheckList>

## Når bør du ikke bruke

Ikke sånn:

<CheckList>
    <CheckListItem isCross={true}>Ha tekst som går over 2 linjer</CheckListItem>
    <CheckListItem isCross={true}>
        Gjem knappen eller sett den som disabled
    </CheckListItem>
    <CheckListItem isCross={true}>
        Ha flere primærknapper på en side
    </CheckListItem>
    <CheckListItem isCross={true}>
        Bruk knapp til å navigere utenfor løsningen (bruk lenke istedenfor)
    </CheckListItem>
    <CheckListItem isCross={true}>
        Bruk knapp til å la bruker ta valg (bruk checkbox/radioknapp istedenfor)
    </CheckListItem>
</CheckList>

## Eksempler (fra README)

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

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
