# @sb1/ffe-buttons-react

## Installasjon

```bash
npm install --save @sb1/ffe-buttons-react
```

## Bruk

Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/komponenter/knapper/.

Denne pakken er avhengig av `@sb1/ffe-icons-react`.
Husk å importere less-filene.

## Beskrivelse

Reaktive knapp-komponenter i FFE for handlinger med korrekt visuell hierarki og tilgjengelighetsstøtte. Bruk disse for å kommunisere prioritet (Action, Primary, Secondary, Tertiary), navigasjon (BackButton), utvidelse/visning (Expand/InlineExpand), grupperte knapper og snarveier.

Når bør du bruke pakken:

- Når du trenger konsistent knappestil og semantikk på tvers av apper.
- For tydelig hierarki på handlinger og god tastaturnavigasjon.

Når bør du ikke bruke pakken:

- For lenker som ser ut som knapper - bruk `LinkText` i `ffe-core-react` eller semantisk `<a>` med riktig stil.

## Eksempler

### Importering

```tsx
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
import { Icon } from '@sb1/ffe-icons-react';
```

### Grunnleggende knapper (ActionButton, PrimaryButton, SecondaryButton)

Disse knappene deler samme props-grensesnitt. Bruk ActionButton for den viktigste handlingen på en side (maks én per side), PrimaryButton for hovedhandlinger, og SecondaryButton for sekundære handlinger.

```tsx
// ActionButton - den viktigste handlingen på siden
<ActionButton onClick={() => handleSubmit()}>
    Send søknad
</ActionButton>

// PrimaryButton - hovedhandling
<PrimaryButton onClick={() => handleSave()}>
    Lagre
</PrimaryButton>

// SecondaryButton - sekundær handling
<SecondaryButton onClick={() => handleCancel()}>
    Avbryt
</SecondaryButton>
```

**Props for ActionButton, PrimaryButton, SecondaryButton:**

| Prop                 | Type                   | Standard   | Beskrivelse                                                                         |
| -------------------- | ---------------------- | ---------- | ----------------------------------------------------------------------------------- |
| `as`                 | `ElementType`          | `'button'` | Polymorfisk komponent - kan være `'a'`, `'button'`, eller en egendefinert komponent |
| `size`               | `'sm' \| 'md' \| 'lg'` | `'md'`     | Størrelse på knappen                                                                |
| `isLoading`          | `boolean`              | `false`    | Viser spinner og blokkerer klikk                                                    |
| `isDisabled`         | `boolean`              | `false`    | Deaktiverer knappen                                                                 |
| `ariaLoadingMessage` | `string`               | -          | Skjermleser-melding under lasting                                                   |
| `leftIcon`           | `ReactElement`         | -          | Ikon til venstre for teksten                                                        |
| `rightIcon`          | `ReactElement`         | -          | Ikon til høyre for teksten                                                          |
| `iconOnly`           | `boolean`              | `false`    | Kun ikon, ingen tekst (bruk alltid `aria-label`)                                    |

### Størrelse og lasting

```tsx
// Tre størrelser
<ActionButton size="lg">Stor knapp</ActionButton>
<ActionButton size="md">Medium knapp</ActionButton>
<ActionButton size="sm">Liten knapp</ActionButton>

// Lasting med tilgjengelighetsmelding
<PrimaryButton
    isLoading={isSubmitting}
    ariaLoadingMessage="Sender inn..."
>
    Send
</PrimaryButton>
```

### Knapper med ikoner

```tsx
import { Icon } from '@sb1/ffe-icons-react';

// Ikon til venstre
<PrimaryButton leftIcon={<Icon fileUrl={addIcon} size="md" />}>
    Legg til
</PrimaryButton>

// Ikon til høyre
<SecondaryButton rightIcon={<Icon fileUrl={arrowIcon} size="md" />}>
    Neste
</SecondaryButton>

// Kun ikon (husk aria-label for tilgjengelighet)
<ActionButton
    iconOnly
    aria-label="Legg til ny bruker"
>
    <Icon fileUrl={addIcon} size="md" />
</ActionButton>
```

