# SpareBank 1 FFE (Felles Front End) Designsystem - AI-kontekst

## Oversikt

FFE-designsystemet er SpareBank 1s omfattende komponentbibliotek for å bygge konsistente, tilgjengelige webapplikasjoner. Det tilbyr React-komponenter med tilhørende CSS-stiler som følger SpareBank 1s designretningslinjer.

## Arkitektur

Designsystemet er organisert i pakker:

- **React-pakker** (slutter med `-react`): Inneholder React-komponenter
- **CSS-pakker**: Inneholder frittstående CSS (noen React-pakker inkluderer egen CSS)
- **Kjernepakker**: Tilbyr grunnleggende stiler, ikoner og verktøy

### Viktige pakker

- `@sb1/ffe-core` og `@sb1/ffe-core-react`: Grunnstiler, typografi, spacing
- `@sb1/ffe-icons` og `@sb1/ffe-icons-react`: Ikonbibliotek

**Merk:** Grid-pakken (`@sb1/ffe-grid-react`) er foreldet og bør ikke brukes. Bruk moderne CSS Grid eller Flexbox i stedet.

## Komponentbibliotek

Nedenfor er en komplett liste over alle React-komponentpakker i FFE-designsystemet.

### Skjema og input

#### @sb1/ffe-account-selector-react

En kombinasjonsboks med autofullføring spesielt tilpasset for bankkontoer.

**Komponenter:** AccountSelector, AccountSelectorMulti

[Se detaljert dokumentasjon](./components/account-selector.md)

#### @sb1/ffe-datepicker-react

Komponenter for dato-inntasting og kalender i FFE. `DateInput` er feltet for manuell inntasting og parsing, `Calendar` viser datoer med tastaturnavigasjon, og `Datepicker` kombinerer input + kalender i én komponent.

**Komponenter:** Datepicker, getDatepickerByLabelText, DateInput, Calendar

[Se detaljert dokumentasjon](./components/datepicker.md)

#### @sb1/ffe-dropdown-react

Enkel nedtrekksliste-komponent (`Dropdown`) for valg fra en liste. Brukes for korte, flate lister der brukeren skal velge ett alternativ.

**Komponenter:** Dropdown

[Se detaljert dokumentasjon](./components/dropdown.md)

#### @sb1/ffe-file-upload-react

Filopplastingsknapp med validering og liste over opplastede filer.

**Komponenter:** FileUpload, getFileContent, getUniqueFileName

[Se detaljert dokumentasjon](./components/file-upload.md)

#### @sb1/ffe-form-react

Skjemaelementer og støttekomponenter for input, valg og meldinger i FFE. Bruk disse for å bygge tilgjengelige, konsistente skjemaer med riktige etiketter, hjelpetekster og validering.

**Komponenter:** ErrorFieldMessage, InfoFieldMessage, SuccessFieldMessage, Checkbox, Input, ...

[Se detaljert dokumentasjon](./components/form.md)

