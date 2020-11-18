Tydelig og forståelig språk understøtter intuitive bruksmønstre, og hjelper de med lave leseferdigheter å forstå innhold.

### Bruk informativ og beskrivende tekst i knapper og lenker

Knapper og lenker bør ha tekst som gjør det enkelt å oppfatte hvilken handling man utfører, eller hvor lenken peker.

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-6">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Gjør</h4>
                <p class="sb1ds-do-dont__description ffe-small-text">Informativ og beskrivende tekst i knapper</p>
                <div class="sb1ds-do-dont__example">
                    <button class="ffe-button ffe-button--primary">
                        <span class="ffe-button__label">Gå videre til betaling</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-6">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Unngå</h4>
                <p class="sb1ds-do-dont__description ffe-small-text">Generisk, ukonkret tekst</p>
                <div class="sb1ds-do-dont__example">
                    <button class="ffe-button ffe-button--primary">
                        <span class="ffe-button__label">Klikk her</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-6">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Gjør</h4>
                <p class="sb1ds-do-dont__description ffe-small-text">Informativ og beskrivende tekst i lenker</p>
                <div class="sb1ds-do-dont__example">
                    <a href="#">Hvilket fond er best for meg?</a>
                </div>
            </div>
        </div>
        <div class="sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-6">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Unngå</h4>
                <p class="sb1ds-do-dont__description ffe-small-text">Generisk, ukonkret tekst</p>
                <div class="sb1ds-do-dont__example">
                    <a href="#">Les mer</a>
                </div>
            </div>
        </div>
    </div>
</div>

### Bruk informative og beskrivende overskrifter

Mange brukere navigerer fra overskrift til overskrift med skjermlesere og tastaturnavigering.

-   Overskrifter bør beskrive innholdet de representerer
-   Vær obs på overskriftsnivå - `<h1>` er sidetittel

### Ta semantisk HTML til hjelp

Semantisk HTML tilbyr ekstra informasjon som kan bidra til å gjøre innhold lettere å forstå.

<div class="sb1ds-do-dont">
    <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Eksempel</h4>
    <p class="sb1ds-do-dont__description ffe-small-text"><code>&lt;abbr&gt;</code> brukes for å beskrive forkortelser.</p>
    <div class="sb1ds-do-dont__example">
        <code>&lt;abbr title=&quot;November&quot;&gt;Nov&lt;/abbr&gt;</code>
    </div>
</div>

### Tilby alternativer for ikke-tekstlig innhold

Noen brukere kan ikke se bilder eller høre lyd. Derfor er det viktig å tilby alternativer til innhold som ikke er ren tekst.

-   Videoer bør ha undertekst
-   Bilder bør ha en beskrivende og informativ alt-tekst
-   Unngå tekst i bilder - Dette vil ikke leses ikke opp av skjermlesere