### TertiaryButton

Inline-knapp for mindre fremtredende handlinger. Støtter ikke lasting-tilstand.

```tsx
<TertiaryButton onClick={() => showDetails()}>
    Vis detaljer
</TertiaryButton>

// Med ikon
<TertiaryButton leftIcon={<Icon fileUrl={infoIcon} size="md" />}>
    Mer informasjon
</TertiaryButton>
```

**Props for TertiaryButton:**

| Prop        | Type                   | Standard   | Beskrivelse                  |
| ----------- | ---------------------- | ---------- | ---------------------------- |
| `as`        | `ElementType`          | `'button'` | Polymorfisk komponent        |
| `size`      | `'sm' \| 'md' \| 'lg'` | `'md'`     | Størrelse på knappen         |
| `leftIcon`  | `ReactElement`         | -          | Ikon til venstre for teksten |
| `rightIcon` | `ReactElement`         | -          | Ikon til høyre for teksten   |
| `iconOnly`  | `boolean`              | `false`    | Kun ikon, ingen tekst        |

### BackButton

Navigasjonsknapp for å gå tilbake. Har innebygd venstre-pil-ikon.

```tsx
<BackButton onClick={() => navigate(-1)}>
    Tilbake
</BackButton>

// Med React Router
<BackButton as={Link} to="/previous-page">
    Tilbake til oversikt
</BackButton>
```

**Props for BackButton:** Samme som TertiaryButton, men uten `leftIcon` (innebygd).

### ExpandButton

Sirkulær knapp for å vise/skjule innhold. Viser tekst når lukket, X-ikon når åpen.

```tsx
import { useState } from 'react';

function ExpandExample() {
    const [isExpanded, setIsExpanded] = useState(false);
    const collapseId = 'my-collapsible-content';

    return (
        <>
            <ExpandButton
                isExpanded={isExpanded}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-controls={collapseId}
                closeLabel="Lukk detaljer"
            >
                Vis mer
            </ExpandButton>

            {/* Bruk gjerne Collapse fra @sb1/ffe-collapse-react */}
            <div id={collapseId} hidden={!isExpanded}>
                Innhold som vises/skjules
            </div>
        </>
    );
}
```

**Props for ExpandButton:**

| Prop         | Type                   | Standard    | Beskrivelse                                  |
| ------------ | ---------------------- | ----------- | -------------------------------------------- |
| `isExpanded` | `boolean`              | **Påkrevd** | Om innholdet er utvidet                      |
| `closeLabel` | `string`               | `'Lukk'`    | aria-label når knappen er i utvidet tilstand |
| `size`       | `'sm' \| 'md' \| 'lg'` | `'md'`      | Størrelse på knappen                         |
| `as`         | `ElementType`          | `'button'`  | Polymorfisk komponent                        |

### InlineExpandButton

Inline-knapp for å vise/skjule innhold, med innebygd ned-pil som roterer.

```tsx
import { useState, useId } from 'react';
import { Paragraph } from '@sb1/ffe-core-react';

function InlineExpandExample() {
    const [isExpanded, setIsExpanded] = useState(false);
    const collapseId = useId();

    return (
        <>
            <Paragraph>
                Her er noe innledende tekst.
                <InlineExpandButton
                    isExpanded={isExpanded}
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-controls={collapseId}
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? 'Vis mindre' : 'Vis mer'}
                </InlineExpandButton>
            </Paragraph>

            <div id={collapseId} hidden={!isExpanded}>
                Utvidet innhold her...
            </div>
        </>
    );
}
```

**Props for InlineExpandButton:**

| Prop         | Type                   | Standard    | Beskrivelse                  |
| ------------ | ---------------------- | ----------- | ---------------------------- |
| `isExpanded` | `boolean`              | **Påkrevd** | Om innholdet er utvidet      |
| `leftIcon`   | `ReactElement`         | -           | Ikon til venstre for teksten |
| `size`       | `'sm' \| 'md' \| 'lg'` | `'md'`      | Størrelse på knappen         |
| `iconOnly`   | `boolean`              | `false`     | Kun ikon, ingen tekst        |
| `as`         | `ElementType`          | `'button'`  | Polymorfisk komponent        |

