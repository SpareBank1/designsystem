# Forståelse av FFE Grid Systemet

Denne filen oppsummerer hvordan `@sb1/ffe-grid` og `@sb1/ffe-grid-react` fungerer, basert på en gjennomgang av kildekoden.

## Grunnleggende Struktur

FFE Grid er et CSS Grid-basert layoutsystem. Hovedkomponentene i React er:

*   `<Grid>`: En valgfri omslagskomponent som kan brukes til å sette padding og bakgrunnsfarge for hele grid-området.
*   `<GridRow>`: Representerer en rad i gridet. Denne komponenten setter `display: grid` og definerer standard antall kolonner.
*   `<GridCol>`: Representerer en kolonne innenfor en `<GridRow>`. Denne komponenten tar imot props for å definere bredde og oppførsel på ulike skjermstørrelser.

## Kolonnesystem

*   **12 Kolonner:** FFE Grid er et **12-kolonners** system. Dette betyr at bredden på en rad er delt inn i 12 like deler.
*   **CSS Grid `grid-template-columns`:** I `ffe-grid.less` defineres dette med `grid-template-columns: repeat(12, 1fr);` for `.ffe-grid__row`.

## Kolonnebredder og Responsivitet

Kolonnebredder styres av CSS-klasser som genereres av en Less-miksin (`create-column`). Disse klassene følger mønsteret `.ffe-grid__col--{breakpoint}-{antall}`.

*   **`{breakpoint}`:** Definerer skjermstørrelsen klassen gjelder for (f.eks. `sm`, `md`, `lg`).
*   **`{antall}`:** Definerer hvor mange av de 12 tilgjengelige kolonnene elementet skal spenne over. For eksempel:
    *   `.ffe-grid__col--lg-2` betyr at elementet vil spenne over 2 av 12 kolonner på store skjermer (skjermbredde definert av `@breakpoint-lg`).
    *   `.ffe-grid__col--md-3` betyr at elementet vil spenne over 3 av 12 kolonner på medium skjermer (skjermbredde definert av `@breakpoint-md`).
*   **Styling:** Klassen `.ffe-grid__col--{size}-X` bruker CSS-egenskapen `grid-column: auto / span X;` for å oppnå ønsket bredde.

## Eksempel fra Sbanky Sidebar

Sidebaren i Sbanky-eksempelappen bruker følgende klasser:
`<div class="ffe-grid__col hidden md:block ffe-grid__col--lg-2 ffe-grid__col--md-3">`

Dette betyr:
*   På store skjermer (`lg`): Sidebaren tar 2/12 (eller 1/6) av bredden.
*   På medium skjermer (`md`): Sidebaren tar 3/12 (eller 1/4) av bredden.
*   På små skjermer: Sidebaren er skjult (`hidden md:block`).

## Justering av Bredde

For å endre bredden på et element, må man justere tallet i kolonneklassen (f.eks. endre `ffe-grid__col--lg-2` til `ffe-grid__col--lg-3` for å gjøre den bredere på store skjermer).

## Andre Egenskaper

*   **Offset:** Det finnes også klasser for å forskyve kolonner, f.eks. `.ffe-grid__col--{size}-offset-{antall}`.
*   **Gap:** `<GridRow>` har en standard `gap` mellom kolonner, som kan overstyres med modifikatorklasser på `<Grid>`-komponenten (f.eks. `ffe-grid--gap-none`, `ffe-grid--gap-lg`).
*   **Padding:** `<GridRow>` har også standard padding, som kan justeres med modifikatorklasser. 