#### @sb1/ffe-searchable-dropdown-react

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`). Støtter tastaturnavigasjon, lastestatus, tom-liste og egendefinert render av elementer.

**Komponenter:** SearchableDropdown, SearchableDropdownMultiSelect

[Se detaljert dokumentasjon](./components/searchable-dropdown.md)

### Knapper og handlinger

#### @sb1/ffe-buttons-react

Reaktive knapp-komponenter i FFE for handlinger med korrekt visuell hierarki og tilgjengelighetsstøtte. Bruk disse for å kommunisere prioritet (Action, Primary, Secondary, Tertiary), navigasjon (BackButton), utvidelse/visning (Expand/InlineExpand), grupperte knapper og snarveier.

**Komponenter:** ActionButton, BackButton, ButtonGroup, ExpandButton, InlineExpandButton, ...

[Se detaljert dokumentasjon](./components/buttons.md)

### Layout og struktur

#### @sb1/ffe-accordion-react

Kollapsbare seksjoner for å organisere innhold som kan åpnes og lukkes. `Accordion` håndterer gruppeatferd, mens `AccordionItem` representerer hver seksjon.

**Komponenter:** Accordion, AccordionItem

[Se detaljert dokumentasjon](./components/accordion.md)

#### @sb1/ffe-cards-react

Kort-komponenter for presentasjon av innhold med visuelle elementer: tekstkort, ikon-kort, bilde/illustrasjon, grupperte kort og prikkede/stippled kort. `CardBase` er grunnlaget som spesialiserte kortvarianter bygger på.

**Komponenter:** CardBase, TextCard, IconCard, GroupCard, GroupCardElement, ...

[Se detaljert dokumentasjon](./components/cards.md)

#### @sb1/ffe-collapse-react

React-komponent for å vise og skjule innhold med animasjon.

**Komponenter:** Collapse

[Se detaljert dokumentasjon](./components/collapse.md)

#### @sb1/ffe-tabs-react

Fanekomponenter for å organisere innhold i seksjoner der brukeren kan bytte mellom faner uten å forlate siden. `TabGroup` styrer valgt fane og tilhørende panel, `Tab` representerer hver fane.

**Komponenter:** Tab, TabGroup

[Se detaljert dokumentasjon](./components/tabs.md)

### Tilbakemelding og meldinger

#### @sb1/ffe-context-message-react

**Komponenter:** ContextInfoMessage, ContextTipsMessage, ContextSuccessMessage, ContextErrorMessage

[Se detaljert dokumentasjon](./components/context-message.md)

#### @sb1/ffe-feedback-react

React-komponent for å samle inn tilbakemeldinger fra brukere med skjemaer.

**Komponenter:** Feedback

[Se detaljert dokumentasjon](./components/feedback.md)

#### @sb1/ffe-message-box-react

Foreldet pakke. Bruk `@sb1/ffe-messages-react` for system- og kontekstmeldinger, overskrifter, meldingslister og meldingsbokser. Se Messages-komponentdokumentasjonen for oppdaterte API-er og eksempler.

**Komponenter:** SuccessMessage, ErrorMessage, InfoMessage, TipsMessage, InfoMessageList, ...

[Se detaljert dokumentasjon](./components/message-box.md)

#### @sb1/ffe-messages-react

Samlede meldingskomponenter for å kommunisere status, tips og varsler. Bruk `SystemMessage` for global status, `ContextMessage` for kontekstuell inline tilbakemelding (med valgfri overskrift og lukkeknapp), og `MessageBox` for innrammede meldinger. Komponer `MessageHeader` og `MessageList`/`MessageListItem` for å strukturere innhold. Velg `type` (`info`, `success`, `tips`, `warning`, `error`) for å styre ikon, farge og tilgjengelighetsroller.

**Komponenter:** SystemMessage, ContextMessage, MessageBox, MessageHeader, MessageList, ...

[Se detaljert dokumentasjon](./components/messages.md)

#### @sb1/ffe-modals-react

Modal-komponenter for korte, fokuserte interaksjoner i webapplikasjoner. Bruk modaler når du trenger å fange brukerens oppmerksomhet for en enkel oppgave, bekreftelse eller informasjon. Ikke bruk modaler på mobil—bruk ark/sheets.

**Komponenter:** Modal, ModalHandle, ModalBlock

[Se detaljert dokumentasjon](./components/modals.md)

#### @sb1/ffe-system-message-react

**Komponenter:** SystemErrorMessage, SystemInfoMessage, SystemNewsMessage, SystemSuccessMessage

[Se detaljert dokumentasjon](./components/system-message.md)

### Navigasjon og kontroller

#### @sb1/ffe-chips-react

Chip-komponenten brukes for å lage interaktive, kompakte elementer med valgfrie ikoner.

**Komponenter:** Chip, ChipRemovable, ChipSelectable

[Se detaljert dokumentasjon](./components/chips.md)

#### @sb1/ffe-pagination-react

Pagineringskomponent for å navigere gjennom sider med innhold.

**Komponenter:** Pagination, usePagination

[Se detaljert dokumentasjon](./components/pagination.md)

#### @sb1/ffe-tags-react

Tag-komponenten brukes for merking og kategorisering av innhold med ulike farger og størrelser.

**Komponenter:** Tag

[Se detaljert dokumentasjon](./components/tags.md)

### Datavisning

#### @sb1/ffe-chart-donut-react

Ringdiagram-komponenten brukes for å visualisere data med sirkeldiagrammer.

**Komponenter:** ChartDonut

[Se detaljert dokumentasjon](./components/chart-donut.md)

#### @sb1/ffe-lists-react

Liste-komponenter for punktlister, nummererte lister og beskrivelseslister i FFE.

**Komponenter:** BulletList, BulletListItem, CheckList, CheckListItem, NumberedList, ...

[Se detaljert dokumentasjon](./components/lists.md)

#### @sb1/ffe-progressbar-react

Fremdriftsindikator for å vise fremdrift i en oppgave.

**Komponenter:** Progressbar

[Se detaljert dokumentasjon](./components/progressbar.md)

#### @sb1/ffe-spinner-react

Lasteindikator for å vise pågående prosesser.

**Komponenter:** Spinner

[Se detaljert dokumentasjon](./components/spinner.md)

#### @sb1/ffe-tables-react

Komponenter for tabeller med semantiske deler (`Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption`) og utvidbare rader (`TableRowExpandable`). Brukes for strukturert visning av data i rader og kolonner.

**Komponenter:** Table, TableBody, TableDataCell, TableFoot, TableHead, ...

[Se detaljert dokumentasjon](./components/tables.md)

### Visuelle elementer

#### @sb1/ffe-badge-react

Badge-komponenten brukes for å vise små merkelapper eller teller for notifikasjoner.

**Komponenter:** Badge

[Se detaljert dokumentasjon](./components/badge.md)

#### @sb1/ffe-icons-react

Ikonkomponenter for å vise vektorikoner konsistent i FFE. `Icon` støtter valg av ikonnavn, størrelse og dekorasjon, og integreres med ikonsettet i `@sb1/ffe-icons`.

[Se detaljert dokumentasjon](./components/icons.md)

#### @sb1/ffe-shapes-react

Dekorative form-komponenter for visuell interesse.

**Komponenter:** Wave

[Se detaljert dokumentasjon](./components/shapes.md)

#### @sb1/ffe-symbols-react

**Komponenter:** Symbol

[Se detaljert dokumentasjon](./components/symbols.md)

### Kjerne og verktøy

#### @sb1/ffe-core-react

React-komponenter for typografi og grunnleggende tekstmønstre i FFE. Bruk disse komponentene når du skal rendere overskrifter, avsnitt, lenker og annet tekstinnhold med riktig visuell stil, spacing og semantikk i tråd med SpareBank 1 sitt designsystem.

**Komponenter:** BodyText, DividerLine, EmphasizedText, Heading1, Heading2, ...

[Se detaljert dokumentasjon](./components/core.md)

## Installasjonsveiledning

### Installere komponenter

Når du installerer en FFE-komponent:

1. Installer React-pakken og alle dens FFE-avhengigheter sammen
2. Importer de nødvendige CSS-filene i hovedstilarket ditt
3. Importer alltid `@sb1/ffe-core/css/ffe.css` først (grunnstiler)

Eksempel:

```bash
npm install @sb1/ffe-buttons-react @sb1/ffe-buttons @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons
```

```css
@import '@sb1/ffe-core/css/ffe.css';
@import '@sb1/ffe-buttons/css/buttons.css';
@import '@sb1/ffe-icons/css/ffe-icons.css';
```

## Designprinsipper

### Tilgjengelighet
- Alle komponenter følger WCAG 2.1 AA-standarden
- Tastaturnavigasjon er fullt støttet
- Skjermleserkompatibilitet er testet
- Korrekte ARIA-attributter er inkludert

### Konsistens
- Komponenter følger SpareBank 1s visuelle designspråk
- Navnekonvensjoner er konsistente på tvers av systemet
- Atferdsmønstre er forutsigbare og standardiserte

### Beste praksis
- Bruk semantiske HTML-elementer
- Foretrekk komposisjon fremfor konfigurasjon
- Hold komponenter fokuserte og med ett formål
- Følg Reacts beste praksis og mønstre

## Vanlige mønstre

### Knapphierarki
- **ActionButton**: Høyeste prioritet call-to-action (én per side)
- **PrimaryButton**: Høy prioritet handlinger
- **SecondaryButton**: Medium prioritet handlinger
- **TertiaryButton**: Lav prioritet handlinger

### Skjemahåndtering
- Bruk kontrollerte komponenter for skjemainput
- Gi tydelig valideringsfeedback
- Vis feilmeldinger inline nær input-feltet
- Aldri deaktiver knapper; vis valideringsfeil i stedet

### Modal-bruk
- IKKE for mobilapplikasjoner (bruk sheets i stedet)
- Kun for korte, fokuserte interaksjoner
- Tilby alltid flere måter å lukke på
- Aldri bruk for flerstegsprosesser

## Hurtigreferanse

For detaljert informasjon om en spesifikk komponent:

1. Finn komponenten i listen over
2. Naviger til komponentdokumentasjonen i components/-mappen
3. Gjennomgå installasjon, bruk og retningslinjer

## Tilleggsressurser

- Offisiell dokumentasjon: https://design.sparebank1.no/
- GitHub-repository: https://github.com/SpareBank1/designsystem
- Komponenteksempler: https://sparebank1.github.io/designsystem
