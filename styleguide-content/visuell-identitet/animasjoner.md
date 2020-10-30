### Hvorfor animerer vi?

Funksjonelle animasjoner er nyttige virkemidler for å kommunisere respons fra interface. Subtile bevegelser kan være veldig hjelpsomme i å redusere kognitiv belastning ved å tydeliggjøre hvordan et interface oppfører seg og endrer seg ved interaksjon, og hvordan man som bruker må forholde seg til forskjellige elementer.

Dekorative animasjoner kan i tillegg bidra til å skape levende produkter og grensesnitt med personlighet, og på den måten underbygge merkevare, profil og visuell identitet.

### Når bruker vi funksjonelle animasjoner?

-   Visuell feedback på interaksjoner
-   Kommunisere hvordan systemet responderer på brukerhandlinger
-   Indikere at elementer trenger oppmerksomhet
-   Visuelle hint om hvor og hvordan bruker må forholde seg til elementer

### Når bruker vi dekorative animasjoner?

-   Bevegelse i illustrasjoner/ikoner som stemningsskapende middel
-   Må ikke konkurrere med interaksjonselementer

### Hvordan designer vi funksjonelle animasjoner?

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12">
            <ul>
                <li>Fysiske lover - elementer oppfører seg som om de har masse</li>
                <li>Naturlige bevegelser</li>
                <li>Easing</li>
                <li>Akselerasjon/deselerasjon</li>
            </ul>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-easing sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Easing</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <div class="sb1ds-easing__ease-object">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-easing sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Lineær</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <div class="sb1ds-easing__ease-object">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12">
            <ul>
                <li>Tyngdekraft</li>
                <li>Bevegelse langs kurver fremfor linjer</li>
                <li>Interaksjonselementer som utgangspunkt for bevegelser</li>
            </ul>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-arc sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Kurve</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <div class="sb1ds-arc__container">
                                <div class="sb1ds-arc__arc-object">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-arc sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Linje</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <div class="sb1ds-arc__container">
                                <div class="sb1ds-arc__arc-object">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12">
            <ul>
                <li>Timing</li>
                <li>Raske bevegelser</li>
                <li>Unngå venting på animasjoner</li>
            </ul>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-timing sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">0.2s</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <div class="sb1ds-timing__object">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-timing sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">1.0s</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <div class="sb1ds-timing__object">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12">
            <ul>
                <li>Ease-in-out-back</li>
                <li>Overlappende kurve med negativ ease når elementer transformeres eller flyttes</li>
            </ul>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-timing sb1ds-timing--overlap sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">ease-in-out-back</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <div class="sb1ds-timing__object">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-timing sb1ds-timing--overlap sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">ease</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <div class="sb1ds-timing__object">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12">
            <ul>
                <li>Koreografi</li>
                <li>Sekvensielle bevegelser når mange elementer skal animeres samtidig</li>
            </ul>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-sequence sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Sekvens</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <ul class="sb1ds-menuthing">
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-sequence sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Samtidig</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <ul class="sb1ds-menuthing">
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12">
            <ul>
                <li>Subtilt</li>
                <li>Animasjoner som middel, ikke mål</li>
            </ul>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-subtle sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Subtilt</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <ul class="sb1ds-menuthing">
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-subtle sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Nja</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <ul class="sb1ds-menuthing-subtle">
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12">
            <ul>
                <li>Bevegelse i X- og Y-aksen - ikke Z (3D)</li>
            </ul>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-xy sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Ja</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-xy sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Nei</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--inline sb1ds-dos-donts">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12">
            <ul>
                <li>Unngå å flytte på elementer under transisjon</li>
            </ul>
        </div>
    </div>
    <div class="ffe-grid__row">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--do">Ja</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg> <span class="sb1ds-show">Expand</span><span class="sb1ds-hide">Collapse</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-relocate sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-5">
            <div class="sb1ds-do-dont">
                <h4 class="sb1ds-do-dont__header sb1ds-do-dont__header--dont">Nei</h4>
                <div class="sb1ds-do-dont__example">
                    <div class="sb1ds-svgcontainer sb1ds-svgcontainer--paused">
                        <div>
                            <span class="sb1ds-show">Expand</span><span class="sb1ds-hide">Collapse</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Hvordan designer vi dekorative animasjoner?

-   Naturlige bevegelser
-   Koreografi
-   Repeterende bevegelser/loop

### Felles variabler for utviklere av funksjonelle animasjoner

For å sikre konsistens bruker vi felles variabler for timing og lengde på transitions.

<hr class="ffe-divider-line">

<dl class="ffe-description-list ffe-description-list--md">
    <dt>@ffe-transition-duration</dt>
    <dd>Default lengde for transitions på mindre elementer</dd>
    <dt>@ffe-ease-in-out-back</dt>
    <dd>Default timing-funksjon for å transformere eller flytte mindre elementer (rotate, translate, etc)</dd>
    <dt>@ffe-ease</dt>
    <dd>Timing-funksjon for transitions som ikke involverer plassering eller endring av form (color, opacity, etc)</dd>
