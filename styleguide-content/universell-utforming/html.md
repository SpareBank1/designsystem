Semantisk HTML hjelper både mennesker og maskiner med å forstå strukturen i websider.

### Bruk tagger som beskriver innhold

De aller fleste HTML-tagger har en semantisk betydning som beskriver dataene de inneholder. Dette gjør det lettere å tolke både struktur og innhold for skjermlesere og andre hjelpemidler.

#### Eksempler

-   `<nav>` - Navigasjon
-   `<address>` - Kontaktinformasjon
-   `<main>` - Hovedinnhold på en side

MDN har en [fullstendig liste over HTML-elementer og hvordan de brukes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Bruk ikke-semantiske elementer kun til layout, eller beskriv de med ARIA-attributter

`<div>` og `<span>` er HTML-elementer som ikke har noen semantisk betydning. Derfor egner de seg til bruk som containere for andre HTML-elementer, men de kan også brukes som innholdscontainere i kombinasjon med ARIA-attributter som beskriver innholdet.

### Bruk ARIA-attributter

WAI-ARIA tilbyr en rekke attributter som kan brukes for å gjøre innhold mer tilgjengelig. For eksempel:

-   Widgeter som ikke har tilsvarende HTML-elementer
    -   `<div role=”tablist”>`
-   Tilstand/state
    -   `aria-checked`
    -   `aria-disabled`
    -   `aria-expanded`
-   Skjema
    -   `aria-required`
    -   `aria-errormessage`

#### Bruk semantiske HTML-tagger i stedet, om mulig

En del ARIA-attributter har samme betydning som semantiske HTML-elementer. I slike tilfeller bør man velge HTML-elementene. For eksempel:

-   `<main>` fremfor `<div role="main">`
-   `<button>` fremfor `<input role="button">`

[ARIA er grundig dokumentert hos MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).

### Vær obs på rekkefølgen på overskrifter

-   `<h1>` er sidetittel - bruk kun én `<h1>` på hver side
-   `<h2>` - `<h6>` er de resterende nivåene
-   Unngå å hoppe over nivåer

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-6">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Gjør</h4>
                <p class="sb1ds-do-dont__description ffe-small-text">Ranger overskrifter i riktig rekkefølge</p>
                <div class="sb1ds-do-dont__example">
                    <pre><code>&lt;h1&gt;Sidetittel&lt;/h1&gt;
&nbsp;&nbsp;&lt;h2&gt;Niv&aring; 2&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;Niv&aring; 3&lt;/h3&gt;
&nbsp;&nbsp;&lt;h2&gt;Niv&aring; 2&lt;/h2&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;Niv&aring; 3&lt;/h3&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3&gt;Niv&aring; 3&lt;/h3&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;Niv&aring; 4&lt;/h4&gt;</code></pre>
                </div>
            </div>
        </div>
        <div class="sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-6">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Unngå</h4>
                <p class="sb1ds-do-dont__description ffe-small-text">Unngå å hoppe over overskriftsnivåer</p>
                <div class="sb1ds-do-dont__example">
                    <pre><code>&lt;h1&gt;Sidetittel&lt;/h1&gt;
&nbsp;&nbsp;&lt;h3&gt;Niv&aring; 3&lt;/h3&gt;
&nbsp;&nbsp;&lt;h3&gt;Niv&aring; 3&lt;/h3&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5&gt;Niv&aring; 5&lt;/h5&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5&gt;Niv&aring; 5&lt;/h5&gt;
&nbsp;&nbsp;&lt;h3&gt;Niv&aring; 3&lt;/h3&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6&gt;Niv&aring; 6&lt;/h6&gt;</code></pre>
                </div>
            </div>
        </div>
    </div>
</div>

### Lenker eller knapper?

-   Knapper utfører en funksjon
-   Lenker tar deg videre til en annen side

### Bilder

-   Bruk en beskrivende og informativ alt-tekst
-   Bilder som brukes ren dekorasjon kan ha tomt alt-attributtt
-   Unngå tekst i bilder