Merk: `rightIcon` er ikke tilgjengelig (innebygd ned-pil brukes).

### ShortcutButton

Snarveisknapp med innebygd høyre-pil. Egnet for navigasjonslenker.

```tsx
<ShortcutButton onClick={() => navigate('/dashboard')}>
    Gå til dashboard
</ShortcutButton>

// Med leftIcon
<ShortcutButton leftIcon={<Icon fileUrl={settingsIcon} size="md" />}>
    Innstillinger
</ShortcutButton>
```

**Props for ShortcutButton:** Samme som ActionButton, men uten `rightIcon` (innebygd høyre-pil).

### TaskButton

Oppgaveknapp med påkrevd ikon. Egnet for handlinger som representerer oppgaver.

```tsx
import { Icon } from '@sb1/ffe-icons-react';

<TaskButton icon={<Icon fileUrl={addIcon} size="md" />}>
    Legg til bruker
</TaskButton>

<TaskButton icon={<Icon fileUrl={uploadIcon} size="md" />}>
    Last opp dokument
</TaskButton>
```

**Props for TaskButton:**

| Prop                 | Type                   | Standard    | Beskrivelse                       |
| -------------------- | ---------------------- | ----------- | --------------------------------- |
| `icon`               | `ReactElement`         | **Påkrevd** | Ikon som vises til venstre        |
| `as`                 | `ElementType`          | `'button'`  | Polymorfisk komponent             |
| `size`               | `'sm' \| 'md' \| 'lg'` | `'md'`      | Størrelse på knappen              |
| `isLoading`          | `boolean`              | `false`     | Viser spinner                     |
| `isDisabled`         | `boolean`              | `false`     | Deaktiverer knappen               |
| `ariaLoadingMessage` | `string`               | -           | Skjermleser-melding under lasting |
| `iconOnly`           | `boolean`              | `false`     | Kun ikon, ingen tekst             |

Merk: `leftIcon` og `rightIcon` er ikke tilgjengelig (bruk `icon`-prop).

### ButtonGroup

Container for å gruppere knapper med riktig mellomrom og tilgjengelighet.

```tsx
// Standard gruppering
<ButtonGroup>
    <SecondaryButton>Forrige</SecondaryButton>
    <PrimaryButton>Neste</PrimaryButton>
</ButtonGroup>

// Kompakt gruppering uten marginer
<ButtonGroup thin>
    <SecondaryButton>Avbryt</SecondaryButton>
    <PrimaryButton>Bekreft</PrimaryButton>
</ButtonGroup>

// Inline-visning
<ButtonGroup inline>
    <TertiaryButton>Rediger</TertiaryButton>
    <TertiaryButton>Slett</TertiaryButton>
</ButtonGroup>

// Med tilgjengelighetsmerking
<ButtonGroup ariaLabel="Navigasjonshandlinger">
    <SecondaryButton>Tilbake</SecondaryButton>
    <PrimaryButton>Fortsett</PrimaryButton>
</ButtonGroup>
```

**Props for ButtonGroup:**

| Prop        | Type      | Standard | Beskrivelse                          |
| ----------- | --------- | -------- | ------------------------------------ |
| `thin`      | `boolean` | `false`  | Fjerner marginer for kompakt visning |
| `inline`    | `boolean` | `false`  | Viser knapper på en linje            |
| `ariaLabel` | `string`  | -        | Tilgjengelighetslabel for gruppen    |

### Polymorfisk as-prop

Alle knapper støtter `as`-prop for å endre underliggende element:

```tsx
import { Link } from 'react-router-dom';

// Som lenke
<PrimaryButton as="a" href="/external-link">
    Ekstern lenke
</PrimaryButton>

// Med React Router
<ActionButton as={Link} to="/internal-route">
    Intern navigasjon
</ActionButton>

// Egendefinert komponent
const CustomWrapper = (props) => <span {...props} />;
<SecondaryButton as={CustomWrapper}>
    Egendefinert wrapper
</SecondaryButton>
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
