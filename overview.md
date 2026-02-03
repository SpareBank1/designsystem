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

Kombinasjonsboks med autofullføring for bankkontoer:

**Komponenter:** AccountSelector, AccountSelectorMulti

[Se detaljert dokumentasjon](./components/account-selector.md)

#### @sb1/ffe-datepicker-react

Komponenter for dato-inntasting og kalender. `Datepicker` kombinerer input-felt med kalender, `DateInput` er kun input-feltet, og `Calendar` er en frittstående kalenderkomponent.

**Komponenter:** Datepicker, getDatepickerByLabelText, DateInput, Calendar

[Se detaljert dokumentasjon](./components/datepicker.md)

#### @sb1/ffe-dropdown-react

Nedtrekksliste for valg av ett alternativ fra en liste. Wrapper rundt HTML `<select>` som videresender alle standard attributter.

**Komponenter:** Dropdown

[Se detaljert dokumentasjon](./components/dropdown.md)

#### @sb1/ffe-file-upload-react

Filopplastingskomponent med dropzone, validering og filliste. Filer vises i tre tilstander:

**Komponenter:** FileUpload, getFileContent, getUniqueFileName

[Se detaljert dokumentasjon](./components/file-upload.md)

#### @sb1/ffe-form-react

Skjemaelementer for input, valg og meldinger. Bygger tilgjengelige skjemaer med etiketter, hjelpetekster og validering.

**Komponenter:** ErrorFieldMessage, InfoFieldMessage, SuccessFieldMessage, Checkbox, Input, ...

[Se detaljert dokumentasjon](./components/form.md)

#### @sb1/ffe-searchable-dropdown-react

Søkbar nedtrekksliste for store eller dynamiske lister. Tilgjengelig som enkeltvalg (`SearchableDropdown`) og flervalg (`SearchableDropdownMultiSelect`).

**Komponenter:** SearchableDropdown, SearchableDropdownMultiSelect

[Se detaljert dokumentasjon](./components/searchable-dropdown.md)

### Knapper og handlinger

#### @sb1/ffe-buttons-react

Knapp-komponenter for handlinger med visuell hierarki og tilgjengelighet. Bruk for prioritet (Action > Primary > Secondary > Tertiary), navigasjon (BackButton), utvidelse (Expand/InlineExpand), gruppering og snarveier.

**Komponenter:** ActionButton, BackButton, ButtonGroup, ExpandButton, InlineExpandButton, ...

[Se detaljert dokumentasjon](./components/buttons.md)

### Layout og struktur

#### @sb1/ffe-accordion-react

Kollapsbare seksjoner for å organisere innhold. `Accordion` er wrapper-komponenten, `AccordionItem` representerer hver seksjon.

**Komponenter:** Accordion, AccordionItem

[Se detaljert dokumentasjon](./components/accordion.md)

#### @sb1/ffe-cards-react

Kort-komponenter for presentasjon av innhold. Alle bruker render prop-monster der innholdskomponenter (`Title`, `Text`, `Subtext`, `CardName`, `CardAction`) gis som funksjonargumenter.

**Komponenter:** CardBase, TextCard, IconCard, GroupCard, GroupCardElement, ...

[Se detaljert dokumentasjon](./components/cards.md)

#### @sb1/ffe-collapse-react

React-komponent for å vise og skjule innhold med animasjon. Bruker CSS grid-animasjon for jevn overgang mellom åpent og lukket tilstand.

**Komponenter:** Collapse

[Se detaljert dokumentasjon](./components/collapse.md)

#### @sb1/ffe-tabs-react

Fanekomponenter for innhold i seksjoner. `TabGroup` styrer layout og tastaturnavigasjon, `Tab` representerer hver fane.

**Komponenter:** Tab, TabGroup

[Se detaljert dokumentasjon](./components/tabs.md)

### Tilbakemelding og meldinger

#### @sb1/ffe-context-message-react

React-komponenter for kontekstuelle meldinger (info, tips, suksess, feil).

**Komponenter:** ContextInfoMessage, ContextTipsMessage, ContextSuccessMessage, ContextErrorMessage

[Se detaljert dokumentasjon](./components/context-message.md)

#### @sb1/ffe-feedback-react

React-komponent for tilbakemeldinger. Viser thumbs up/down-velger, utvides til tekstfelt etter klikk, og viser bekreftelse ved innsending.

**Komponenter:** Feedback

[Se detaljert dokumentasjon](./components/feedback.md)

#### @sb1/ffe-message-box-react

Foreldet pakke. Bruk `@sb1/ffe-messages-react` i stedet.

**Komponenter:** SuccessMessage, ErrorMessage, InfoMessage, TipsMessage, InfoMessageList, ...

