# Forståelse av FFE Forms (`ffe-form` og `ffe-form-react`)

Denne filen oppsummerer hvordan man bygger skjemaer ved hjelp av FFE-skjemakomponenter, basert på en gjennomgang av kildekoden og dokumentasjonen.

## Oversikt

FFEs skjemafunksjonalitet er delt i to hovedpakker:

1.  **`@sb1/ffe-form`**: Denne pakken inneholder Less-filer som definerer den grunnleggende CSS-stylingen for alle skjemakomponenter. Den sikrer et konsistent utseende i henhold til FFE-designsystemet. Man importerer vanligvis en hoved-Less-fil fra denne pakken (eller den importeres via en overordnet FFE Less-fil).
2.  **`@sb1/ffe-form-react`**: Denne pakken inneholder React-komponentene som brukes for å bygge selve skjemaene. Disse komponentene er bygget oppå stylingen fra `ffe-form`.

## Sentrale React-komponenter og bruk

### 1. `<InputGroup>`

Dette er en av de viktigste byggeklossene for FFE-skjemaer. `InputGroup` fungerer som en wrapper rundt ett eller flere input-elementer og håndterer:

*   **Label**: Vises over input-feltet. Settes med `label` prop.
*   **Hjelpetekst/Tooltip**:
    *   `tooltip` prop: For et ikon med hjelpetekst som vises ved hover/klikk.
    *   `description` prop: For en fast synlig hjelpetekst under labelen.
*   **Input-felt(er)**: Selve skjemakontrollen (f.eks. `<Input>`, `<Dropdown>`, `<RadioButtonInputGroup>`) plasseres som `children` av `<InputGroup>`.
    *   Hvis det er flere children (f.eks. for en gruppe radiobuttons som ikke er wrappet i `RadioButtonInputGroup` direkte), må man ofte bruke "function-as-a-child" mønsteret, hvor children er en funksjon som mottar props (som `id`, `aria-describedby`) fra `InputGroup` og returnerer JSX.
*   **Meldinger (Field Messages)**: Vises under input-feltet. Settes med `fieldMessage` prop.
    *   Kan være en enkel streng eller et React-element.
    *   Komponenter som `<ErrorFieldMessage>`, `<InfoFieldMessage>`, `<SuccessFieldMessage>` fra `ffe-form-react` brukes typisk her.
    *   `InputGroup` reserverer vanligvis plass til en feilmelding (kan skrus av med `extraMargin={false}`).
*   **Tilgjengelighet**: `InputGroup` hjelper med å koble label og meldinger korrekt til input-feltet via ID-er og `aria`-attributter.

**Eksempel på bruk av `InputGroup` med `Input`:**

```tsx
import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';

// Inne i en komponent...
const [value, setValue] = useState('');
const [error, setError] = useState<string | undefined>(undefined);

// ...
<InputGroup
    label="Navn"
    fieldMessage={error ? <ErrorFieldMessage>{error}</ErrorFieldMessage> : undefined}
>
    <Input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        aria-invalid={!!error} // InputGroup setter også dette hvis fieldMessage er satt, men kan være lurt for klarhet
    />
</InputGroup>
```

### 2. Input-komponenter

`ffe-form-react` tilbyr en rekke input-komponenter:

*   **`<Input />`**: For vanlige tekstbaserte inputs (`text`, `number`, `email`, `password`, etc.).
*   **`<TextArea />`**: For flertrinns tekstinput.
*   **`<Checkbox />`**: For enkeltstående avkrysningsbokser. Har ofte sin egen label.
*   **`<RadioButton />`**: For en enkelt radioknapp. Brukes vanligvis innenfor `<RadioButtonInputGroup>`.
*   **`<RadioButtonInputGroup />`**: For en gruppe med radioknapper hvor kun én kan velges.
    *   Tar en `label` prop for hele gruppen.
    *   `selectedValue` og `onChange` props for å håndtere state.
    *   Bruker "function-as-a-child" for å rendere `<RadioButton>`-elementer, og sender nødvendige props til dem.
    *   Kan vises `inline` eller stablet.
