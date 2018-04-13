FFE er en samling av gjenbrukbare komponenter basert på Less og React for å bygge nettsider og brukergrensesnitt. Komponentbiblioteket sikrer konsistent stil og oppførsel i prototyper og produksjonsarbeid.

Komponentene er publisert i forskjellige [pakker på npm under @sb1-organisasjonen](https://www.npmjs.com/org/sb1). Kildekoden til pakkene ligger på [Github](https://github.com/SpareBank1/designsystem/tree/develop/packages) sammen med `README`s med mer detaljerte instruksjoner for hvordan bruke pakkene i prosjektet ditt.

Alle vil trenge [@sb1/ffe-core](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-core) og [@sb1/ffe-webfonts](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-webfonts), og de fleste trenger pakkene for [grid](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-grid), [knapper](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-buttons),  og [skjema](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-form) (eventuelt med React-tvillingen sin). Bruk verktøyet under for å lage en installasjonskommando som passer deg.

Less-pakker brukes som oftes ved å ha en egen Less-fil i ditt prosjekt med et `@import`-statement for hver pakke, som [her for `@sb1/ffe-buttons`](https://github.com/SpareBank1/designsystem/tree/develop/packages/ffe-buttons#usage). React-pakker brukes på lik linje med enhver JavaScript-pakke. Se [Komponentbiblioteket](/styleguidist/index.html) for å se et eksempel på en `import`-statement for den komponenten du er interessert.

<h3 class="ffe-h3">
    Pakkeplukker
</h3>

Pakkeplukkeren dekker de mest brukte pakkene. Se [Komponentbiblioteket](/styleguidist/index.html) for en fullstendig oversikt over hva som finnes og hvilke pakker de er publisert i.

<fieldset
    id="npm-i-builder-packages"
    class="ffe-fieldset"
>
    <legend class="ffe-form-label">
        Hva trenger du?
    </legend>
    <input
        class="ffe-hidden-checkbox"
        id="npm-i-builder-bundle-core"
        aria-invalid="false"
        value="core"
        type="checkbox"
        checked
    />
    <label
        class="ffe-checkbox ffe-checkbox--inline"
        for="npm-i-builder-bundle-core"
    >
        Kjernen
    </label>
    <input
        class="ffe-hidden-checkbox"
        id="npm-i-builder-bundle-grid"
        aria-invalid="false"
        value="grid"
        type="checkbox"
        checked
    />
    <label
        class="ffe-checkbox ffe-checkbox--inline"
        for="npm-i-builder-bundle-grid"
    >
        Grid
    </label>
    <input
        class="ffe-hidden-checkbox"
        id="npm-i-builder-bundle-buttons"
        aria-invalid="false"
        value="buttons"
        type="checkbox"
        checked
    />
    <label
        class="ffe-checkbox ffe-checkbox--inline"
        for="npm-i-builder-bundle-buttons"
    >
        Knapper
    </label>
    <input
        class="ffe-hidden-checkbox"
        id="npm-i-builder-bundle-form"
        aria-invalid="false"
        value="form"
        type="checkbox"
        checked
    />
    <label
        class="ffe-checkbox ffe-checkbox--inline"
        for="npm-i-builder-bundle-form"
    >
        Skjema
    </label>
    <input
        class="ffe-hidden-checkbox"
        id="npm-i-builder-bundle-icons"
        aria-invalid="false"
        value="icons"
        type="checkbox"
    />
    <label
        class="ffe-checkbox ffe-checkbox--inline"
        for="npm-i-builder-bundle-icons"
    >
        Ikoner
    </label>
    <input
        class="ffe-hidden-checkbox"
        id="npm-i-builder-bundle-tables"
        aria-invalid="false"
        value="tables"
        type="checkbox"
    />
    <label
        class="ffe-checkbox ffe-checkbox--inline"
        for="npm-i-builder-bundle-tables"
    >
        Tabeller
    </label>
</fieldset>

<fieldset
    id="npm-i-builder-react"
    class="ffe-fieldset ffe-input-group"
>
    <legend class="ffe-form-label">
        Bruker du React?
    </legend>
    <div class="ffe-small-text">
        React er ikke et krav, men vi har en del ferdige komponenter som du kan bruke om prosjektet ditt bruker React
    </div>
    <input
        class="ffe-radio-input"
        id="npm-i-builder-react-yes"
        value="true"
        name="npm-i-builder-react"
        type="radio"
        checked
    >
    <label
        for="npm-i-builder-react-yes"
        class="ffe-radio-switch"
    >
        Ja
    </label>
    <input
        class="ffe-radio-input"
        id="npm-i-builder-react-no"
        value="false"
        name="npm-i-builder-react"
        type="radio"
    >
    <label
        for="npm-i-builder-react-no"
        class="ffe-radio-switch"
    >
        Nei
    </label>
</fieldset>

<span class="ffe-form-label ffe-form-label--block">
    Kommando for å installere avhengigheter
</span>

<div class="sb1ds-npm-i-builder-output">
    <code id="sb1ds-npm-i-builder-output"></code>
</div>