[Se detaljert dokumentasjon](./components/message-box.md)

#### @sb1/ffe-messages-react

React-komponenter for meldinger som kommuniserer status, tips og varsler til brukeren.

**Komponenter:** SystemMessage, ContextMessage, MessageBox, MessageHeader, MessageList, ...

[Se detaljert dokumentasjon](./components/messages.md)

#### @sb1/ffe-modals-react

Modal-komponenter for korte, fokuserte interaksjoner. Bruk for enkle oppgaver, bekreftelser eller informasjon. Ikke bruk på mobil - bruk ark/sheets.

**Komponenter:** Modal, ModalHandle, ModalBlock

[Se detaljert dokumentasjon](./components/modals.md)

#### @sb1/ffe-system-message-react

Systemmelding-komponenter for feil, info, suksess og nyheter.

**Komponenter:** SystemErrorMessage, SystemInfoMessage, SystemNewsMessage, SystemSuccessMessage

[Se detaljert dokumentasjon](./components/system-message.md)

### Navigasjon og kontroller

#### @sb1/ffe-chips-react

Chip-komponenter i tre varianter: `Chip` (standard), `ChipRemovable` (med fjern-knapp) og `ChipSelectable` (kan velges/avvelges).

**Komponenter:** Chip, ChipRemovable, ChipSelectable

[Se detaljert dokumentasjon](./components/chips.md)

#### @sb1/ffe-pagination-react

Pagineringskomponent for navigering gjennom sider med innhold.

**Komponenter:** Pagination, usePagination

[Se detaljert dokumentasjon](./components/pagination.md)

#### @sb1/ffe-tags-react

Tag-komponenten brukes for merking og kategorisering av innhold.

**Komponenter:** Tag

[Se detaljert dokumentasjon](./components/tags.md)

### Datavisning

#### @sb1/ffe-chart-donut-react

Ringdiagram som viser prosentvis fordeling mellom to verdier. Viser alltid to segmenter: `percentage` (hoyre) og `100 - percentage` (venstre).

**Komponenter:** ChartDonut

[Se detaljert dokumentasjon](./components/chart-donut.md)

#### @sb1/ffe-lists-react

Liste-komponenter for punktlister, nummererte lister, sjekklister og beskrivelseslister.

**Komponenter:** BulletList, BulletListItem, CheckList, CheckListItem, NumberedList, ...

[Se detaljert dokumentasjon](./components/lists.md)

#### @sb1/ffe-progressbar-react

Fremdriftsindikator som wrapper det native HTML `<progress>`-elementet med SpareBank 1-styling.

**Komponenter:** Progressbar

[Se detaljert dokumentasjon](./components/progressbar.md)

#### @sb1/ffe-spinner-react

Lasteindikator for pågående prosesser.

**Komponenter:** Spinner

[Se detaljert dokumentasjon](./components/spinner.md)

#### @sb1/ffe-tables-react

Tabellkomponenter med responsiv visning, sortering og utvidbare rader. Inkluderer `Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableDataCell`, `TableFoot`, `TableCaption` og `TableRowExpandable`.

**Komponenter:** Table, TableBody, TableDataCell, TableFoot, TableHead, ...

[Se detaljert dokumentasjon](./components/tables.md)

### Visuelle elementer

#### @sb1/ffe-badge-react

Badge viser små merkelapper eller tellere for notifikasjoner. Rendrer et `<span>`-element med CSS-klassen `ffe-badge`.

**Komponenter:** Badge

[Se detaljert dokumentasjon](./components/badge.md)

#### @sb1/ffe-icons-react

Ikonkomponenter som bruker CSS mask-image for SVG-ikoner som kan farges med CSS. Sett `ariaLabel` for meningsbærende ikoner, utelat den for dekorative ikoner (skjules automatisk).

[Se detaljert dokumentasjon](./components/icons.md)

#### @sb1/ffe-shapes-react

Dekorative form-komponenter. Inneholder `Wave` for bølgeformer som visuell overgang mellom seksjoner.

**Komponenter:** Wave

[Se detaljert dokumentasjon](./components/shapes.md)

#### @sb1/ffe-symbols-react

**Komponenter:** Symbol

[Se detaljert dokumentasjon](./components/symbols.md)

### Kjerne og verktøy

#### @sb1/ffe-core-react

React-komponenter for typografi og grunnleggende tekstmønstre. Bruk for overskrifter, avsnitt, lenker og tekstinnhold med riktig stil og semantikk.

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

- Offisiell dokumentasjon: https://sparebank1.github.io/designsystem/
- GitHub-repository: https://github.com/SpareBank1/designsystem
- Komponenteksempler: https://sparebank1.github.io/designsystem