*   **`<RadioBlock />`**: En alternativ måte å presentere radioknappvalg, ofte med mer visuell vekt.
*   **`<RadioSwitch />`**: Veksler mellom to radioknapp-valg, ofte presentert som knapper.
*   **`<ToggleSwitch />`**: En av/på-bryter, lignende en checkbox.
*   **`<PhoneNumber />`**: Spesialisert input for telefonnummer med landskode.
*   **`<Dropdown />` (fra `@sb1/ffe-dropdown-react`)**: Selv om den er i en egen pakke, brukes den ofte i skjemaer og integreres godt med `<InputGroup>`.

### 3. Meldinger

*   **`<ErrorFieldMessage />`**: For valideringsfeil.
*   **`<InfoFieldMessage />`**: For generell informasjon knyttet til et felt.
*   **`<SuccessFieldMessage />`**: For suksessmeldinger knyttet til et felt.

Disse plasseres vanligvis i `fieldMessage`-propen til `<InputGroup>`.

### 4. Andre hjelpekomponenter

*   **`<Label />`**: Kan brukes for å lage frittstående labels, men `InputGroup` sin `label` prop er vanligvis foretrukket for input-felter.
*   **`<Tooltip />`**: For å vise hjelpeikoner med tekst.

## Bygge et fungerende skjema

1.  **Struktur med `<form>` og `<Grid>`**:
    *   Bruk standard HTML `<form>`-element med `onSubmit`-handler.
    *   Bruk gjerne FFE Grid (`<GridRow>`, `<GridCol>`) for layout av skjemafeltene.

2.  **Gruppér med `<InputGroup>`**:
    *   Hvert logiske input-felt (tekstfelt, radiogruppe, dropdown etc.) bør wrappes i en `<InputGroup>`.
    *   Sett `label` på `InputGroup`.

3.  **Velg riktig Input-komponent**:
    *   Plasser f.eks. `<Input>`, `<RadioButtonInputGroup>`, `<Dropdown>` som child av den korresponderende `<InputGroup>`.

4.  **Håndter State**:
    *   Bruk `useState` for å holde verdien til hvert input-felt og for eventuelle feilmeldinger.

5.  **Validering og Feilhåndtering**:
    *   Implementer valideringslogikk (f.eks. i `onSubmit` eller ved `onChange`/`onBlur`).
    *   Oppdater state for feilmeldinger.
    *   Send feilmeldingen (som streng eller `<ErrorFieldMessage>`) til `fieldMessage`-propen på relevant `<InputGroup>`.
    *   Input-komponenter vil automatisk få `aria-invalid="true"` hvis `InputGroup` har en `fieldMessage`.

6.  **Knapper**:
    *   Bruk knapper fra `@sb1/ffe-buttons-react` (f.eks. `<PrimaryButton type="submit">`, `<SecondaryButton type="button">`) for handlinger. Plasser dem gjerne i en `<ButtonGroup>`.

**Eksempel på `RadioButtonInputGroup` i en `InputGroup`:**

```tsx
import { InputGroup, RadioButtonInputGroup, RadioButton } from '@sb1/ffe-form-react';

// Inne i en komponent...
const [paymentType, setPaymentType] = useState('vanlig');

// ...
<InputGroup label="Betalingstype">
    <RadioButtonInputGroup
        name="paymentType"
        selectedValue={paymentType}
        onChange={e => setPaymentType(e.target.value)}
        inline={true}
    >
        {innerProps => (
            <>
                <RadioButton {...innerProps} value="straks">
                    Straksbetaling
                </RadioButton>
                <RadioButton {...innerProps} value="vanlig">
                    Vanlig betaling
                </RadioButton>
            </>
        )}
    </RadioButtonInputGroup>
</InputGroup>
```

Ved å kombinere disse komponentene og prinsippene kan man bygge robuste, tilgjengelige og konsistente skjemaer med FFE. 