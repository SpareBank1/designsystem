# @sb1/ffe-buttons-react

## Beskrivelse

Knapp-komponenter for handlinger med visuell hierarki og tilgjengelighet. Bruk for prioritet (Action > Primary > Secondary > Tertiary), navigasjon (BackButton), utvidelse (Expand/InlineExpand), gruppering og snarveier.

Bruk lenker (`LinkText` fra `ffe-core-react`) for navigasjon som ser ut som lenker.

## Installasjon

```bash
npm install --save @sb1/ffe-buttons-react
```

## Bruk

Full dokumentasjon: https://sparebank1.github.io/designsystem/

Avhengig av `@sb1/ffe-icons-react`. Importer styling:

```css
@import '@sb1/ffe-buttons/css/buttons.css';
```

## Eksempler

### Importering

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

### Grunnleggende knapper (ActionButton, PrimaryButton, SecondaryButton)

ActionButton: viktigste handling (maks en per side). PrimaryButton: hovedhandlinger. SecondaryButton: sekundære handlinger.

```tsx
<ActionButton onClick={() => handleSubmit()}>Send soknad</ActionButton>
<PrimaryButton onClick={() => handleSave()}>Lagre</PrimaryButton>
<SecondaryButton onClick={() => handleCancel()}>Avbryt</SecondaryButton>
```

### Storrelse og lasting

```tsx
<ActionButton size="lg">Stor</ActionButton>
<PrimaryButton isLoading={isSubmitting} ariaLoadingMessage="Sender...">Send</PrimaryButton>
```

### Knapper med ikoner

```tsx
<PrimaryButton leftIcon={<Icon fileUrl={addIcon} size="md" />}>Legg til</PrimaryButton>
<ActionButton iconOnly aria-label="Legg til bruker"><Icon fileUrl={addIcon} size="md" /></ActionButton>
```

### TertiaryButton

Inline-knapp for mindre fremtredende handlinger. Stotter ikke lasting.

```tsx
<TertiaryButton leftIcon={<Icon fileUrl={infoIcon} size="md" />}>
    Mer info
</TertiaryButton>
```

### BackButton

Navigasjonsknapp med innebygd venstre-pil.

```tsx
<BackButton onClick={() => navigate(-1)}>Tilbake</BackButton>
<BackButton as={Link} to="/previous">Tilbake til oversikt</BackButton>
```

### ExpandButton

Sirkulaer knapp for vis/skjul innhold. Viser tekst nar lukket, X-ikon nar apen.

```tsx
<ExpandButton
    isExpanded={isExpanded}
    onClick={() => setIsExpanded(!isExpanded)}
    aria-controls={collapseId}
    closeLabel="Lukk detaljer"
>
    Vis mer
</ExpandButton>
```

### InlineExpandButton

Inline-knapp med ned-pil som roterer.

```tsx
<InlineExpandButton
    isExpanded={isExpanded}
    onClick={() => setIsExpanded(!isExpanded)}
    aria-controls={collapseId}
>
    {isExpanded ? 'Vis mindre' : 'Vis mer'}
</InlineExpandButton>
```

### ShortcutButton

Snarveisknapp med innebygd hoyre-pil.

```tsx
<ShortcutButton leftIcon={<Icon fileUrl={settingsIcon} size="md" />}>
    Innstillinger
</ShortcutButton>
```

### TaskButton

Oppgaveknapp med pakrevd ikon.

```tsx
<TaskButton icon={<Icon fileUrl={addIcon} size="md" />}>
    Legg til bruker
</TaskButton>
```

### ButtonGroup

Grupperer knapper med riktig mellomrom.

```tsx
<ButtonGroup>
    <SecondaryButton>Avbryt</SecondaryButton>
    <PrimaryButton>Bekreft</PrimaryButton>
</ButtonGroup>
<ButtonGroup thin inline ariaLabel="Handlinger">...</ButtonGroup>
```

### Polymorfisk as-prop

```tsx
<PrimaryButton as="a" href="/link">Lenke</PrimaryButton>
<ActionButton as={Link} to="/route">React Router</ActionButton>
```

## Utvikling

```bash
npm install && npm run build && npm start
```

Lokal Storybook: http://localhost:6006/
