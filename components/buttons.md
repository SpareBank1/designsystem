# @sb1/ffe-buttons-react

## Beskrivelse

Knapp-komponenter for handlinger med visuell hierarki og tilgjengelighet. Bruk for prioritet (Action > Primary > Secondary > Tertiary), navigasjon (BackButton), utvidelse (Expand/InlineExpand), gruppering og snarveier.

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
npm install @sb1/ffe-buttons-react
```

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
import {
    ActionButton,
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
    BackButton,
    ExpandButton,
    InlineExpandButton,
    ShortcutButton,
    TaskButton,
    ButtonGroup,
} from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
```

```tsx
<ActionButton onClick={() => handleSubmit()}>Send soknad</ActionButton>
<PrimaryButton onClick={() => handleSave()}>Lagre</PrimaryButton>
<SecondaryButton onClick={() => handleCancel()}>Avbryt</SecondaryButton>
```

```tsx
<ActionButton size="lg">Stor</ActionButton>
<PrimaryButton isLoading={isSubmitting} ariaLoadingMessage="Sender...">Send</PrimaryButton>
```

```tsx
<PrimaryButton leftIcon={<Icon fileUrl={addIcon} size="md" />}>Legg til</PrimaryButton>
<ActionButton iconOnly aria-label="Legg til bruker"><Icon fileUrl={addIcon} size="md" /></ActionButton>
```

```tsx
<TertiaryButton leftIcon={<Icon fileUrl={infoIcon} size="md" />}>
    Mer info
</TertiaryButton>
```

```tsx
<BackButton onClick={() => navigate(-1)}>Tilbake</BackButton>
<BackButton as={Link} to="/previous">Tilbake til oversikt</BackButton>
```

## Dokumentasjon

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/

## Tilleggskontekst

Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.
Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.
