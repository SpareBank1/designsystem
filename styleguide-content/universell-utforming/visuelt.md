Løsninger bør være lette å forstå, uten behov for forkunnskaper eller forklaring.

### Intuitive brukergrensesnitt

Fokus på brukeropplevelse går hånd i hånd med universell utforming, og løsninger bør i størst mulig grad være enkle å forstå. Løsninger som er utformet ved hjelp av etablerte mønstre og konvensjoner kan være intuitive selv om de er komplekse.

### Kontrast

Tekst må ha tilstrekkelig kontrast mot bakgrunn for å gi god nok lesbarhet. WCAG 2.0, nivå AA krever kontrastforhold på 4.5:1 for stor tekst og 3.0:1 for liten tekst. Kontrast kan sjekkes med en rekke verktøy, for eksempel [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

Vær også bevisst på kontrastforholdene i løsninger designet for dark mode.

### Klikkflate

Klikkbare elementer bør være lette å treffe, blant annet for brukere med motoriske utfordringer og brukere som benytter seg av musemulering eller andre input-hjelpemidler.

-   Klikkbare elementer bør ha tilstrekkelig størrelse, ikke minst på mobilskjermer
-   Avstanden mellom klikkbare elementer bør være stor nok til at faren for å klikke feil reduseres
-   Radioknapper og sjekkbokser bør være tilknyttet et klikkbart `<label>`

### Visuell feedback

Visuell feedback hjelper brukere å forstå hvordan brukergrensesnittet reagerer på deres handlinger.

-   `:hover`
-   `:active`
-   `:focus`

### Skjermforstørring

Skjermforstørrere er hjelpemidler for svaksynte, som forstørrer skjermbildet i forskjellig grad. Løsningene våre bør kunne forstørres uten at det hindrer bruk.

-   Vær bevisst på hvordan whitespace påvirker opplevelsen i forstørret tilstand
-   Vær obs på avstanden mellom elementer som henger sammen, for eksempel `<dt>` og `<dd>` i description list

### Tekstforstørring

Brukere skal kunne forstørre tekst inntil 200%, uten at det endrer grensesnittet på en slik måte at det hindrer bruk.

-   Vær obs på overflow
-   Unngå hardkodet høyde på elementer der forstørret innhold tar opp mer plass enn containeren

<div class="sb1ds-do-dont">
    <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Eksempel</h4>
    <p class="sb1ds-do-dont__description ffe-small-text">Hardkodet høyde kan by på problemer ved tekstforstørring, spesielt i kombinasjon med <code>overflow: hidden</code>.</p>
    <div class="sb1ds-do-dont__example">
        <div class="ffe-card-base ffe-text-card" style="max-width: 300px; font-size: 125%; margin-bottom: 0;"><p class="ffe-card-component ffe-card-component--card-name">Kortnavn</p><p class="ffe-card-component ffe-card-component--title ffe-card-component--title--overflow-ellipsis">Tittel</p><span class="ffe-card-component ffe-card-component--subtext">Subtext er grå</span><p class="ffe-card-component ffe-card-component--text" style="height: 115px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
    </div>
</div>