</dl>

<hr class="ffe-divider-line">

Variablene brukes i LESS-filer som erstatning for `transition-duration` og `transition-timing-function`.

<code>
// Less

transition: all @ffe-transition-duration @ffe-ease-in-out-back;

// CSS output

transition: all .2s cubic-bezier(.46, -0.265, .48, 1.38);
</code>

### Eksempler på funksjonelle animasjoner

<div class="ffe-grid ffe-grid--inline ffe-grid--no-top-padding">
    <div class="ffe-grid__row sb1ds-transition-examples">
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-transition sb1ds-good">
            <h4 class="sb1ds-transition-example__header-do">0.2s</h4>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-transition sb1ds-bad">
            <h4 class="sb1ds-transition-example__header-dont">1.0s</h4>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-transition sb1ds-none">
            <h4 class="sb1ds-transition-example__header-none">Ingen animasjon</h4>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-bgcolor sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <button class="ffe-button ffe-button--action">
                    <span class="ffe-button__label">
                        Bakgrunnsfarge
                    </span>
                </button>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-bgcolor sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <button class="ffe-button ffe-button--action">
                    <span class="ffe-button__label">
                        Bakgrunnsfarge
                    </span>
                </button>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-bgcolor sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <button class="ffe-button ffe-button--action">
                    <span class="ffe-button__label">
                        Bakgrunnsfarge
                    </span>
                </button>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-resize sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <button class="ffe-button ffe-button--primary">
                    <span class="ffe-button__label">
                        Resize
                    </span>
                </button>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-resize sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <button class="ffe-button ffe-button--primary">
                    <span class="ffe-button__label">
                        Resize
                    </span>
                </button>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-resize sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <button class="ffe-button ffe-button--primary">
                    <span class="ffe-button__label">
                        Resize
                    </span>
                </button>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-border sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <input
                    class="ffe-input-field ffe-input-field--inline"
                    id="anim-input-example-good"
                    placeholder="Border"
                >
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-border sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <input
                    class="ffe-input-field ffe-input-field--inline"
                    id="anim-input-example-bad"
                    placeholder="Border"
                >
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center border sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <input
                    class="ffe-input-field ffe-input-field--inline"
                    id="anim-input-example-none"
                    placeholder="Border"
                >
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-check sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <input class="ffe-hidden-checkbox"
                        type="checkbox"
                        id="c1">
                <label class="ffe-checkbox" for="c1">Checkbox</label>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-check sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <input class="ffe-hidden-checkbox"
                        type="checkbox"
                        id="c2">
                <label class="ffe-checkbox" for="c2">Checkbox</label>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-check sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <input class="ffe-hidden-checkbox"
                        type="checkbox"
                        id="c3">
                <label class="ffe-checkbox" for="c3">Checkbox</label>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-radio sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <fieldset class="ffe-fieldset">
                    <input
                        class="ffe-radio-input"
                        type="radio"
                        name="radio-good"
                        value="true"
                        id="radio-example-good-1"
                    >
                    <label class="ffe-radio-button ffe-radio-button--inline" for="radio-example-good-1">
                        Ja
                    </label>
                    <input
                        class="ffe-radio-input"
                        type="radio"
                        name="radio-good"
                        value="false"
                        id="radio-example-good-2"
                    >
                    <label class="ffe-radio-button ffe-radio-button--inline" for="radio-example-good-2">
                        Nei
                    </label>
                </fieldset>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-radio sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <fieldset class="ffe-fieldset">
                    <input
                        class="ffe-radio-input"
                        type="radio"
                        name="radio-bad"
                        value="true"
                        id="radio-example-bad-1"
                    >
                    <label class="ffe-radio-button ffe-radio-button--inline" for="radio-example-bad-1">
                        Ja
                    </label>
                    <input
                        class="ffe-radio-input"
                        type="radio"
                        name="radio-bad"
                        value="false"
                        id="radio-example-bad-2"
                    >
                    <label class="ffe-radio-button ffe-radio-button--inline" for="radio-example-bad-2">
                        Nei
                    </label>
                </fieldset>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-radio sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <fieldset class="ffe-fieldset">
                    <input
                        class="ffe-radio-input"
                        type="radio"
                        name="radio-none"
                        value="true"
                        id="radio-example-none-1"
                    >
                    <label class="ffe-radio-button ffe-radio-button--inline" for="radio-example-none-1">
                        Ja
                    </label>
                    <input
                        class="ffe-radio-input"
                        type="radio"
                        name="radio-none"
                        value="false"
                        id="radio-example-none-2"
                    >
                    <label class="ffe-radio-button ffe-radio-button--inline" for="radio-example-none-2">
                        Nei
                    </label>
                </fieldset>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-textarea-expand sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <textarea
                    class="ffe-textarea sb1ds-textarea-expandable"
                    id="anim-textarea-example-good"
                    placeholder="Expand"
                ></textarea>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-textarea-expand sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <textarea
                    class="ffe-textarea sb1ds-textarea-expandable"
                    id="anim-textarea-example-bad"
                    placeholder="Expand"
                ></textarea>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-textarea-expand sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <textarea
                    class="ffe-textarea sb1ds-textarea-expandable"
                    id="anim-textarea-example-none"
                    placeholder="Expand"
                ></textarea>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-move-right sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-move-right sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-move-right sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-good">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m168.56,35c-7.3569-0.35717-8.8347,7.4883-8.1875,13.185-0.3441,2.6316,1.4556,7.407-2.8625,6.0646-29.975,0.08599-59.967-0.17224-89.931,0.12955-6.4615,1.4675-4.7348,8.8085-4.9561,13.691-0.7404,4.7598,1.1901,11.138,7.2042,10.335h90.546c0.42866,5.2767-1.1192,11.013,1.407,15.858,3.7179,5.5444,11.306,3.4092,14.587-1.3681,7.4247-7.4285,14.958-14.752,22.312-22.249,3.9564-5.5554-1.5884-10.555-5.4254-14.113-6.86-6.69-13.48-13.66-20.51-20.167-1.23-0.836-2.69-1.324-4.18-1.367zm-137.12,67.156c-6.0098,0.85502-9.1712,6.8182-13.561,10.444-5.4869,5.5897-11.271,10.909-16.559,16.68-3.8247,5.4758,1.1417,10.619,5.1085,14.076,7.2706,6.8445,13.985,14.37,21.633,20.753,6.1454,3.4359,13.04-3.0079,11.566-9.433v-8.9271c30.929-0.086,61.876,0.17226,92.794-0.12955,6.4615-1.4675,4.7348-8.8085,4.956-13.691,0.70757-4.8278-0.97702-11.394-7.2042-10.554h-90.546c-0.41449-5.3241,1.121-11.105-1.49-15.97-1.518-2.1-4.1129-3.3421-6.6975-3.2489z"/></svg>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-bad">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m168.56,35c-7.3569-0.35717-8.8347,7.4883-8.1875,13.185-0.3441,2.6316,1.4556,7.407-2.8625,6.0646-29.975,0.08599-59.967-0.17224-89.931,0.12955-6.4615,1.4675-4.7348,8.8085-4.9561,13.691-0.7404,4.7598,1.1901,11.138,7.2042,10.335h90.546c0.42866,5.2767-1.1192,11.013,1.407,15.858,3.7179,5.5444,11.306,3.4092,14.587-1.3681,7.4247-7.4285,14.958-14.752,22.312-22.249,3.9564-5.5554-1.5884-10.555-5.4254-14.113-6.86-6.69-13.48-13.66-20.51-20.167-1.23-0.836-2.69-1.324-4.18-1.367zm-137.12,67.156c-6.0098,0.85502-9.1712,6.8182-13.561,10.444-5.4869,5.5897-11.271,10.909-16.559,16.68-3.8247,5.4758,1.1417,10.619,5.1085,14.076,7.2706,6.8445,13.985,14.37,21.633,20.753,6.1454,3.4359,13.04-3.0079,11.566-9.433v-8.9271c30.929-0.086,61.876,0.17226,92.794-0.12955,6.4615-1.4675,4.7348-8.8085,4.956-13.691,0.70757-4.8278-0.97702-11.394-7.2042-10.554h-90.546c-0.41449-5.3241,1.121-11.105-1.49-15.97-1.518-2.1-4.1129-3.3421-6.6975-3.2489z"/></svg>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-none">
            <div class="sb1ds-transition-example">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m168.56,35c-7.3569-0.35717-8.8347,7.4883-8.1875,13.185-0.3441,2.6316,1.4556,7.407-2.8625,6.0646-29.975,0.08599-59.967-0.17224-89.931,0.12955-6.4615,1.4675-4.7348,8.8085-4.9561,13.691-0.7404,4.7598,1.1901,11.138,7.2042,10.335h90.546c0.42866,5.2767-1.1192,11.013,1.407,15.858,3.7179,5.5444,11.306,3.4092,14.587-1.3681,7.4247-7.4285,14.958-14.752,22.312-22.249,3.9564-5.5554-1.5884-10.555-5.4254-14.113-6.86-6.69-13.48-13.66-20.51-20.167-1.23-0.836-2.69-1.324-4.18-1.367zm-137.12,67.156c-6.0098,0.85502-9.1712,6.8182-13.561,10.444-5.4869,5.5897-11.271,10.909-16.559,16.68-3.8247,5.4758,1.1417,10.619,5.1085,14.076,7.2706,6.8445,13.985,14.37,21.633,20.753,6.1454,3.4359,13.04-3.0079,11.566-9.433v-8.9271c30.929-0.086,61.876,0.17226,92.794-0.12955,6.4615-1.4675,4.7348-8.8085,4.956-13.691,0.70757-4.8278-0.97702-11.394-7.2042-10.554h-90.546c-0.41449-5.3241,1.121-11.105-1.49-15.97-1.518-2.1-4.1129-3.3421-6.6975-3.2489z"/></svg>
            </div>
        </div>
    </div>
</div>
