### Hvorfor animerer vi?

Funksjonelle animasjoner er nyttige virkemidler for å kommunisere respons fra interface. Subtile bevegelser kan være veldig hjelpsomme i å redusere kognitiv belastning ved å tydeliggjøre hvordan et interface oppfører seg og endrer seg ved interaksjon, og hvordan man som bruker må forholde seg til forskjellige elementer.

Dekorative animasjoner kan i tillegg bidra til å skape levende produkter og grensesnitt med personlighet, og på den måten underbygge merkevare, profil og visuell identitet.

### Når animerer vi?

#### Funksjonelle animasjoner

*   Visuell feedback på interaksjoner
*   Kommunisere hvordan systemet responderer på brukerhandlinger
*   Indikere at elementer trenger oppmerksomhet
*   Visuelle hint om hvor og hvordan bruker må forholde seg til elementer

#### Dekorative animasjoner

*   Bevegelse i illustrasjoner/ikoner som stemningsskapende middel
*   Må ikke konkurrere med interaksjonselementer

### Hvordan animerer vi?

#### Funksjonelle animasjoner

<div class="ffe-grid ffe-grid--condensed ffe-grid--no-top-padding">
    <div class="ffe-grid__row ffe-grid__row--bg-blue-ice">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--middle ffe-grid__col--no-bottom-padding">
            <ul>
                <li>Fysiske lover - elementer oppfører seg som om de har masse</li>
                <li>Naturlige bevegelser</li>
                <li>Easing</li>
                <li>Akselerasjon/deselerasjon</li>
            </ul>
        </div>
        <div class="sb1ds-easing sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Easing</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <div class="sb1ds-easing__ease-object">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-easing sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Lineær</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <div class="sb1ds-easing__ease-object">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--condensed">
    <div class="ffe-grid__row ffe-grid__row--bg-blue-ice">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--middle ffe-grid__col--no-bottom-padding">
            <ul>
                <li>Tyngdekraft</li>
                <li>Bevegelse langs kurver fremfor linjer</li>
                <li>Interaksjonselementer som utgangspunkt for bevegelser</li>
            </ul>
        </div>
        <div class="sb1ds-arc sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Kurve</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <div class="sb1ds-arc__container">
                            <div class="sb1ds-arc__arc-object">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-arc sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Linje</h5>
                <div class="sb1ds-svgcontainer">
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

<div class="ffe-grid ffe-grid--condensed">
    <div class="ffe-grid__row ffe-grid__row--bg-blue-ice">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--middle ffe-grid__col--no-bottom-padding">
            <ul>
                <li>Timing</li>
                <li>Raske bevegelser</li>
                <li>Unngå venting på animasjoner</li>
            </ul>
        </div>
        <div class="sb1ds-timing sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>0.2s</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <div class="sb1ds-timing__object">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-timing sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>1.0s</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <div class="sb1ds-timing__object">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--condensed">
    <div class="ffe-grid__row ffe-grid__row--bg-blue-ice">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--middle ffe-grid__col--no-bottom-padding">
            <ul>
                <li>Ease-in-out-back</li>
                <li>Overlappende kurve med negativ ease når elementer transformeres eller flyttes</li>
            </ul>
        </div>
        <div class="sb1ds-timing sb1ds-timing--overlap sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>ease-in-out-back</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <div class="sb1ds-timing__object">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-timing sb1ds-timing--overlap sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>ease</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <div class="sb1ds-timing__object">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--condensed">
    <div class="ffe-grid__row ffe-grid__row--bg-blue-ice">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--middle ffe-grid__col--no-bottom-padding">
            <ul>
                <li>Koreografi</li>
                <li>Sekvensielle bevegelser når mange elementer skal animeres samtidig</li>
            </ul>
        </div>
        <div class="sb1ds-sequence sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Sekvens</h5>
                <div class="sb1ds-svgcontainer">
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
        <div class="sb1ds-sequence sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Samtidig</h5>
                <div class="sb1ds-svgcontainer">
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

<div class="ffe-grid ffe-grid--condensed">
    <div class="ffe-grid__row ffe-grid__row--bg-blue-ice">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--middle ffe-grid__col--no-bottom-padding">
            <ul>
                <li>Subtilt</li>
                <li>Animasjoner som middel, ikke mål</li>
            </ul>
        </div>
        <div class="sb1ds-subtle sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Subtilt</h5>
                <div class="sb1ds-svgcontainer">
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
        <div class="sb1ds-subtle sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Nja</h5>
                <div class="sb1ds-svgcontainer">
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

<div class="ffe-grid ffe-grid--condensed">
    <div class="ffe-grid__row ffe-grid__row--bg-blue-ice">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--middle ffe-grid__col--no-bottom-padding">
            <ul>
                <li>Bevegelse i X- og Y-aksen - ikke Z (3D)</li>
            </ul>
        </div>
        <div class="sb1ds-xy sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Ja</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-xy sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Nei</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="ffe-grid ffe-grid--condensed">
    <div class="ffe-grid__row ffe-grid__row--bg-blue-ice">
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--middle ffe-grid__col--no-bottom-padding">
            <ul>
                <li>Unngå å flytte på elementer under transisjon</li>
            </ul>
        </div>
        <div class="sb1ds-relocate sb1ds-good ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Ja</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg> <span class="sb1ds-show">Expand</span><span class="sb1ds-hide">Collapse</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="sb1ds-relocate sb1ds-bad ffe-grid__col--sm-12 ffe-grid__col--md-4">
            <div class="sb1ds-example">
                <h5>Nei</h5>
                <div class="sb1ds-svgcontainer">
                    <div>
                        <span class="sb1ds-show">Expand</span><span class="sb1ds-hide">Collapse</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Dekorative animasjoner

*   Naturlige bevegelser
*   Koreografi
*   Repeterende bevegelser/loop

### Felles variabler for funksjonelle animasjoner

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

##### LESS:

`transition: all @ffe-transition-duration @ffe-ease-in-out-back;`

##### Output:

`transition: all .2s cubic-bezier(.46, -0.265, .48, 1.38);`

### Eksempler

#### Funksjonelle animasjoner

<div class="ffe-grid ffe-grid--condensed ffe-grid--no-top-padding">
    <div class="ffe-grid__row ffe-grid__row--bg-sand">
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-transition sb1ds-good">
            <h5>0.2s</h5>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-transition sb1ds-bad">
            <h5>1.0s</h5>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-transition sb1ds-none">
            <h5>Ingen animasjon</h5>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-bgcolor sb1ds-transition sb1ds-good">
            <button class="ffe-button ffe-button--action">
                <span class="ffe-button__label">
                    Bakgrunnsfarge
                </span>
            </button>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-bgcolor sb1ds-transition sb1ds-bad">
            <button class="ffe-button ffe-button--action">
                <span class="ffe-button__label">
                    Bakgrunnsfarge
                </span>
            </button>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-bgcolor sb1ds-transition sb1ds-none">
            <button class="ffe-button ffe-button--action">
                <span class="ffe-button__label">
                    Bakgrunnsfarge
                </span>
            </button>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-resize sb1ds-transition sb1ds-good">
            <button class="ffe-button ffe-button--primary">
                <span class="ffe-button__label">
                    Resize
                </span>
            </button>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-resize sb1ds-transition sb1ds-bad">
            <button class="ffe-button ffe-button--primary">
                <span class="ffe-button__label">
                    Resize
                </span>
            </button>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-resize sb1ds-transition sb1ds-none">
            <button class="ffe-button ffe-button--primary">
                <span class="ffe-button__label">
                    Resize
                </span>
            </button>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-border sb1ds-transition sb1ds-good">
            <input class="ffe-input-field ffe-input-field--inline" placeholder="Border">
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-border sb1ds-transition sb1ds-bad">
            <input class="ffe-input-field ffe-input-field--inline" placeholder="Border">
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center border sb1ds-transition sb1ds-none">
            <input class="ffe-input-field ffe-input-field--inline" placeholder="Border">
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-check sb1ds-transition sb1ds-good">
            <input class="ffe-hidden-checkbox"
                    type="checkbox"
                    id="c1">
            <label class="ffe-checkbox" for="c1">Checkbox</label>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-check sb1ds-transition sb1ds-bad">
            <input class="ffe-hidden-checkbox"
                    type="checkbox"
                    id="c2">
            <label class="ffe-checkbox" for="c2">Checkbox</label>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-check sb1ds-transition sb1ds-none">
            <input class="ffe-hidden-checkbox"
                    type="checkbox"
                    id="c3">
            <label class="ffe-checkbox" for="c3">Checkbox</label>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-radio sb1ds-transition sb1ds-good">
            <input class="ffe-radio-input"
                    type="radio"
                    id="r1"
                    name="radio">
            <label class="ffe-radio-button ffe-radio-button--inline" for="r1">Radio button</label>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-radio sb1ds-transition sb1ds-bad">
            <input class="ffe-radio-input"
                    type="radio"
                    id="r2"
                    name="radio">
            <label class="ffe-radio-button ffe-radio-button--inline" for="r2">Radio button</label>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-radio sb1ds-transition sb1ds-none">
            <input class="ffe-radio-input"
                    type="radio"
                    id="r3"
                    name="radio">
            <label class="ffe-radio-button ffe-radio-button--inline" for="r3">Radio button</label>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-textarea-expand sb1ds-transition sb1ds-good">
            <textarea class="ffe-textarea sb1ds-textarea-expandable" placeholder="Expand"></textarea>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-textarea-expand sb1ds-transition sb1ds-bad">
            <textarea class="ffe-textarea sb1ds-textarea-expandable" placeholder="Expand"></textarea>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-textarea-expand sb1ds-transition sb1ds-none">
            <textarea class="ffe-textarea sb1ds-textarea-expandable" placeholder="Expand"></textarea>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-good">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-bad">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-move-right sb1ds-transition sb1ds-good">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-move-right sb1ds-transition sb1ds-bad">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-move-right sb1ds-transition sb1ds-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"/></svg>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-good">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m168.56,35c-7.3569-0.35717-8.8347,7.4883-8.1875,13.185-0.3441,2.6316,1.4556,7.407-2.8625,6.0646-29.975,0.08599-59.967-0.17224-89.931,0.12955-6.4615,1.4675-4.7348,8.8085-4.9561,13.691-0.7404,4.7598,1.1901,11.138,7.2042,10.335h90.546c0.42866,5.2767-1.1192,11.013,1.407,15.858,3.7179,5.5444,11.306,3.4092,14.587-1.3681,7.4247-7.4285,14.958-14.752,22.312-22.249,3.9564-5.5554-1.5884-10.555-5.4254-14.113-6.86-6.69-13.48-13.66-20.51-20.167-1.23-0.836-2.69-1.324-4.18-1.367zm-137.12,67.156c-6.0098,0.85502-9.1712,6.8182-13.561,10.444-5.4869,5.5897-11.271,10.909-16.559,16.68-3.8247,5.4758,1.1417,10.619,5.1085,14.076,7.2706,6.8445,13.985,14.37,21.633,20.753,6.1454,3.4359,13.04-3.0079,11.566-9.433v-8.9271c30.929-0.086,61.876,0.17226,92.794-0.12955,6.4615-1.4675,4.7348-8.8085,4.956-13.691,0.70757-4.8278-0.97702-11.394-7.2042-10.554h-90.546c-0.41449-5.3241,1.121-11.105-1.49-15.97-1.518-2.1-4.1129-3.3421-6.6975-3.2489z"/></svg>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-bad">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m168.56,35c-7.3569-0.35717-8.8347,7.4883-8.1875,13.185-0.3441,2.6316,1.4556,7.407-2.8625,6.0646-29.975,0.08599-59.967-0.17224-89.931,0.12955-6.4615,1.4675-4.7348,8.8085-4.9561,13.691-0.7404,4.7598,1.1901,11.138,7.2042,10.335h90.546c0.42866,5.2767-1.1192,11.013,1.407,15.858,3.7179,5.5444,11.306,3.4092,14.587-1.3681,7.4247-7.4285,14.958-14.752,22.312-22.249,3.9564-5.5554-1.5884-10.555-5.4254-14.113-6.86-6.69-13.48-13.66-20.51-20.167-1.23-0.836-2.69-1.324-4.18-1.367zm-137.12,67.156c-6.0098,0.85502-9.1712,6.8182-13.561,10.444-5.4869,5.5897-11.271,10.909-16.559,16.68-3.8247,5.4758,1.1417,10.619,5.1085,14.076,7.2706,6.8445,13.985,14.37,21.633,20.753,6.1454,3.4359,13.04-3.0079,11.566-9.433v-8.9271c30.929-0.086,61.876,0.17226,92.794-0.12955,6.4615-1.4675,4.7348-8.8085,4.956-13.691,0.70757-4.8278-0.97702-11.394-7.2042-10.554h-90.546c-0.41449-5.3241,1.121-11.105-1.49-15.97-1.518-2.1-4.1129-3.3421-6.6975-3.2489z"/></svg>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center sb1ds-svgs sb1ds-transform sb1ds-transition sb1ds-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="m168.56,35c-7.3569-0.35717-8.8347,7.4883-8.1875,13.185-0.3441,2.6316,1.4556,7.407-2.8625,6.0646-29.975,0.08599-59.967-0.17224-89.931,0.12955-6.4615,1.4675-4.7348,8.8085-4.9561,13.691-0.7404,4.7598,1.1901,11.138,7.2042,10.335h90.546c0.42866,5.2767-1.1192,11.013,1.407,15.858,3.7179,5.5444,11.306,3.4092,14.587-1.3681,7.4247-7.4285,14.958-14.752,22.312-22.249,3.9564-5.5554-1.5884-10.555-5.4254-14.113-6.86-6.69-13.48-13.66-20.51-20.167-1.23-0.836-2.69-1.324-4.18-1.367zm-137.12,67.156c-6.0098,0.85502-9.1712,6.8182-13.561,10.444-5.4869,5.5897-11.271,10.909-16.559,16.68-3.8247,5.4758,1.1417,10.619,5.1085,14.076,7.2706,6.8445,13.985,14.37,21.633,20.753,6.1454,3.4359,13.04-3.0079,11.566-9.433v-8.9271c30.929-0.086,61.876,0.17226,92.794-0.12955,6.4615-1.4675,4.7348-8.8085,4.956-13.691,0.70757-4.8278-0.97702-11.394-7.2042-10.554h-90.546c-0.41449-5.3241,1.121-11.105-1.49-15.97-1.518-2.1-4.1129-3.3421-6.6975-3.2489z"/></svg>
        </div>
    </div>
</div>

#### Dekorative animasjoner

<div class="ffe-grid--no-top-padding">
    <div class="ffe-grid__row">
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center">
            <div class="sb1ds-example">
                <div class="sb1ds-svgcontainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="sb1ds-cloud sb1ds-svgcontainer__svgicon">
                        <path id="cloud" d="M128.394 12.426c-10.898 0-19.798 7.83-20.55 17.712-9.27 1.786-16.173 8.693-16.173 16.952 0 9.202 8.55 16.722 19.415 17.352v.12h62.16v-.04c.256.01.498.04.757.04 9.68 0 17.562-7.335 17.562-16.353s-7.882-16.313-17.562-16.313c-.143 0-.278-.003-.42 0-2.667-6.947-9.868-11.915-18.32-11.915-3.25 0-6.28.74-8.97 2.04-3.56-5.718-10.242-9.596-17.898-9.596z" fill="#ddd"/>
                        <path d="M74.117 57.09c-.584.03-1.166.15-1.724.376L56.79 63.688c-4.117 1.6-5.617 7.285-2.902 11.287l18.23 26.325-13.494 5.69-15.056-7.503c-1.49-.6-3.16-.694-4.736-.094l-12.7 5.222c-4.118 1.8-5.437 7.797-2.547 11.6 5.256 6.903 12.182 15.795 13.933 18.196 4.117 5.704 9.81 8.505 17.082 8.505 3.637-.02 7.68-.72 12.427-2 8.322-2.602 84.8-34.906 106.786-44.21 3.504-1.5 5.168-6.11 3.504-9.912-1.227-2.8-3.072-5.99-5.612-8.692-4.03-4.3-9.7-8.003-17.41-8.003-3.416 0-7.2.688-11.14 2.19h-.083c-5.957 2.4-16.463 6.708-20.23 8.41l-45.905-22.92c-.876-.5-1.845-.733-2.82-.686zm.356 9.1l48.452 24.105 1.478-.594s14.212-5.996 21.57-9.097c3.066-1.2 5.935-1.814 8.65-1.814 7.797 0 12.713 5.396 15.166 10.098-19.36 8.104-96.707 40.74-104.68 43.24-4.028 1.3-7.45 1.877-10.428 1.877-4.993 0-8.398-1.776-11.114-5.378-2.015-2.602-8.415-10.912-12.62-16.415l.083-.094 10.074-4.22 17.438 8.723 26.552-11.224-23.65-34.017 13.03-5.19z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center">
            <div class="sb1ds-example">
                <div class="sb1ds-svgcontainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="sb1ds-coin-drop sb1ds-svgcontainer__svgicon">
                        <path d="M149.366 46.917c-1.566-.044-3.165.298-4.698 1.086l-19.108 9.46c-5.608-1.75-19.255-5.606-36.078-5.606-8.937 0-17.534 1.052-25.595 3.33C27.787 64.992 8 88.8 8 122.07c0 21.716 11.894 41.315 33.098 54.275v6.833c0 9.28 7.54 16.818 16.83 16.818h9.64c7.185 0 13.325-4.558 15.778-10.862 4.556.35 8.94.35 10.694.35 1.4 0 3.506 0 5.61-.175 2.45 6.32 8.56 10.7 15.57 10.7h9.466c9.463 0 17.005-7.713 17.18-16.82v-5.43c15.07-8.932 23.317-20.465 26.646-26.244h6.136c9.638 0 17.355-7.712 17.355-17.344v-21.198c0-9.632-7.718-17.344-17.355-17.344h-3.156l-.526-.876c-1.05-1.576-5.96-9.286-7.89-11.738l-1.4-1.927-2.63-25.194c-.658-5.254-4.98-8.84-9.677-8.97zm-2.77 13.35l2.805 25.368 3.683 4.555c1.226 1.576 5.61 8.235 7.012 10.687l4.207 6.832h9.992c2.804 0 5.084 2.278 5.084 5.08v21.198c0 2.802-2.28 5.08-5.084 5.08h-13.85l-1.576 3.68c-.176.175-7.195 15.56-26.47 25.893l-3.157 1.753v12.614c0 2.45-1.928 4.555-4.557 4.555h-9.64c-2.455 0-4.56-1.928-4.56-4.555v-7.534l-7.327 1.052c-1.928.35-5.61.525-9.642.525-5.783 0-11.57-.526-14.375-1.05l-7.364-1.578v8.41c0 2.45-1.93 4.554-4.558 4.554h-9.64c-2.455 0-4.56-1.928-4.56-4.555v-14.014l-3.155-1.752c-19.084-10.67-29.96-27.29-29.96-45.33 0-19.264 8.08-44.503 46.806-55.186 6.834-1.75 14.377-2.768 22.263-2.768 19.1 0 34.15 5.747 34.325 5.747l2.455 1.05 20.86-10.3zM87.374 78.45c-6.484 0-12.8.702-18.407 2.28-6.484 1.75-12.098 4.03-17.005 7.006-2.628 1.576-3.155 4.907-1.402 7.358l1.402 1.927c1.577 2.103 4.208 2.63 6.31 1.403 3.856-2.452 8.593-4.38 13.85-5.78 4.556-1.227 9.644-1.93 15.076-1.93 5.257.002 10.17.527 14.024 1.228 2.63.526 5.26-1.05 5.785-3.678l.526-2.278c.7-2.627-1.053-5.43-3.856-5.956-4.557-.876-10.17-1.577-16.303-1.577z"/>
                        <circle id="coin" cx="80" cy="22" r="16" stroke="black" stroke-width="12" fill="white" />
                        <path d="M59.98 96.224c-.305-.098-.7-.26-.878-.36-.568-.32-1.934-1.62-2.198-2.09-.617-1.098-.175-2.368 1.072-3.08 1.47-.837 5.405-2.396 8.265-3.273 6.617-2.03 11.65-2.824 19.294-3.048 4.068-.12 6.46-.066 9.7.215 3.183.275 4.315 1.41 3.67 3.68-.33 1.167-.597 1.582-1.315 2.042-.983.63-1.724.777-3.403.673-7.62-.472-14.025-.12-19.636 1.084-3.79.812-7.78 2.123-10.716 3.522-1.126.535-1.484.647-2.316.722-.69.062-1.148.036-1.538-.088z" fill="#000"/>
                        <path d="M125.254 124.502a35.16 22.13 0 1 1-70.318 0 35.16 22.13 0 1 1 70.318 0z" transform="matrix(1.07994 0 0 .9816 -9.478 -9.324)" fill="white" stroke="#fff"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center">
            <div class="sb1ds-example">
                <div class="sb1ds-svgcontainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="sb1ds-heart sb1ds-svgcontainer__svgicon">
                        <path id="heart" d="M99.91 185c-5.33 0-10.54-1.6-15.1-4.6-20.87-14.1-58.28-45.5-72.16-67.6C-1.89 89.44-4.11 62.44 7.102 41.89 16.43 24.78 33.972 15 55.282 15c14.32 0 29.65 6.56 44.72 18.89 11.3-9.33 27.2-18.89 44.8-18.89 21.32 0 38.74 9.778 48.18 26.89 11.1 20.33 8.992 47.56-5.55 70.67-13.88 22.11-51.29 53.56-72.16 67.67-4.5 3.1-9.7 4.7-15.1 4.7zM55.17 30.1c-15.88 0-28.2 6.778-35.19 19.11-8.55 15.56-6.55 36.78 5.22 55.58 11.32 17.89 44.18 47.22 68.05 63.33 3.997 2.556 9.325 2.556 13.1 0 23.65-16.11 56.73-45.56 68.05-63.33 11.77-18.67 13.77-40 5.218-55.56-6.772-12.33-19.32-19.11-35.19-19.11-15.32 0-30.09 10.56-39.63 19.33l-5 4.54-4.99-4.56c-9.55-9-24.09-19.33-39.64-19.33z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center">
            <div class="sb1ds-example">
                <div class="sb1ds-svgcontainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="sb1ds-rain sb1ds-svgcontainer__svgicon">
                        <path d="M98.765 0c-3.005 0-5.32 2.463-5.32 5.356v14.017C45.924 22.713 7.52 60.78 4.516 108.97c-.223 3.005 1.767 5.662 4.66 6.33.445.11 1.016.243 1.46.243 2.45 0 4.668-1.46 5.67-3.687 4.34-9.683 13.91-15.93 24.484-15.93 10.128 0 19.58 6.032 24.033 15.27 1 2.115 3.227 3.548 5.564 3.548s4.563-1.322 5.565-3.548c3.45-7.234 9.898-12.362 17.354-14.365v75.897c0 13.58-13.334 13.913-14.78 13.913-3.896 0-8.918-1.44-12.034-5.113-1.447-1.78-3.902-2.205-6.017-1.426l-2.434.975c-3.227 1.336-4.444 5.46-2.33 8.244 5.12 6.7 13.467 10.7 22.816 10.7 14.022 0 28.135-9.35 28.135-27.27V96.852c7.457 2.003 13.94 7.13 17.39 14.365 1 2.114 3.227 3.547 5.564 3.547s4.563-1.32 5.565-3.547c4.45-9.24 13.903-15.27 24.03-15.27 10.574 0 20.144 6.247 24.485 15.93 1.224 2.782 4.236 4.215 7.13 3.547 2.893-.667 4.882-3.325 4.66-6.33-2.894-48.195-41.408-86.372-88.928-89.6l.105-.104V5.375c.02-3.008-2.41-5.36-5.3-5.36h-2.574zm1.356 31.513c36.838 0 68.32 24.028 79.225 57.53-5.898-3.562-12.798-5.565-20.032-5.565-11.463 0-22.25 5.134-29.596 13.704-7.345-8.57-18.133-13.704-29.596-13.704s-22.285 5.134-29.63 13.704c-7.345-8.57-18.133-13.704-29.596-13.704-7.234 0-14.022 2.003-20.032 5.565 10.918-33.502 42.545-57.53 79.27-57.53z"/>
                        <path id="drop1" d="M14.415 31.138s7.605-7.14 9.898-23.45c.842-5.99-1.432 10.7 7.83 23.1 9.057 12.123-4.533 21-4.533 21s-5.563 2.746-9.684-.162c-4.122-2.908-10.28-10.24-3.51-20.488z" fill="#00ddff"/>
                        <path id="drop2" d="M140.415 31.138s7.605-7.14 9.898-23.45c.842-5.99-1.432 10.7 7.83 23.1 9.057 12.123-4.533 21-4.533 21s-5.563 2.746-9.684-.162c-4.122-2.908-10.28-10.24-3.51-20.488z" fill="#00ddff"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center">
            <div class="sb1ds-example">
                <div class="sb1ds-svgcontainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="sb1ds-rotate sb1ds-svgcontainer__svgicon">
                        <path id="wheel" d="M93.75,0c-3.75,0-7.5,2.5-8.75,6.25l-6.25,18.75c-6.25,1.25-12.5,3.75-17.5,7.5l-17.5-8.75c-3.75-2.5-7.5-1.25-10,1.25l-8.75,8.75c-2.5,2.5-3.75,6.25-1.25,10l8.75,17.5c-3.75,6.25-6.25,11.25-7.5,17.5l-18.75,6.25c-3.75,1.25-6.25,5-6.25,8.75v12.5c0,3.75,2.5,7.5,6.25,8.75l18.75,6.25c1.25,6.25,3.75,12.5,7.5,17.5l-8.75,17.5c-1.25,3.75-1.25,7.5,1.25,10l8.75,8.75c2.5,2.5,6.25,3.75,10,1.25l18.75-8.75c5,2.5,12.5,5,18.75,7.5l6.25,18.75c0,3.75,3.75,6.25,6.5,6.25h12.5c3.75,0,7.5-2.5,8.75-6.25l5-18.75c6.25-1.25,12.5-3.75,18.75-7.5l17.5,8.75c3.75,1.25,7.5,1.25,10-1.25l8.75-8.75c2.5-2.5,3.75-6.25,1.25-10l-8.75-18.75c2.5-5,5-12.5,7.5-18.75l18.75-5c2.5,0,5-3.75,5-7.5v-12.5c0-3.75-2.5-7.5-6.25-8.75l-18.75-6.25c-1.25-6.25-3.75-12.5-7.5-17.5l8.75-17.5c1.25-3.75,1.25-7.5-1.25-10l-8.75-8.75c-2.5-2.5-6.25-3.75-10-1.25l-18.75,8.75c-5-2.5-12.5-5-18.75-7.5l-5-18.75c0-3.75-3.75-6.25-7.5-6.25h-12.5zm6.25,56.25c23.75,0,43.75,18.75,43.75,43.75s-20,43.75-43.75,43.75-43.75-20-43.75-43.75,20-43.75,43.75-43.75z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-4 ffe-grid__col--center">
            <div class="sb1ds-example">
                <div class="sb1ds-svgcontainer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="sb1ds-cat sb1ds-svgcontainer__svgicon">
                        <path d="M48.882.26c-.934.082-1.88.39-2.76.958h-.41C32.267 9.904 24.2 32.036 22.96 41.963c-2.07 15.718.826 27.918 8.478 36.605 2.895 3.31 6.62 5.998 10.757 8.273L35.37 98.01c-11.788 19.44-17.99 41.77-17.99 64.52v25.44c0 6.41 5.167 11.787 11.786 11.787h96.375v-.206l.622-14.68v-19.236c0-24.818-6.825-49.222-19.647-70.317l-4.964-8.063c4.55-2.275 8.274-4.967 11.376-8.483 7.652-8.685 10.547-21.093 8.48-36.604-1.242-9.927-9.1-32.055-22.75-40.74l-.412-.213c-3.516-2.275-8.068-.206-8.895 3.724l-2.07 10.135H57.086L55.018 4.937c-.62-3.102-3.334-4.924-6.136-4.68zM45.3 19.215l1.65 8.272h50.26l1.65-8.272c5.585 7.86 9.31 18.82 9.93 24.612 1.448 11.995-.412 21.095-5.582 26.886-5.79 6.618-16.342 9.924-31.232 10.13-14.89 0-25.437-3.512-31.228-10.13-4.964-6.205-6.824-15.308-5.377-27.096.622-5.79 4.346-16.543 9.93-24.402zm26.47 31.85c-4.455 0-8.066 3.61-8.068 8.062 0 4.456 3.612 8.067 8.067 8.067 4.454 0 8.066-3.61 8.066-8.067-.002-4.453-3.613-8.063-8.067-8.062zM56.673 91.6c4.55.826 9.718 1.238 15.095 1.445h.62c5.172 0 10.135-.413 14.478-1.24l6.823 11.17c11.583 19.026 17.58 40.742 17.58 62.872v19.437H94.52V156.33H82.11v28.954H61.634V156.33h-12.41v28.954H32.27v-22.75c0-20.06 5.582-39.708 15.923-56.874l8.483-14.06z" id="path4"/>
                        <path id="tail" d="M125.33 199.973v-.206c33.544-.373 57.08-28.33 57.08-60.594 0-11.995-3.513-23.785-10.132-33.712-1.86-2.894-5.792-4.343-8.895-2.895-4.343 1.86-5.79 7.034-3.102 10.757 5.172 7.652 7.862 16.545 7.862 25.852 0 24.197-18.614 44.05-42.19 45.91zM71.763 81.06c-105.61 65.593-52.805 32.796 0 0z" id="path4-7"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-12 ffe-grid__col--center">
            <div class="sb1ds-example">
                <div class="sb1ds-svgcontainer">
                    <svg viewBox="0 0 1137 290" xmlns="http://www.w3.org/2000/svg" class="sb1ds-biker sb1ds-biker--quick">
                        <title>Jente på sykkel</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="SVG" transform="translate(-147.000000, -129.000000)">
                                <g id="biker" transform="translate(147.000000, 129.000000)">
                                    <path d="M0,290 C0,290 160.237658,239.772197 272.722773,246.646295 C421.352772,255.729475 581.530428,296.27431 784.691372,272.882928 C987.851698,249.491206 1089.85744,290 1089.85744,290 L0,290 Z" id="ground" class="play" fill="#CCE9F7"></path>
                                    <path d="M967.970877,68.1095512 C965.976197,68.1095512 964.014858,67.4761264 962.458624,66.2268023 C956.348716,61.3229759 951.624165,54.5230479 951.048183,47.8558136 C950.393014,40.2864287 956.474581,32.1069866 965.920349,30.6340026 C973.444788,29.4606228 980.882538,32.5067369 987.580097,35.4510356 C985.060281,26.160805 987.415055,17.3612908 993.977579,9.39215569 C998.411222,4.00929659 1005.26549,0.63270001 1013.37675,0.0593629236 C1020.96537,-0.476419331 1028.39812,2.67401371 1033.53527,7.10715287 C1038.67326,11.5394575 1042.30003,15.7622896 1044.65481,21.4714584 C1046.81453,26.7099401 1048.71002,34.7925742 1045.95931,45.1785714 C1051.86917,38.4353929 1063.00537,34.8059271 1073.23384,36.2914293 C1083.46231,37.7760969 1092.22623,44.2939465 1094.69687,52.2547361 C1092.93225,45.0809288 1101.78036,38.114925 1111.05192,37.9413382 C1120.32431,37.768586 1128.75398,42.9611673 1133.07426,49.4281091 C1134.81387,52.0310762 1135.99835,54.6657562 1136.60517,57.3513439 C1137.85716,62.8894297 1133.43685,68.1095512 1127.76539,68.1095512 L967.970877,68.1095512 Z" id="cloud" class="play" fill="#CCE9F7"></path>
                                    <g id="biker-all" class="play">
                                        <g id="air" transform="translate(739.000000, 218.000000)" fill="#FFFFFF">
                                            <path d="M7.84880083,30.1944636 C5.33552263,30.1944636 2.82224443,29.8766909 0.384436946,29.2328648 C0.109434066,29.1604085 -0.0559812004,28.8778288 0.017421824,28.6004247 C0.0908248483,28.3250907 0.372030801,28.1553359 0.649101371,28.2319325 C7.63479483,30.0785335 15.2718109,29.1417769 21.6041141,25.6649087 C23.3823282,24.6877836 25.1036808,23.4912192 26.7681719,22.3350234 C29.6505329,20.3310887 32.6311092,18.2588381 36.0645098,17.2082215 C42.1414532,15.3502345 48.4592825,16.9660104 54.5703427,18.5258913 C59.9752866,19.9077368 65.5621872,21.332021 70.9361156,20.3393694 C75.0229065,19.5806483 78.7861039,17.4452571 82.4252397,15.379217 C86.3311077,13.1630888 90.3693079,10.8703639 94.8841108,10.2068711 C100.775996,9.34257072 106.648238,11.3547862 111.825736,13.131001 C112.095569,13.223124 112.240308,13.5170897 112.147261,13.7872482 C112.055249,14.0574068 111.761637,14.2023194 111.49077,14.1091613 C106.424927,12.3722799 100.688119,10.4045733 95.0329845,11.2326455 C90.7104768,11.8661207 86.7580858,14.1101964 82.9349255,16.2807806 C79.2213528,18.3882243 75.3816509,20.5670893 71.1242755,21.3558281 C65.5311718,22.3960938 59.8274467,20.9366165 54.3149829,19.5278587 C48.0674551,17.9327846 42.1652316,16.4236231 36.3674266,18.1988028 C33.0880689,19.2018053 30.1746925,21.2264418 27.3574638,23.1858676 C25.6712619,24.3565547 23.9281985,25.5686453 22.1003598,26.5726829 C17.7468368,28.9637413 12.7988527,30.1944636 7.84880083,30.1944636" id="Fill-412-Copy"></path>
                                            <path d="M98.9709798,24.7156664 C98.856223,24.7156664 98.7393984,24.677368 98.6442847,24.5997362 C95.4755485,22.0089054 93.265187,18.0041412 92.4205353,13.321393 C91.7444004,9.5743663 91.880868,5.47540895 92.8495811,0.420028209 C92.9033411,0.138483663 93.1773101,-0.0436922191 93.4543807,0.00909738318 C93.7355866,0.0629220757 93.9185773,0.334115719 93.8658512,0.614625174 C92.9209164,5.54165472 92.7854827,9.51950652 93.4378392,13.1371469 C94.2390693,17.5776841 96.321234,21.3630091 99.297675,23.7965062 C99.5189179,23.977647 99.5520009,24.3047355 99.3721118,24.5252098 C99.2687273,24.6514908 99.1208874,24.7156664 98.9709798,24.7156664" id="Fill-413-Copy"></path>
                                            <path d="M85.1765172,25.883575 C85.063828,25.883575 84.950105,25.8473469 84.8549913,25.7717853 C79.8098256,21.7628808 77.6935441,14.4334068 79.8232656,8.34811126 C79.9183794,8.07795271 80.2119915,7.93304007 80.4818252,8.03033855 C80.7516588,8.12453177 80.8932956,8.41953249 80.7992157,8.68969104 C78.8100971,14.3733716 80.7868096,21.2163531 85.4980431,24.9602745 C85.7213537,25.1383101 85.7585721,25.4643635 85.5817846,25.687943 C85.4794339,25.8173293 85.3284925,25.883575 85.1765172,25.883575" id="Fill-414-Copy"></path>
                                        </g>
                                        <g id="left-leg" transform="translate(897.000000, 222.000000)" fill="#E1D8AF">
                                            <path d="M7.70807604,8.32314082 C7.70807604,8.32314082 15.9778055,14.7655425 15.0731908,30.2836154 L19.3378031,24.1941795 L15.633535,4.78623746 L2.53781513,0.991596639" id="left-shin" class="play"></path>
                                            <path d="M13.9177683,31.3207741 C13.8609068,31.3207741 13.8040453,31.3114583 13.7482176,31.2928266 C13.5300762,31.2151949 13.3884394,31.0040365 13.4018794,30.7732113 C14.2785803,15.7385256 6.3148691,9.31268537 6.23422915,9.25057996 C6.01091854,9.07357952 5.96956473,8.74856119 6.14531845,8.52394661 C6.32003832,8.30036711 6.64466578,8.25689332 6.87004408,8.43389375 C7.20294231,8.69370141 14.7293369,14.7313828 14.4987894,29.0704879 L17.6334087,24.5957928 L14.0294236,5.71471169 L1.23868812,2.00805354 C0.964719083,1.92835159 0.806540735,1.6405965 0.886146832,1.36733268 C0.965752928,1.09199867 1.25212811,0.930524595 1.52609714,1.01333181 L14.621817,4.80900773 C14.8079092,4.86283242 14.949546,5.01809596 14.9857306,5.20855256 L18.6899987,24.6164946 C18.7168787,24.7541616 18.6858633,24.897004 18.6052234,25.010864 L14.340611,31.1002999 C14.2413619,31.2410721 14.0821497,31.3207741 13.9177683,31.3207741" id="left-shin2" class="play"></path>
                                        </g>
                                        <g id="bike" transform="translate(857.000000, 202.000000)">
                                            <g id="front-wheel" transform="translate(45.000000, 37.000000)">
                                                <path d="M17.6053434,32.5242421 C9.30666624,32.5242421 2.55462185,25.7651028 2.55462185,17.4553984 C2.55462185,9.14672899 9.30666624,2.38655462 17.6053434,2.38655462 C25.9040205,2.38655462 32.6570987,9.14672899 32.6570987,17.4553984 C32.6570987,25.7651028 25.9040205,32.5242421 17.6053434,32.5242421" id="front-wheel1" class="play" fill="#FFFFFF"></path>
                                                <path d="M18.6391888,0.714285714 C9.756389,0.714285714 2.55462185,7.92472434 2.55462185,16.8182197 C2.55462185,25.7127501 9.756389,32.9221537 18.6391888,32.9221537 C27.5219886,32.9221537 34.7237557,25.7127501 34.7237557,16.8182197 C34.7237557,7.92472434 27.5219886,0.714285714 18.6391888,0.714285714 M18.6391888,2.7844662 C26.3682171,2.7844662 32.6560649,9.07988505 32.6560649,16.8182197 C32.6560649,24.5565543 26.3682171,30.8519732 18.6391888,30.8519732 C10.9101605,30.8519732 4.62231268,24.5565543 4.62231268,16.8182197 C4.62231268,9.07988505 10.9101605,2.7844662 18.6391888,2.7844662" id="front-wheel2" class="play" fill="#005AA4"></path>
                                                <path d="M17.4838426,1.74937596 C8.89982412,1.74937596 1.91619835,8.74141054 1.91619835,17.3367999 C1.91619835,25.9301191 8.89982412,32.9221537 17.4838426,32.9221537 C26.0688949,32.9221537 33.0525207,25.9301191 33.0525207,17.3367999 C33.0525207,8.74141054 26.0688949,1.74937596 17.4838426,1.74937596 M17.4838426,33.9572439 C8.3301753,33.9572439 0.882352941,26.5014889 0.882352941,17.3367999 C0.882352941,8.17107581 8.3301753,0.714285714 17.4838426,0.714285714 C26.6375099,0.714285714 34.0863661,8.17107581 34.0863661,17.3367999 C34.0863661,26.5014889 26.6375099,33.9572439 17.4838426,33.9572439" id="front-wheel3" class="play" fill="#005AA4"></path>
                                                <path d="M23.170184,16.8803719 C23.170184,19.3438867 21.1758962,21.3405758 18.7153441,21.3405758 C16.254792,21.3405758 14.2605042,19.3438867 14.2605042,16.8803719 C14.2605042,14.4168571 16.254792,12.4201681 18.7153441,12.4201681 C21.1758962,12.4201681 23.170184,14.4168571 23.170184,16.8803719" id="Fill-355-Copy" class="play" fill="#005AA4"></path>
                                                <path d="M17.5599979,13.4552583 C15.3889225,13.4552583 13.6220807,15.2242275 13.6220807,17.3989521 C13.6220807,19.5716065 15.3889225,21.3405758 17.5599979,21.3405758 C19.7321071,21.3405758 21.4989489,19.5716065 21.4989489,17.3989521 C21.4989489,15.2242275 19.7321071,13.4552583 17.5599979,13.4552583 M17.5599979,22.375666 C14.8192737,22.375666 12.5882353,20.1429764 12.5882353,17.3989521 C12.5882353,14.6528577 14.8192737,12.4201681 17.5599979,12.4201681 C20.3017559,12.4201681 22.5327943,14.6528577 22.5327943,17.3989521 C22.5327943,20.1429764 20.3017559,22.375666 17.5599979,22.375666" id="front-wheel4" class="play" fill="#005AA4"></path>
                                            </g>
                                            <g id="bike-frame" transform="translate(15.000000, 0.000000)">
                                                <path d="M40.6096098,22.626733 C39.7732289,22.626733 39.083654,21.9590998 39.0609094,21.1175715 C39.0474694,20.6724826 38.8448357,10.9312484 44.1732749,6.17397364 C43.0081312,5.21651516 40.2415608,3.80775735 34.1697867,4.05928427 C33.2734427,4.09344225 32.5921386,3.42787923 32.555954,2.5718596 C32.5208033,1.71480488 33.1855659,0.99231189 34.040556,0.955048641 C45.4138894,0.495468574 47.617014,5.34279617 47.8299862,5.89760454 C48.0967183,6.59525537 47.83102,7.38295904 47.1972728,7.77422315 C42.8375467,10.467528 42.0838734,18.256582 42.1603779,21.0306239 C42.1841564,21.8876786 41.5100891,22.6029259 40.6540651,22.6256979 C40.6385575,22.626733 40.6251175,22.626733 40.6096098,22.626733" id="Fill-357-Copy" fill="#33A5DB"></path>
                                                <polygon id="Fill-358-Copy" fill="#33A5DB" points="24.9612807 52.5124872 22.3011965 53.3871384 14.1596639 28.5553235 16.8197481 27.6806723"></polygon>
                                                <path d="M13.656146,27.7311668 L21.474085,51.5796459 L23.1530499,51.0279428 L15.3340771,27.1794637 L13.656146,27.7311668 Z M21.1442883,52.750333 C21.0636483,52.750333 20.9840422,52.7306663 20.9116731,52.6944381 C20.7886455,52.6333678 20.6966332,52.5246833 20.6542456,52.3942619 L12.5137468,27.562447 C12.4238022,27.2902183 12.5716421,26.9983229 12.8425096,26.9093051 L15.5025939,26.0346538 C15.6338922,25.990145 15.7755291,26.0036011 15.8975228,26.0646715 C16.0195166,26.1257418 16.1125627,26.2344263 16.1549503,26.3648476 L24.2954491,51.1966625 C24.3853937,51.4688913 24.2365199,51.7607867 23.9666863,51.8498045 L21.3055682,52.7234206 C21.2538759,52.7420523 21.1990821,52.750333 21.1442883,52.750333 L21.1442883,52.750333 Z" id="Fill-359-Copy" fill="#33A5DB"></path>
                                                <path d="M24.3128681,26.9387882 L24.3128681,28.7667576 C24.3128681,29.8184093 23.5405855,30.709622 22.5015709,30.858675 L4.70805748,33.4122426 C3.5770306,33.5747518 2.52250828,32.8067148 2.32917919,31.6784665 L0.781512605,22.6638655 L24.3128681,26.9387882 Z" id="Fill-360-Copy" fill="#99D2ED"></path>
                                                <path d="M1.93358339,22.1488003 L3.35615468,30.4357328 C3.49985919,31.2772611 4.27731095,31.872438 5.15297801,31.7440868 L22.9444237,29.1905192 C23.724977,29.0787295 24.3122012,28.3997103 24.3122012,27.6109715 L24.3122012,26.2146348 L1.93358339,22.1488003 Z M4.92553202,32.7957385 C3.64149602,32.7957385 2.55389064,31.8765784 2.3367831,30.610663 L0.789116521,21.5960621 C0.76016885,21.4294126 0.814962657,21.2596578 0.934888725,21.1395873 C1.0527471,21.0205519 1.22539929,20.9719027 1.39081455,20.9988151 L24.9211362,25.2737377 C25.1682252,25.3182466 25.3460466,25.5325103 25.3460466,25.7830021 L25.3460466,27.6109715 C25.3460466,28.9120799 24.3773335,30.0310125 23.0912298,30.2152586 L5.29978406,32.7698613 C5.17365492,32.7874578 5.04855962,32.7957385 4.92553202,32.7957385 L4.92553202,32.7957385 Z" id="Fill-361-Copy" fill="#99D2ED"></path>
                                                <polygon id="Fill-362-Copy" fill="#008ED2" points="44.9809986 35.6557201 40.3286943 35.6557201 37.5714286 20.9915966 42.2237329 20.9915966"></polygon>
                                                <path d="M41.2745379,33.9834512 L44.8743876,33.9834512 L42.3114849,20.354418 L38.7116351,20.354418 L41.2745379,33.9834512 Z M45.5174395,35.0185414 C45.5133041,35.0195765 45.5060672,35.0185414 45.4977964,35.0185414 L40.8454921,35.0185414 C40.5973692,35.0185414 40.3833632,34.841541 40.337874,34.5972597 L37.5806082,19.9331362 C37.5516606,19.780978 37.5919805,19.6246794 37.6901959,19.5066791 C37.7884112,19.3876437 37.9352172,19.3193277 38.0882263,19.3193277 L42.7405307,19.3193277 C42.9886536,19.3193277 43.2026596,19.4963282 43.2481488,19.7406095 L45.9795684,34.2670659 C46.015753,34.337452 46.0343622,34.417154 46.0343622,34.5009963 C46.0343622,34.7866812 45.8038147,35.0185414 45.5174395,35.0185414 L45.5174395,35.0185414 Z" id="Fill-363-Copy" fill="#008ED2"></path>
                                                <path d="M0.781512605,57.4200112 C14.8242349,57.4200112 14.1160507,50.5190646 17.9071619,42.9287479 C21.698273,35.337396 39.5962048,31.0252101 39.5962048,31.0252101 L39.5962048,35.6179055 C39.5962048,35.6179055 24.6054463,38.032771 20.8143352,45.6241228 C17.0242579,53.2144396 14.8242349,62.0127066 0.781512605,62.0127066" id="Fill-364-Copy" fill="#008ED2"></path>
                                                <path d="M1.29843531,61.3757047 C1.01309398,61.3757047 0.781512605,61.1438445 0.781512605,60.8581596 C0.781512605,60.5724747 1.01309398,60.3406145 1.29843531,60.3406145 C13.3396328,60.3406145 16.3574276,53.8588794 19.5530438,46.9962311 C19.9841573,46.0718955 20.4152708,45.1454897 20.869129,44.2377156 C24.4110834,37.1442422 37.0343359,34.4975164 39.5962048,34.0275854 L39.5962048,30.5382962 C36.3943856,31.3901755 22.1273189,35.513975 18.8862135,42.0050259 C18.1573525,43.4655383 17.5980421,44.8970681 17.0563071,46.2809837 C14.8542164,51.916015 12.9529747,56.7830093 1.29843531,56.7830093 C1.01309398,56.7830093 0.781512605,56.5511491 0.781512605,56.2654642 C0.781512605,55.9787442 1.01309398,55.7479191 1.29843531,55.7479191 C12.2478921,55.7479191 13.8606909,51.617909 16.093797,45.9042109 C16.6427689,44.4975232 17.2113839,43.0442565 17.9609218,41.5423406 C21.8161314,33.8257428 39.2519343,29.5456447 39.9921676,29.3665741 C40.1462106,29.331381 40.3085243,29.3645039 40.4336196,29.4638726 C40.557681,29.5622061 40.6300502,29.7112591 40.6300502,29.870663 L40.6300502,34.4633584 C40.6300502,34.7169555 40.4460257,34.9332894 40.1948013,34.9736579 C40.0469614,34.9985001 25.4221842,37.4361376 21.7933868,44.701436 C21.3446979,45.6009294 20.9177197,46.5180194 20.4897077,47.4340742 C17.2992608,54.2874067 13.9981924,61.3757047 1.29843531,61.3757047" id="Fill-365-Copy" fill="#008ED2"></path>
                                                <path d="M43.8960018,36.0420168 L48.1461403,54.8754837 C48.2950141,55.5369064 47.7925652,56.1662413 47.1153965,56.1662413 C46.6677414,56.1662413 46.2697109,55.8836616 46.1198033,55.4623799 L39.2436975,36.0420168 L43.8960018,36.0420168 Z" id="Fill-366-Copy" fill="#008ED2"></path>
                                                <path d="M40.4925167,35.4048381 L47.1236011,54.1347961 C47.2538657,54.5053584 47.806973,54.5995516 48.0530282,54.2910947 C48.1564127,54.1617084 48.194665,53.996094 48.1584804,53.835655 L44.0003542,35.4048381 L40.4925167,35.4048381 Z M47.6312192,55.5290626 C46.9664566,55.5290626 46.3709617,55.1077809 46.1486849,54.4805162 L39.2725791,35.0601531 C39.2177853,34.9017843 39.2415637,34.7258189 39.3387452,34.589187 C39.4359267,34.45152 39.5930712,34.3697479 39.7605541,34.3697479 L44.4128585,34.3697479 C44.6537445,34.3697479 44.8646489,34.5374325 44.9163412,34.7734331 L49.1664797,53.6069 C49.2719319,54.0757959 49.1613105,54.5612532 48.8614953,54.936991 C48.5606463,55.3127288 48.1119574,55.5290626 47.6312192,55.5290626 L47.6312192,55.5290626 Z" id="Fill-367-Copy" fill="#008ED2"></path>
                                            </g>
                                            <g id="back-wheel" transform="translate(0.000000, 46.000000)">
                                                <path d="M12.9403138,22.8482137 C7.13010257,22.8482137 2.40336134,18.1157811 2.40336134,12.298574 C2.40336134,6.48033174 7.13010257,1.74789916 12.9403138,1.74789916 C18.750525,1.74789916 23.4772662,6.48033174 23.4772662,12.298574 C23.4772662,18.1157811 18.750525,22.8482137 12.9403138,22.8482137" id="back-wheel1" class="play" fill="#FFFFFF"></path>
                                                <path d="M13.9741592,1.74789916 C7.58396071,1.74789916 2.40336134,6.93473636 2.40336134,13.3326291 C2.40336134,19.731557 7.58396071,24.9183942 13.9741592,24.9183942 C20.3643577,24.9183942 25.5449571,19.731557 25.5449571,13.3326291 C25.5449571,6.93473636 20.3643577,1.74789916 13.9741592,1.74789916 M13.9741592,3.81807964 C19.2147216,3.81807964 23.4772662,8.0867918 23.4772662,13.3326291 C23.4772662,18.5795016 19.2147216,22.8482137 13.9741592,22.8482137 C8.73359681,22.8482137 4.47105217,18.5795016 4.47105217,13.3326291 C4.47105217,8.0867918 8.73359681,3.81807964 13.9741592,3.81807964" id="back-wheel2" class="play" fill="#005AA4"></path>
                                                <path d="M12.818813,1.11072049 C6.72326045,1.11072049 1.76493785,6.07604838 1.76493785,12.1779054 C1.76493785,18.2807974 6.72326045,23.2461253 12.818813,23.2461253 C18.9143656,23.2461253 23.8726882,18.2807974 23.8726882,12.1779054 C23.8726882,6.07604838 18.9143656,1.11072049 12.818813,1.11072049 M12.818813,24.2812155 C6.15361163,24.2812155 0.731092437,18.8521672 0.731092437,12.1779054 C0.731092437,5.50467857 6.15361163,0.0756302521 12.818813,0.0756302521 C19.4840144,0.0756302521 24.9065336,5.50467857 24.9065336,12.1779054 C24.9065336,18.8521672 19.4840144,24.2812155 12.818813,24.2812155" id="back-wheel3" class="play" fill="#005AA4"></path>
                                                <path d="M16.4668563,12.1291417 C16.4668563,14.1682695 14.8158052,15.8213086 12.7791297,15.8213086 C10.7434881,15.8213086 9.09243697,14.1682695 9.09243697,12.1291417 C9.09243697,10.0900139 10.7434881,8.43697479 12.7791297,8.43697479 C14.8158052,8.43697479 16.4668563,10.0900139 16.4668563,12.1291417" id="back-wheel4" class="play" fill="#005AA4"></path>
                                                <path d="M13.2960524,9.47206503 C11.5488537,9.47206503 10.1262824,10.8963492 10.1262824,12.6456517 C10.1262824,14.3959893 11.5488537,15.8202735 13.2960524,15.8202735 C15.0432512,15.8202735 16.4658225,14.3959893 16.4658225,12.6456517 C16.4658225,10.8963492 15.0432512,9.47206503 13.2960524,9.47206503 M13.2960524,16.8553637 C10.978171,16.8553637 9.09243697,14.9673591 9.09243697,12.6456517 C9.09243697,10.3249794 10.978171,8.43697479 13.2960524,8.43697479 C15.6139338,8.43697479 17.4996679,10.3249794 17.4996679,12.6456517 C17.4996679,14.9673591 15.6139338,16.8553637 13.2960524,16.8553637" id="back-wheel5" class="play" fill="#005AA4"></path>
                                            </g>
                                            <g id="pedal" transform="translate(60.000000, 39.000000)" fill="#005AA4">
                                                <path d="M3.12188686,15.1075152 C3.05985614,15.1075152 2.99782541,15.0961292 2.93682854,15.0733572 C2.67009642,14.9708833 2.53776421,14.6717422 2.63908106,14.4046889 L7.23142238,2.39143161 C7.33273923,2.12437832 7.6325544,1.99085168 7.89825267,2.09332562 C8.16498479,2.19476446 8.29835085,2.49390554 8.19600015,2.76095882 L3.60469267,14.7752513 C3.52612042,14.9812342 3.32968979,15.1075152 3.12188686,15.1075152" class="play" id="pedal-crank"></path>
                                                <polygon class="play" id="pedal-foot" points="14.1107076 3.81433658 2.9348387 5.92074522 2.60504202 4.16523217 13.7809109 2.05882353"></polygon>
                                                <path d="M2.05325017,3.42278248 L2.19178545,4.16183691 L12.3513843,2.24795506 L12.212849,1.50890063 L2.05325017,3.42278248 Z M1.77824729,5.28387474 C1.53529361,5.28387474 1.31818608,5.11101467 1.27166303,4.86259301 L0.941866347,3.10604487 C0.916020212,2.97044805 0.946001729,2.83174595 1.02250629,2.71788603 C1.1000447,2.60506119 1.21893692,2.52742942 1.35333682,2.50155217 L12.5292057,0.396178616 C12.8042086,0.341318833 13.0802453,0.526599986 13.1329715,0.809179622 L13.4627681,2.56469267 C13.4886143,2.70028949 13.4586328,2.84002668 13.3821282,2.95285151 C13.3045898,3.06567635 13.1856976,3.14330812 13.0512977,3.16918537 L1.87542876,5.27455892 C1.84337955,5.28076947 1.81133034,5.28387474 1.77824729,5.28387474 L1.77824729,5.28387474 Z" class="play" id="pedal-foot2"></path>
                                            </g>
                                        </g>
                                        <g id="right-leg" transform="translate(897.000000, 216.000000)">
                                            <path d="M0.865546218,9.31815701 L4.5780851,0.302521008 C16.3029259,3.92326667 24.2345879,19.3937254 24.2345879,19.3937254 L32.7617449,22.2050305 L19.3548376,25.6994952 C19.3548376,25.6994952 19.2659269,23.8891223 18.9743825,20.9411853 C18.9743825,20.9411853 14.1763059,13.6738167 0.865546218,9.31815701" class="play" id="right-shin" fill="#EBE4C7"></path>
                                            <path d="M2.07253528,9.5204473 C15.001806,13.8978439 19.7264796,20.8764223 19.923944,21.1755634 C19.9704671,21.2449145 19.9983809,21.3256515 20.0076855,21.4094938 C20.1958454,23.3306213 20.3012976,24.7818178 20.3509222,25.5581355 L31.4502865,22.6660934 L24.5896884,20.4044212 C24.4604577,20.3619825 24.3539716,20.2708946 24.2919409,20.149789 C24.2144025,19.9986658 16.526728,5.22792807 5.39117905,1.46123469 L2.07253528,9.5204473 Z M19.8722518,26.7360682 C19.7626641,26.7360682 19.6561781,26.7019102 19.5662335,26.6356644 C19.4411382,26.5425063 19.3635998,26.3996639 19.3563629,26.2433652 C19.355329,26.2268038 19.2664183,24.4661153 18.9914155,21.6465295 C18.3535328,20.7667028 13.3393826,14.2942835 1.22271435,10.3288528 C1.08521291,10.2833088 0.974591449,10.1849752 0.913594569,10.0535188 C0.85259769,9.92309741 0.849496154,9.77300932 0.905323806,9.63948268 L4.61786268,0.62384668 C4.72021338,0.376460112 4.99314857,0.245003651 5.24747454,0.32677578 C16.4781373,3.79536318 24.1203226,17.6138179 25.1117803,19.4873312 L33.4414728,22.2323906 C33.6596142,22.3048469 33.8033187,22.5108298 33.7971156,22.7395848 C33.7898787,22.9693748 33.6317004,23.167077 33.4104574,23.224007 L20.0025163,26.7184717 C19.9590948,26.7308927 19.9156733,26.7360682 19.8722518,26.7360682 L19.8722518,26.7360682 Z" id="right-shin2" class="play" fill="#EBE4C7"></path>
                                            <path d="M37.4195347,25.0140331 L19.8400273,28.6016559 C19.8400273,28.6016559 18.7668958,26.0636146 19.541246,24.2108031 C25.419691,24.7925238 29.3131528,23.3040641 30.4472812,22.0681663 C30.4472812,22.0681663 38.2321372,21.5609721 37.4195347,25.0140331" class="play" id="right-shoe" fill="#002776"></path>
                                            <path d="M20.4149949,23.6085453 C20.0996721,24.7771621 20.4687549,26.1797094 20.6899978,26.8504479 L37.4775796,23.4242992 C37.4899858,23.1437897 37.4103797,22.9036488 37.2397952,22.68835 C36.6050141,21.88512 34.6376063,21.4048381 31.9764882,21.4048381 C31.6342853,21.4048381 31.3592825,21.4131189 31.188698,21.4203645 C29.9573881,22.5817357 26.9096118,23.7037736 22.6274241,23.7037736 C21.9068338,23.7037736 21.1655667,23.6716858 20.4149949,23.6085453 M20.3560657,27.964205 C20.1523982,27.964205 19.9632045,27.8430994 19.8804968,27.6485025 C19.8339738,27.5367127 18.7318946,24.8858466 19.5806817,22.8549996 C19.6685585,22.6459113 19.8887676,22.5320514 20.1079428,22.5403321 C20.962933,22.6252095 21.8106862,22.6686833 22.6274241,22.6686833 C27.3913838,22.6686833 29.9139666,21.2920133 30.5828646,20.5643449 C30.6728091,20.4660113 30.7968706,20.4059761 30.9302366,20.3966602 C30.9302366,20.3966602 31.3448086,20.3697479 31.9764882,20.3697479 C34.1423943,20.3697479 36.9554877,20.6606083 38.0513638,22.045559 C38.4762743,22.5838059 38.6106742,23.2514391 38.4390558,23.9770374 C38.3935666,24.1747396 38.2364221,24.3258628 38.0389577,24.3662313 L20.4594503,27.9538541 C20.4253334,27.9610997 20.3912165,27.964205 20.3560657,27.964205" id="right-shoe2" class="play" fill="#002776"></path>
                                        </g>
                                        <g id="hand" transform="translate(901.000000, 202.000000)">
                                            <path d="M2.37495633,1.11172108 L10.0264462,0.924369748 L11.0158363,6.55940102 C11.0158363,6.55940102 6.20431974,8.33665097 5.16944048,6.19815453 C5.16944048,6.19815453 1.8073752,6.11948767 0.210084034,4.72418602" id="Fill-396-Copy" fill="#EBE4C7"></path>
                                            <path d="M8.01460488,8.29344556 C6.95491333,8.29344556 5.93760945,8.03674318 5.38140061,7.21902188 C4.49436125,7.1641621 1.834277,6.89607373 0.386893422,5.63222854 C0.171853576,5.44384212 0.150142823,5.11778869 0.337268842,4.90145483 C0.524394862,4.68615606 0.852123858,4.66441917 1.0671637,4.8517705 C2.50317498,6.10629988 5.66674195,6.19738782 5.69879116,6.19842291 C5.89212025,6.20256327 6.06684012,6.3153881 6.15161545,6.49031835 C6.7584827,7.74484773 9.56227146,7.16209192 10.9476243,6.7294242 L10.1102095,1.97111436 L2.904307,2.1470797 C2.63964258,2.16157097 2.38324892,1.92764057 2.37497815,1.64092057 C2.36774123,1.35627076 2.59415338,1.1182 2.87949471,1.11198946 L10.5309846,0.924638127 C10.7635998,0.916357405 11.0075874,1.10060347 11.0520427,1.3521304 L12.0424666,6.98716167 C12.0858881,7.23454824 11.946319,7.47675935 11.7116361,7.56267184 C11.3983809,7.67860195 9.65428371,8.29344556 8.01460488,8.29344556" id="Fill-397-Copy" fill="#EBE4C7"></path>
                                            <path d="M5.74200804,7.41635731 C5.4794113,7.41635731 5.254033,7.2155498 5.22922071,6.94849652 C5.20234073,6.6638467 5.4111775,6.41128469 5.6934173,6.38333725 C5.71409421,6.38126707 7.70631432,6.16803848 8.27286161,4.60919258 C8.37107692,4.34006911 8.66675671,4.2034372 8.93555652,4.29970059 C9.20435633,4.39803417 9.34185777,4.69406998 9.2446763,4.96319344 C8.45171686,7.14309349 5.89811869,7.40393623 5.79059877,7.41428713 C5.77405724,7.41532222 5.75854956,7.41635731 5.74200804,7.41635731" id="Fill-410-Copy" fill="#D3C09A"></path>
                                            <path d="M8.2204922,7.68929928 C8.09849844,7.68929928 7.97650468,7.64686058 7.87828936,7.55887791 L7.07395763,6.84673583 C6.85995163,6.65731431 6.83927472,6.33126089 7.02950228,6.11596212 C7.21766215,5.90066335 7.54539114,5.88203172 7.7583633,6.07248833 L8.56269503,6.78463041 C8.77670103,6.97405193 8.79737794,7.30010535 8.60715038,7.51436903 C8.50479969,7.63029914 8.36316286,7.68929928 8.2204922,7.68929928" id="Fill-411-Copy" fill="#D3C09A"></path>
                                        </g>
                                        <g id="biker-body" transform="translate(858.000000, 182.000000)">
                                            <polygon id="Fill-368-Copy" class="play" fill="#4CB0E0" points="21.3568173 9.67066059 19.9652614 10.3465745 18.1260504 6.54986351 19.5176063 5.87394958"></polygon>
                                            <path d="M19.3336525,5.63525156 L20.7210731,8.50141643 L21.183202,8.27680185 L19.7947476,5.41063697 L19.3336525,5.63525156 Z M20.4812209,9.71040184 C20.4243594,9.71040184 20.3674979,9.70108602 20.3116703,9.68141931 C20.1824396,9.63587534 20.0769874,9.54168213 20.0159905,9.4174713 L18.1778134,5.62076029 C18.0537519,5.36405791 18.160238,5.05456593 18.4166316,4.92932001 L19.8081876,4.25340608 C19.9332829,4.19233576 20.0738858,4.18612522 20.2041504,4.2306341 C20.333381,4.27617807 20.4388333,4.36933619 20.4998301,4.49354702 L22.3390411,8.29025803 C22.4631026,8.54696041 22.3566165,8.85645239 22.099189,8.98169831 L20.7065992,9.65864732 C20.6362977,9.6928053 20.5597932,9.71040184 20.4812209,9.71040184 L20.4812209,9.71040184 Z" id="Fill-369-Copy" fill="#4CB0E0"></path>
                                            <polygon id="Fill-370-Copy" class="play" fill="#4CB0E0" points="24.7013552 14.6874673 23.3097992 15.3633812 21.4705882 11.5666702 22.8621442 10.8907563"></polygon>
                                            <path d="M22.6783953,12.3233685 L24.0668497,15.1895334 L24.5279447,14.9659539 L23.1394903,12.099789 L22.6783953,12.3233685 Z M23.8269975,16.3985188 C23.6357361,16.3985188 23.4517116,16.2908694 23.3617671,16.1055882 L21.5225561,12.3088772 C21.4625931,12.1857015 21.4543223,12.0438941 21.4987776,11.9134728 C21.5442668,11.7840865 21.6383468,11.6785073 21.7624082,11.6174369 L23.1539642,10.9425581 C23.4113917,10.8183473 23.7194776,10.9249616 23.8445729,11.182699 L25.6837839,14.97941 C25.7437469,15.1036209 25.7520177,15.2443931 25.7075623,15.3748145 C25.6620731,15.5042008 25.5679932,15.6108151 25.4439317,15.6708503 L24.0523758,16.3467643 C23.9800066,16.3819573 23.9035021,16.3985188 23.8269975,16.3985188 L23.8269975,16.3985188 Z" id="Fill-371-Copy" class="play" fill="#4CB0E0"></path>
                                            <path d="M31.5884347,30.0880913 C26.4729676,16.9217434 20.2667935,6.80684156 16.0879904,1.49682863 C16.0879904,1.49682863 11.5959321,6.08020822 2.33784638,0.857142857 C-0.286053274,13.5504545 2.90439367,17.3802884 8.31037134,36.1444043 C9.81771795,41.3757504 11.4842768,51.8984778 26.7748504,48.620347 C34.2092328,47.4123966 43.6854598,47.4465546 46.6153777,49.2414011 L49.5442618,32.9583965 C49.5442618,32.9583965 39.3060907,28.4619645 31.5884347,30.0880913" id="torso" class="play" fill="#002776"></path>
                                            <path d="M2.54901522,2.16679387 C0.754259584,11.3573601 2.12824014,15.6643706 5.33936399,25.7275179 C6.31324637,28.778964 7.41635943,32.2382356 8.649737,36.5183337 C8.75415539,36.8785451 8.85960762,37.2635987 8.96816139,37.668319 C10.2191143,42.2765407 12.1100176,49.241663 21.2967679,49.241663 C22.8692468,49.241663 24.6247163,49.03568 26.5094165,48.6319948 C29.8518387,48.0875373 33.5695468,47.7915015 36.9988121,47.7915015 C39.4562626,47.7915015 43.693995,47.9550458 46.0728733,48.9828904 L48.8042929,33.7939762 C47.2307801,33.1542904 40.9760154,30.7684074 35.1079088,30.7684074 C33.8197374,30.7684074 32.6184091,30.8843375 31.5370068,31.1120574 C31.2888839,31.1576014 31.0417948,31.0282151 30.9497826,30.7932496 C24.9472761,15.3424576 18.2293486,5.85171513 15.8504703,2.75472513 C15.0678493,3.33955112 13.2596537,4.3912028 10.3907327,4.3912028 C7.97153441,4.3912028 5.33626246,3.64386765 2.54901522,2.16679387 M46.4584976,50.2767532 C46.3644177,50.2767532 46.2703377,50.2508759 46.188664,50.2001565 C44.7629911,49.3275755 41.4143658,48.8265918 36.9988121,48.8265918 C33.6233068,48.8265918 29.9655617,49.1184872 26.6996441,49.6484534 C24.7694547,50.0624895 22.9426498,50.2767532 21.2967679,50.2767532 C11.3191259,50.2767532 9.22352121,42.5539449 7.97050057,37.9405477 C7.86298064,37.5410029 7.7595961,37.1611248 7.65621156,36.8050537 C6.42696937,32.5384117 5.32695785,29.0874209 4.35410931,26.0411503 C1.10473318,15.8548272 -0.379868834,11.2052019 1.674382,1.27040573 C1.7084989,1.10893165 1.81601882,0.973334826 1.96696025,0.90398378 C2.11790168,0.834632734 2.29158771,0.842913456 2.43425838,0.924685585 C5.29594248,2.53839127 7.97256826,3.35611256 10.3907327,3.35611256 C13.8199979,3.35611256 15.5454859,1.66788038 15.5630613,1.65028384 C15.6674797,1.54573973 15.7967103,1.4857045 15.9600579,1.49812558 C16.106864,1.5064063 16.2453993,1.57782753 16.3363777,1.69375763 C18.36685,4.27320252 25.4383527,13.8922961 31.7551481,30.0148617 C32.7910612,29.8285455 33.9169189,29.7333172 35.1079088,29.7333172 C42.0718915,29.7333172 49.291234,32.8686055 49.5951846,33.0021322 C49.8143598,33.0983956 49.9384213,33.332326 49.8960336,33.5683265 L46.9671496,49.850296 C46.937168,50.0179806 46.8255127,50.1608231 46.6704359,50.2312092 C46.6022021,50.2612269 46.5298329,50.2767532 46.4584976,50.2767532" id="torso2" class="play" fill="#002776"></path>
                                        </g>
                                        <g id="arm" transform="translate(867.000000, 189.000000)">
                                            <path d="M0.764705882,11.6941404 C5.45216099,16.3499763 12.4637006,18.6996311 18.9500467,19.8651428 C27.6209082,21.4219185 35.3551057,20.8619347 35.3551057,20.8619347 C38.6809864,16.3789588 36.349665,13.7187769 36.349665,13.7187769 C36.349665,13.7187769 23.5372188,12.9310732 13.0643648,6.93376037 C10.1210069,5.24863345 7.36270731,3.15154062 5.12546584,0.546218487" id="Fill-398-Copy" class="play" fill="#002776"></path>
                                            <path d="M32.340544,21.9916257 C29.2338385,21.9916257 24.4461004,21.8011691 19.3771563,20.8923598 C11.2035745,19.4235668 4.99326508,16.6267529 0.91681262,12.578515 C0.715212764,12.3777075 0.713145073,12.050619 0.915778774,11.8467062 C1.11634478,11.6458987 1.44303993,11.6417583 1.64670748,11.844636 C5.56911698,15.7417508 11.5964357,18.4423012 19.5591131,19.8727959 C27.2261107,21.249466 34.2376503,20.9534302 35.597157,20.8778686 C38.0163553,17.4838077 36.9670022,15.3152936 36.5906824,14.734608 C34.7576745,14.585555 22.9863107,13.4324645 13.3239914,7.89990712 C10.0694461,6.03674469 7.35250032,3.8506341 5.25069259,1.4005755 C5.06356657,1.18320655 5.08941271,0.857153122 5.3054864,0.670836878 C5.52362778,0.485555725 5.84928909,0.509362801 6.03434741,0.725696661 C8.06068442,3.08466732 10.6856179,5.19625141 13.8378126,7.00248388 C24.0801191,12.8673052 36.7716054,13.7119388 36.8977345,13.7202196 C37.0362698,13.7285003 37.1644667,13.7916408 37.255445,13.8951498 C37.3608973,14.0162554 39.8204155,16.9238238 36.2867319,21.6873091 C36.1967873,21.8084147 36.0603197,21.8839763 35.9093783,21.8953623 C35.8773291,21.8974325 34.5240255,21.9916257 32.340544,21.9916257" id="Fill-399-Copy" class="play" fill="#002776"></path>
                                            <path d="M12.5648602,7.96822308 C12.4769834,7.96822308 12.3891065,7.94648619 12.3084666,7.89990712 C9.0539212,6.03674469 6.33697546,3.84959901 4.23413389,1.4005755 C4.04804171,1.18320655 4.072854,0.857153122 4.28892769,0.670836878 C4.50706908,0.485555725 4.83273038,0.509362801 5.01778871,0.725696661 C7.04412572,3.08466732 9.66905922,5.19625141 12.8212539,7.00144879 C13.0693768,7.14325616 13.155186,7.45999377 13.0135491,7.70738034 C12.9184354,7.87402987 12.7437155,7.96822308 12.5648602,7.96822308" id="Fill-400-Copy" class="play" fill="#4D689F"></path>
                                            <path d="M19.4690411,19.7851572 C19.4390595,19.7851572 19.4070103,19.7820519 19.3770288,19.7768765 C11.203447,18.3080834 4.99313758,15.5123047 0.917718959,11.4640667 C0.715085258,11.2632592 0.713017568,10.9351356 0.915651269,10.7322579 C1.11621728,10.5314504 1.44291243,10.5273101 1.64657998,10.7301877 C5.57002332,14.6273025 11.5963082,17.3278529 19.5589856,18.7583477 C19.8401916,18.8090671 20.0273176,19.0771555 19.9766592,19.3587 C19.93117,19.6091918 19.7140624,19.7851572 19.4690411,19.7851572" id="Fill-401-Copy" class="play" fill="#4D689F"></path>
                                        </g>
                                        <g id="neck" transform="translate(856.000000, 169.000000)" fill="#EBE4C7">
                                            <path d="M0.0588235294,4.38413642 C0.0588235294,4.38413642 4.08461757,7.5887758 5.59403187,12.2114888 L4.25726975,15.3291806 C4.25726975,15.3291806 12.8712697,21.4413885 17.9826015,15.8467258 C15.3690403,12.7766481 10.7870374,10.5832919 12.5590484,4.24750451 C14.3310595,-2.08724777 0.567475473,1.4796732 0.567475473,1.4796732 L0.0588235294,4.38413642 Z" class="play" id="neck1"></path>
                                            <path d="M5.42004667,15.6523794 C6.46939976,16.3189776 9.73324973,18.2059471 13.0250135,18.2059471 L13.0260474,18.2059471 C14.9148829,18.2059471 16.5163095,17.5807526 17.7962101,16.3479601 C17.3340812,15.8459413 16.8254293,15.3615191 16.2929989,14.8543249 C13.8582929,12.538828 11.0989595,9.91590933 12.5794262,4.62659819 C12.8130752,3.7881751 12.7531122,3.15055951 12.3943678,2.67648818 C11.8174821,1.91569685 10.4073169,1.51408184 8.31584767,1.51408184 C5.605105,1.51408184 2.52321182,2.18689049 1.53588945,2.4197858 L1.13682512,4.69594924 C2.04764293,5.47847746 5.25980063,8.45436191 6.60379967,12.5688456 C6.64205195,12.687881 6.63688272,12.8183024 6.5862243,12.9331974 L5.42004667,15.6523794 Z M13.0260474,19.2410373 L13.0250135,19.2410373 C8.714912,19.2400022 4.6467303,16.3903988 4.47614581,16.2692932 C4.27764749,16.1274859 4.20321062,15.8666431 4.30039209,15.6420285 L5.55858195,12.7065126 C4.06881071,8.37983541 0.29217342,5.3366701 0.25392114,5.30665248 C0.1050474,5.18865219 0.0337120665,4.99819559 0.0667951197,4.81084426 L0.576480908,1.90741613 C0.611631652,1.70764371 0.759471547,1.54720473 0.95693602,1.49545021 C1.11614821,1.4540466 4.91966549,0.478991597 8.31584767,0.478991597 C10.7784674,0.478991597 12.4274509,1.00792271 13.2183426,2.05129367 C13.777653,2.78931302 13.8975791,3.74987676 13.5750193,4.90503747 C12.2620356,9.59399626 14.566477,11.7852823 17.0042845,14.1038844 C17.6514718,14.7197631 18.3214036,15.3553085 18.8941539,16.0281172 C19.0626707,16.2268545 19.0575015,16.5208202 18.8817478,16.7133469 C17.3495889,18.3912282 15.3801134,19.2410373 13.0260474,19.2410373 L13.0260474,19.2410373 Z" class="play" id="neck2"></path>
                                        </g>
                                        <g id="head" transform="translate(847.000000, 132.000000)">
                                            <path d="M20.4677048,2.36134454 C26.1972761,7.07618059 28.3404376,23.0993775 34.4463287,22.6211658 C34.4463287,22.6211658 33.6068462,25.1043473 33.0713143,25.9086124 L33.4383294,29.1888134 C33.4383294,29.1888134 30.0028611,30.5965361 27.6219151,29.7146393 C27.6219151,29.7146393 29.3877231,32.3323825 32.0560781,33.8995091 C32.0560781,33.8995091 29.3525723,38.6598891 20.5648863,42.3458455 C11.7782341,46.0318018 1.80576127,37.5896058 1.80576127,37.5896058 L0.697478992,16.0266059 L20.4677048,2.36134454 Z" id="head1" class="play" fill="#EBE4C7"></path>
                                            <path d="M2.82776078,36.1781309 C3.90916308,37.039326 9.94682029,41.605109 16.3080711,41.605109 C17.9332761,41.605109 19.4726719,41.3049329 20.8828371,40.7138963 C27.9140197,37.7638891 30.975236,34.1172662 31.8457338,32.9031054 C29.3727756,31.2883646 27.7816875,28.9542361 27.7103522,28.8507271 C27.584223,28.6633757 27.5935277,28.4180594 27.7320629,28.2410589 C27.8705982,28.0640585 28.1094165,27.9967776 28.3182533,28.0754445 C28.781416,28.2462344 29.3334895,28.333182 29.9610336,28.333182 C31.3463865,28.333182 32.7513824,27.9119002 33.396502,27.6893558 L33.074976,24.811805 C33.061536,24.6896643 33.0904837,24.5675237 33.1587175,24.4671199 C33.4678373,24.0023644 33.9320339,22.8109755 34.239086,21.967377 C30.8625468,21.565762 28.7648745,16.7381011 26.5483099,11.6392465 C24.8951911,7.83528991 23.1872785,3.90712244 20.9479693,1.86074904 L1.74532463,15.1347463 L2.82776078,36.1781309 Z M16.3080711,42.6401993 C8.93675332,42.6401993 2.26948426,37.0672734 1.9882783,36.8302378 C1.87972453,36.7381147 1.81459227,36.6045881 1.80735536,36.4607105 L0.698039227,14.8987457 C0.689768464,14.7207102 0.773509943,14.5488852 0.920315991,14.4474464 L20.6905418,0.781149914 C20.8818032,0.648658363 21.1350954,0.661079446 21.3129168,0.80599208 C23.8892595,2.92689198 25.7233013,7.14591981 27.4963462,11.2272806 C29.6725908,16.2309069 31.7268416,20.9591991 34.6960456,20.9591991 C34.7704825,20.9591991 34.8469871,20.9560938 34.9224578,20.9509184 C35.0961438,20.9426376 35.2656945,21.0119887 35.3711467,21.1486206 C35.4776328,21.2852525 35.5076143,21.4674284 35.4528205,21.6320077 C35.3701128,21.8773241 34.6691657,23.9319783 34.1222614,24.8739104 L34.4685996,27.9771109 C34.4944458,28.207936 34.3652151,28.4263401 34.1512091,28.5143228 C34.0653999,28.5484807 32.0411306,29.3682722 29.9610336,29.3682722 C29.7728738,29.3682722 29.590917,29.3610266 29.4141294,29.3475704 C30.1605658,30.2170462 31.3598265,31.4322421 32.8330562,32.2975776 C33.0780776,32.4414551 33.161819,32.7540524 33.0212161,33.0004039 C32.9074931,33.2012114 30.1295504,37.957451 21.2829352,41.6682495 C19.7445733,42.3131108 18.0718114,42.6401993 16.3080711,42.6401993 L16.3080711,42.6401993 Z" id="head2" class="play" fill="#EBE4C7"></path>
                                            <path d="M21.2823026,16.9294779 C21.2306104,16.9294779 21.1778842,16.9211972 21.126192,16.9056708 C20.8542906,16.8197583 20.7023154,16.5278629 20.7891584,16.2556342 C20.8263768,16.1397041 21.7227208,13.4122413 24.7994447,12.4206248 C25.0723799,12.3316071 25.3618566,12.4816951 25.4497335,12.7539239 C25.5376104,13.0261526 25.3887366,13.3180481 25.1168353,13.4049956 C22.5415263,14.235138 21.78165,16.5454594 21.7754469,16.5682314 C21.7051454,16.7887056 21.5014779,16.9294779 21.2823026,16.9294779" id="head3" class="play" fill="#002776"></path>
                                            <path d="M26.8589706,22.395422 L26.8382937,22.4037027 C26.2738141,22.6407384 25.625593,22.3747202 25.3888425,21.8095609 L24.1957848,18.9578873 C23.9590342,18.3937631 24.2247325,17.7437264 24.7892121,17.5066908 L24.809889,17.4984101 C25.3733348,17.2613744 26.0225897,17.5273926 26.2593403,18.0925519 L27.4523979,20.9442255 C27.6891485,21.5093847 27.4234502,22.1583863 26.8589706,22.395422" id="head4" class="play" fill="#008ED2"></path>
                                        </g>
                                        <g id="hair" transform="translate(832.000000, 129.000000)" fill="#002776">
                                            <path d="M37.5308704,5.84066653 C32.9747137,1.14239193 23.1221669,1.00576002 15.5906031,4.16485543 C5.90450538,8.22758463 -1.04603733,19.8785604 4.02187289,31.9891162 C9.09081695,44.1007071 25.7398635,44.9981304 25.7398635,44.9981304 C25.7398635,44.9981304 27.5718376,41.4467357 26.1451309,37.0765847 L24.3348676,31.4663956 L21.2343652,27.9884924 C21.2343652,27.9884924 24.8249103,27.4750877 25.114387,22.7157427 C25.114387,22.7157427 37.3272029,18.2327669 38.7621803,7.43988096 C38.7621803,7.43988096 38.523362,6.88300241 37.5308704,5.84066653" id="head5" class="play"></path>
                                            <path d="M25.1094286,1.37962806 C21.5891849,1.37962806 17.8652738,2.12903339 14.6241684,3.48810688 C2.56229395,8.54762798 -0.587833024,21.2637116 3.33250878,30.6354186 C7.81629634,41.3506728 21.8466124,43.0803086 24.2513369,43.2987127 C24.6286904,42.373342 25.5932682,39.4688788 24.4870536,36.0820635 L22.7109072,30.5753834 L19.682774,27.1782172 C19.555611,27.0353748 19.5173587,26.8356024 19.582491,26.6554967 C19.6486571,26.476426 19.8068354,26.3480749 19.9960292,26.3211625 C20.1231921,26.3014958 23.1730361,25.7849858 23.4314975,21.5297298 C23.4439036,21.3247819 23.5772697,21.1467464 23.7695649,21.0742901 C23.8874233,21.0308163 35.5833164,16.6161564 37.0617154,6.38014901 C36.9448909,6.18451696 36.6419741,5.72700707 35.9896177,5.04281242 C33.7006839,2.68280667 29.8351359,1.37962806 25.1094286,1.37962806 M24.5738966,44.3607152 C24.5656259,44.3607152 24.5563213,44.3607152 24.5459828,44.3596801 C24.3764322,44.3513994 7.51234579,43.3038881 2.37930331,31.0349635 C-0.017150356,25.3098793 0.0758957311,19.1479871 2.63983236,13.6847808 C4.9742553,8.70599679 9.19751381,4.6422325 14.2251041,2.53375368 C17.5902709,1.12189059 21.454785,0.344537815 25.1094286,0.344537815 C30.1173757,0.344537815 34.2465543,1.75847108 36.7350202,4.32549488 C37.7657641,5.40716419 38.0428347,6.01579725 38.0707485,6.08100793 C38.1079669,6.16692042 38.1214069,6.26111363 38.1090008,6.35427176 C36.7794756,16.3470329 26.38416,21.1125884 24.4384629,21.922029 C24.116937,25.3078092 22.1464276,26.6099527 20.9885207,27.0881644 L23.5545251,29.9677854 C23.602082,30.0216101 23.6382665,30.0847506 23.6610111,30.1541017 L25.4712745,35.7632557 C26.9465719,40.285565 25.1125301,43.9280475 25.0339579,44.0812409 C24.9450471,44.2541009 24.7672257,44.3607152 24.5738966,44.3607152" id="head6" class="play"></path>
                                            <path d="M3.99159664,31.3584422 C8.14558751,41.2849576 15.8746158,54.6055339 22.2813558,47.4737621 C22.2813558,47.4737621 26.9915555,51.9525976 31.7079583,49.7261185 C36.4253949,47.4996394 35.7595985,40.6732193 32.8751698,36.7274553 C28.0522809,30.1308251 27.1507677,22.0840336 27.1507677,22.0840336" id="head7" class="play"></path>
                                            <path d="M28.7547196,51.3907606 C25.7141803,51.3907606 23.1192283,49.5048262 22.1598198,48.7088418 C20.7062331,50.1579681 19.0986035,50.7448643 17.3803524,50.4540039 C11.2310399,49.410633 5.5262809,37.2545332 3.36037476,32.0770118 C3.24871945,31.8130638 3.3727809,31.5097823 3.63641148,31.4000628 C3.90210975,31.2893081 4.20295877,31.4135189 4.31254638,31.6764319 C8.68881402,42.1308433 13.637832,48.768877 17.5530046,49.4323699 C19.0603512,49.6911424 20.4322641,49.1042463 21.7421462,47.6468392 C21.8362261,47.5422951 21.9675245,47.4812248 22.1060598,47.4760493 C22.2228843,47.4553475 22.3810627,47.5205582 22.4823795,47.6168216 C22.5278687,47.6592603 26.9951147,51.8223932 31.3331301,49.7760198 C32.8042921,49.0825094 33.8091899,47.8248747 34.2372019,46.1407829 C34.9071337,43.5023379 34.1296819,40.0503119 32.3039109,37.550569 C27.455176,30.9197809 26.5195459,22.9940949 26.4823274,22.6597608 C26.4502782,22.376146 26.6549796,22.1204788 26.9382533,22.0873559 C27.2153238,22.0552681 27.4779206,22.2591809 27.5099698,22.5448658 C27.5192744,22.6235326 28.4569722,30.5367975 33.1371903,36.9398657 C35.1366474,39.6745742 35.9802652,43.4754255 35.2379642,46.3964502 C34.73138,48.3889989 33.5331531,49.881599 31.7735482,50.7127765 C30.7479736,51.1971987 29.7275682,51.3907606 28.7547196,51.3907606" id="head8" class="play"></path>
                                        </g>
                                        <g id="helmet" transform="translate(830.000000, 126.000000)">
                                            <path d="M29.2462184,42.1212044 C29.1511047,42.1212044 29.054957,42.1118886 28.9598433,42.0953271 L8.92908839,38.3213881 C8.08650438,38.1630193 7.53339708,37.3515086 7.69054158,36.50791 C7.84975378,35.6653466 8.65822089,35.1095031 9.50183875,35.268907 L27.1144292,38.5874063 L24.0480437,27.0378694 C23.8278346,26.2087621 24.3189112,25.358953 25.1470214,25.1384788 C25.9689285,24.9128291 26.8239186,25.4096724 27.0441277,26.2387797 L30.7442605,40.1690242 C30.8817619,40.6844991 30.7442605,41.2351671 30.3834484,41.6253962 C30.0857009,41.944204 29.6731966,42.1212044 29.2462184,42.1212044" id="helmet1" class="play" fill="#335291"></path>
                                            <path d="M43.4670006,47.5581853 C37.1160882,47.5581853 28.9094233,43.2470344 28.5558482,43.058648 C27.8001072,42.6591032 27.5106305,41.7192412 27.9117625,40.9615552 C28.3118607,40.2038691 29.2485246,39.9140439 30.0063333,40.3146238 C30.0869732,40.3570625 37.8904384,44.4529146 43.4535606,44.4529146 C43.5590128,44.4529146 43.6613635,44.4518795 43.7637142,44.4487742 C44.6042305,44.3814933 45.3351592,45.0988109 45.3579038,45.9558656 C45.38375,46.8129203 44.7086489,47.5281677 43.8526249,47.5519747 C43.7254619,47.5561151 43.5962312,47.5581853 43.4670006,47.5581853" id="helmet2" class="play" fill="#335291"></path>
                                            <path d="M7.41053984,25.8747373 L41.8293213,11.0336134 L44.6289747,11.0336134 C44.6289747,11.0336134 44.8957068,13.5695845 38.8963019,18.3744734 C34.2016099,22.1349563 29.245355,27.7741279 27.312064,30.0471861 C26.8261567,30.6185559 26.0383665,30.8307494 25.3363855,30.5688716 C22.3744184,29.4665005 14.538904,27.5619344 12.9633236,37.4977656 C12.7668929,38.7336634 11.6865245,39.6217708 10.4376392,39.6372972 C10.0344395,39.6424726 9.55473523,39.5586303 9.02954176,39.4095773 C6.540042,38.7015756 4.52094191,36.8684308 3.41369348,34.5260216 C2.73549088,33.0944918 2.02937447,31.3731367 1.70371316,29.8525891 C0.981055218,26.4823353 7.41053984,25.8747373 7.41053984,25.8747373" id="helmet3" class="play" fill="#DA3D00"></path>
                                            <path d="M41.7811423,11.0687037 L7.46057607,25.8673889 C7.41095149,25.8880907 7.35719153,25.9025819 7.30343157,25.9077574 C6.25304463,26.0081611 3.30865289,26.5608993 2.33270282,27.8961657 C2.03598919,28.3019211 1.94501079,28.7490801 2.05459841,29.2614498 C2.32029668,30.5056282 2.88270858,32.0406671 3.72529259,33.8220574 C4.80255952,36.100291 6.73171506,37.7792074 9.01651342,38.4302791 C9.50035307,38.566911 9.91285739,38.6372972 10.2405864,38.6372972 L10.2405864,39.1548423 L10.2736694,38.6372972 C11.293041,38.623841 12.1428619,37.9075586 12.2969049,36.9335386 C13.3824426,30.0915921 17.3699844,28.655922 20.5232129,28.655922 C22.4223869,28.655922 24.2026687,29.1693267 25.3616094,29.6009594 C25.8495844,29.7852054 26.4223348,29.6299419 26.7635038,29.229362 C28.6905916,26.9614793 33.684065,21.2798689 38.4180431,17.4872983 C42.5803048,14.1532726 43.6162179,11.9744076 43.8736454,11.0687037 L41.7811423,11.0687037 Z M10.2405864,39.6723874 C9.81670977,39.6723874 9.31012552,39.5895802 8.73323978,39.4250008 C6.16206623,38.692157 3.99616009,36.8124331 2.79069634,34.265076 C1.91399543,32.4112294 1.32677124,30.800629 1.04349759,29.4777836 C0.870845409,28.6714483 1.02385453,27.9323939 1.49942342,27.2833923 C2.8558286,25.4305808 6.50633676,24.9534042 7.12354247,24.8861233 L41.4689209,10.0760521 C41.5340532,10.0481047 41.6033208,10.0336134 41.6736223,10.0336134 L44.4732757,10.0336134 C44.7379401,10.0336134 44.9602169,10.2333859 44.9881307,10.4962988 C45.0181122,10.7861241 45.1101245,13.4545867 39.0641965,18.2957038 C34.3984522,22.0323795 29.4587388,27.6549897 27.5502601,29.9001004 C26.9330544,30.6277689 25.8950736,30.9031029 25.0007974,30.571874 C23.9224966,30.1692239 22.2693778,29.6910122 20.5232129,29.6910122 C16.5211973,29.6910122 14.0978636,32.1814393 13.319378,37.0960478 C13.085729,38.5689812 11.8109976,39.6516856 10.2891771,39.6723874 L10.2405864,39.6723874 Z" id="helmet4" class="play" fill="#AF0000"></path>
                                            <path d="M44.9435666,10.4210515 C34.5451495,20.2978825 16.4156363,29.2400271 2.01830508,29.2400271 C-1.31481253,17.0942782 3.61766394,6.81790233 12.8157866,2.01301343 C22.0149431,-2.79187547 34.2784174,1.61243351 40.1444562,8.81976686 C40.1444562,8.81976686 43.6109399,9.22034678 44.9435666,10.4210515" id="helmet5" class="play" fill="#DA3D00"></path>
                                            <path d="M21.8673653,1.03509024 C18.8340629,1.03509024 16.0385449,1.69340763 13.556282,2.99037571 C4.18240566,7.88635255 0.0315163225,18.1585881 2.91491118,29.238194 C17.4828269,29.0725796 35.0706051,19.8385396 44.6305736,10.9926584 C43.4499221,10.311569 41.3832652,9.94411195 40.5851365,9.85302401 C40.4528043,9.83646256 40.3287428,9.7691817 40.2439675,9.66463758 C36.0444874,4.50367764 28.6586958,1.03509024 21.8673653,1.03509024 M2.51894839,30.2753545 C2.28633317,30.2753545 2.08163178,30.1200909 2.0206349,29.8954764 C-1.19462434,18.180325 3.14649255,7.26012295 13.0776116,2.07225066 C15.709782,0.697650823 18.6665799,4.79616347e-14 21.8673653,4.79616347e-14 C28.8820064,4.79616347e-14 36.5066163,3.55035953 40.9149332,8.85105665 C41.7130618,8.96181131 44.5354598,9.42346156 45.7905482,10.5537801 C45.8970342,10.6510786 45.959065,10.7877105 45.9611326,10.9326231 C45.9632003,11.0765007 45.9042712,11.2152028 45.7988189,11.3145714 C35.880106,20.7369979 17.8281313,30.2753545 2.51894839,30.2753545" id="helmet6" class="play" fill="#AF0000"></path>
                                            <path d="M36.7707599,11.2412766 C36.536077,11.2412766 36.3003602,11.1615747 36.1059973,10.9990655 C33.9659373,9.19697337 31.2634653,7.79546119 28.496895,7.0512313 C27.9458554,6.9032134 27.6181264,6.33494886 27.7670002,5.78324576 C27.9158739,5.23050757 28.4844889,4.90445414 29.0344946,5.05247205 C32.1298278,5.8846846 35.0349334,7.39281108 37.4375902,9.41330723 C37.8738729,9.78179936 37.9307344,10.4349413 37.5637193,10.8727845 C37.3579841,11.1160307 37.0654058,11.2412766 36.7707599,11.2412766" id="helmet7" class="play" fill="#AF0000"></path>
                                            <path d="M10.3690334,12.5636211 C10.1364181,12.5636211 9.90276908,12.4849543 9.70840614,12.3245153 C9.27005569,11.9591284 9.21009265,11.3059865 9.57504009,10.8660731 C11.1712974,8.94494564 13.1397391,7.36539793 15.4255713,6.1698687 C16.3053737,5.71028864 17.2441054,5.33662106 18.2138524,5.0571467 C18.7690273,4.89981298 19.3355746,5.21655059 19.4927191,5.76618351 C19.6508975,6.31581643 19.3335069,6.88925642 18.7855689,7.04659014 C17.9481541,7.28673108 17.139687,7.60967923 16.3818783,8.00611879 C14.3410674,9.07226174 12.5855979,10.4799845 11.1650943,12.1909886 C10.9603929,12.436305 10.665747,12.5636211 10.3690334,12.5636211" id="helmet8" class="play" fill="#AF0000"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="ffe-grid__col--sm-12 ffe-grid__col--md-12 ffe-grid__col--center">
            <div class="sb1ds-example">
                <div class="sb1ds-svgcontainer">
                    <svg viewBox="0 0 842 617" style="margin-top: -15%; margin-bottom: -15%;" xmlns="http://www.w3.org/2000/svg" class="sb1ds-pensjon1">
                        <title>
                        Pensjon_illustrasjon
                        </title>
                        <g fill="none" fill-rule="evenodd">
                            <path class="play" id="vindu-bg" fill="#bfe3f4" d="M420.884 149.544h267.43v198.663h-267.43z"/>
                            <path class="play" id="vindu1" d="M421.925 150.22H687.48c.256 0 .463.207.463.462V349.69h8.327v-207.8H413.135v169.83h8.328V150.664c.01-.248.213-.444.462-.444" fill="#FFF"/>
                            <path class="play" id="vindu2" d="M610.682 328.4c1.62-4.7 12.49-4.007 26.833 1.547-19.662-14.347-22.9-22.91-19.43-28.694 3.47-5.786 20.818 4.396 28.683 11.8-21.744-30.313-20.356-40.263-15.5-45.586 4.86-5.322 20.59-2.934 24.52 20.827 5.09-22.215 12.955-12.496 15.268 3.24 3.276-17.208 9.336-24.428 15.96-26.03v84.233h-73.253c1.046-3.934 12.39-5.434 17.85-5.434-17.924-4.174-22.55-11.19-20.93-15.902zM557.886 219.8c-1.45-.027-2.606-1.226-2.578-2.678.014-.75.35-1.46.92-1.95 32.738-26.454 50.892 11.107 80.362-9.627 28.276-19.9 47.3-16.253 50.427-15.457v29.712h-129.13zm-144.75 91.923V141.89H696.27v207.837h-8.327V150.72c0-.256-.207-.464-.463-.464H421.925c-.255 0-.462.208-.462.463v161.057h.925v-76.382c1.795-4.37 4.395-7.266 7.633-7.266 6.478 0 7.866 15.04 7.866 20.13 1.62-26.148 13.88-39.57 20.125-39.338 6.247.23 8.097 21.29 3.24 42.578 10.41-19.206 21.05-24.76 26.37-20.363 5.32 4.397-4.543 22.446-10.252 28.23 18.117-14.81 20.2 1.853 7.476 11.803 18.043-9.256 20.82 8.1 12.49 21.29 9.023-9.72 15.963-3.01 16.888 5.553 1.85-25.455 10.872-37.72 17.58-37.83 6.708-.11 8.56 22.79 3.47 40.144 9.253-12.96 15.267-14.81 20.587-12.496 5.32 2.315.925 19.44-9.485 32.398 26.37-17.356 30.997 6.248 21.976 16.892 13.713-3.97 20.523 4.22 20.995 12.607H468.717l.092.926h236.565v10.765h-133.24c.36.296.703.61 1.036.925H705.84c.255 0 .462-.207.462-.462v-11.69c0-.255-.207-.463-.462-.463h-8.642V141.463c0-.256-.208-.463-.463-.463h-284.06c-.256 0-.463.207-.463.463v170.314l.925-.056z" fill="#BFE3F4"/>
                            <path class="play" id="vindu-sky" d="M466.8 189.06c-8.536.003-23.602 2.557-43.042 16.232-29.46 20.734-47.626-16.827-80.362 9.627-1.104.94-1.235 2.602-.293 3.706.488.57 1.196.907 1.95.92h116.556v.123h129.13c.753-.014 1.46-.35 1.95-.92.94-1.105.81-2.764-.294-3.706-32.736-26.454-50.9 11.107-80.36-9.627-18.547-13.046-33.072-15.954-41.782-16.197-1-.09-2.132-.16-3.455-.16z" fill="#fff"/>
                            <path class="play" id="rect4193" opacity=".99" stroke="#bfe3f4" d="M412.925 141.674H696.91v208.532H412.926z"/>
                            <path class="play" id="vindu-busk1" d="M477.09 332.205l-8.438 16.884.065.647h120.628c-.472-8.387-7.282-16.578-20.994-12.607 9.022-10.645 4.396-34.248-21.975-16.893 10.41-12.96 14.805-30.083 9.484-32.397-5.32-2.314-11.335-.472-20.588 12.487 5.09-17.355 3.238-40.265-3.47-40.144-6.708.12-15.73 12.385-17.58 37.84-.925-8.563-7.865-15.274-16.887-5.555 8.328-13.19 5.552-30.545-12.49-21.29 12.722-9.95 10.64-26.61-7.477-11.8 5.71-5.786 15.572-23.835 10.252-28.232-5.32-4.397-15.96 1.157-26.37 20.364 4.857-21.29 3.007-42.347-3.24-42.58-6.244-.23-18.504 13.19-20.124 39.34 0-5.09-1.388-20.132-7.865-20.132-3.237 0-5.837 2.897-7.632 7.266v76.317h30.69c6.744.002 12.386 5.118 13.048 11.83l.48 4.85h8.134c1.446-.007 2.625 1.16 2.634 2.606.002.416-.095.827-.284 1.2" fill="#80C6E8"/>
                            <path class="play" id="vindu-busk2" d="M613.763 349.727h73.254v-84.23c-6.625 1.6-12.685 8.83-15.96 26.027-2.314-15.735-10.18-25.454-15.268-3.24-3.933-23.76-19.663-26.148-24.52-20.826-4.858 5.322-6.246 15.282 15.498 45.596-7.865-7.405-25.214-17.587-28.684-11.8-3.47 5.784-.23 14.346 19.43 28.693-14.34-5.554-25.213-6.248-26.832-1.546-1.62 4.703 3.007 11.73 20.93 15.894-5.46 0-16.803 1.5-17.85 5.433" fill="#80C6E8"/>
                            <path class="play" id="vinduskarm" d="M476.804 356.512l62.632.093h19.43c4.855.002 9.557 1.705 13.287 4.813h133.24v-10.765H468.8v.25l8.004 5.61z" fill="#FFF"/>
                            <path class="play" id="lampe-paere1" d="M255.273 197.99c2.324-2.33 2.98-5.846 1.657-8.858l-10.51 10.515c3.01 1.325 6.524.668 8.853-1.657" fill="#FFF"/>
                            <path class="play" id="lampe-paere2" d="M256.93 189.132c1.783 4.024-.034 8.732-4.056 10.515-2.056.91-4.4.91-6.455 0l-.695.694c4.408 2.165 9.736.343 11.9-4.068 1.21-2.47 1.21-5.364 0-7.834l-.695.694z" fill="#BFE3F4"/>
                            <path class="play" id="sofa-bein1" fill="#008ED2" d="M555.646 452.59l3.628 23.142h6.588l-.657-23.14h-4.932"/>
                            <path class="play" id="sofa-bein2" fill="#008ED2" d="M327.084 452.59h-4.626l3.627 23.142h7.55l3.627-23.14"/>
                            <path class="play" id="sofa1" d="M314.177 327.827c-4.387-2.473-7.912-6.23-10.104-10.765l-.602-1.23c-2.053-.13-4.026-.856-5.67-2.093-1.09 3.92-2.642 7.695-4.627 11.245l1.156.352.832.26-.046-.87 19.06 3.1z" fill="#005AA4"/>
                            <path class="play" id="sofa2" d="M560.273 452.59h4.932l-1.175-41.29h-3.313v15.022c0 .256-.207.463-.463.463h-24.612l-8.068 25.806h32.7z" fill="#005AA4"/>
                            <path class="play" id="sofa3" fill="#005AA4" d="M559.792 425.87V411.3h-19.31l-4.553 14.57"/>
                            <path class="play" id="sofa4" d="M367.49 324.55l-5.55 12.57 3.127 2.25c4.46 3.186 7.557 7.935 8.68 13.3 1.06 5.017 2.43 9.962 4.098 14.81l-.99 1.5c2.678-2.063 5.634-3.737 8.78-4.97 8.948-3.638 21.782-9.034 33.58-14.033l9.308-18.623c.89-1.777 2.705-2.897 4.69-2.897h33.422l-.48-4.85c-.663-6.713-6.305-11.83-13.048-11.83h-81l-5.81 11.265c.77.888 1.194 1.508 1.194 1.508" fill="#005AA4"/>
                            <path class="play" id="sofa5" fill="#005AA4" d="M572.237 452.59h7.467V411.3h-6.292"/>
                            <path class="play" id="sofa6" d="M510.336 396.814c-1.006 1.625-3.14 2.128-4.764 1.12-.244-.15-.47-.33-.668-.537-1.22-1.26-2.776-2.777-4.626-4.545-17.756-3.027-29.46-2.777-57.534-10.293 0 0-17.2 16.03-56.645 18.974h117.925c1.006-.937 2.327-1.46 3.7-1.462h17.693c-3.61-1.75-8.328-3.86-13.52-5.795l-1.562 2.537z" fill="#005AA4"/>
                            <path class="play" id="sofa7" d="M279.136 320.69l4.053 1.24c-.51-1.23-.926-2.415-1.352-3.58l-2.702 2.34z" fill="#005AA4"/>
                            <path class="play" id="sofa8" d="M507.745 411.3c-3.026 0-5.478-2.453-5.478-5.48v-.287c-.008-1.097.314-2.172.925-3.082H346.978v23.41h180.43l3.7-14.56h-23.363z" fill="#005AA4"/>
                            <path fill="#005AA4" d="M468.023 350.338l.805.565-.028-.25-.093-.926-.055-.648"/>
                            <path class="play" id="sofa9" d="M572.153 361.418c-3.73-3.108-8.432-4.81-13.287-4.813h-19.43l-62.632-.093c17.893 32.666 14.035 28.194 27.806 32.184 2.085.984 2.022 7.13 12.182 3.806 0 0 2.558 8.727 2.47 8.867 4.09-8.083 5.234-17.505 9.71-25.378l-4.905 15.734c-.07.3-4.478 10.14-4.62 10.413l40.348-2.07v-22.585c-.017-7.93-4.604-15.14-11.78-18.513-.23-.107-.333-.383-.226-.615.107-.234.382-.335.615-.228 7.5 3.522 12.296 11.055 12.315 19.344v22.585h18.987v-22.586c.015-5.724-2.328-11.2-6.477-15.143-.37-.313-.713-.63-1.074-.915L456.128 404.1" fill="#005aa4"/>
                            <path class="play" id="laptop" d="M443.77 339.453c3.39-1.45 7.286-1.04 10.3 1.083l13.953 9.774.63-1.258 8.437-16.884c.65-1.293.128-2.867-1.165-3.516-.367-.185-.773-.28-1.185-.28h-41.554c-1.986 0-3.802 1.122-4.69 2.898l-9.347 18.66c9.918-4.192 19.088-8.108 24.62-10.477" fill="#002776"/>
                            <path class="play" id="venstre-arm" d="M347.07 289.886l2.684 6.646c.844 2.038 1.414 4.18 1.693 6.368l4.524 2.138-4.958 6.563c-.167.73-.367 1.45-.6 2.167 7.142-.454 13.378 6.128 15.904 9.256l5.81-11.265 2.12-4.11c2.158-4.183.518-9.325-3.664-11.484-.356-.185-.724-.343-1.1-.474l-21.755-7.61c.095.675-.152 1.35-.657 1.806" fill="#DBCCAE"/>
                            <path class="play" id="hoyre-arm" d="M261.593 331.65l34.818 15.587-1.248-21.64-.833-.26-1.157-.352-10.002-3.073-4.034-1.22 2.702-2.343c-2.276-6.72-2.776-12.358-2.12-16.903l-15.895 10.284-3.59 2.324c-4.652 3.027-5.97 9.253-2.945 13.907 1.05 1.618 2.546 2.9 4.305 3.69" fill="#EBE4C7"/>
                            <path class="play" id="hode" d="M281.838 318.34c.398 1.166.842 2.35 1.35 3.582l10.003 3.073c1.986-3.55 3.54-7.327 4.628-11.247 1.645 1.237 3.618 1.965 5.672 2.092-2.687-1.15-4.98-3.062-6.598-5.498-2.072-3.554-.453-11.31 7.218-6.072 10.936-.574 19.144-12.116 21.457-24.5.713-.41 1.478-.723 2.276-.927.255-.048.423-.295.375-.55-.048-.256-.295-.423-.55-.375-.656.15-1.293.374-1.898.666.948-5.38.508-10.915-1.277-16.078 5.59 2.365 10.587 5.94 14.63 10.47-.39.153-.77.34-1.13.554-.217.135-.283.42-.148.64.135.216.42.282.64.147.4-.232.82-.427 1.257-.583.828.99 1.554 2.064 2.165 3.203 0-1.24-.1-2.48-.305-3.703 1.514-.272 3.068-.22 4.56.148.257.06.514-.096.575-.352.06-.255-.096-.512-.35-.573-1.627-.406-3.32-.462-4.97-.167-3.424-15.79-24.54-17.587-36.734-11.58-12.732 6.313-17.922 15.495-18.348 28.25-2.915 2.11-5.737 6.258-6.58 12.43-.665 4.583-.202 10.23 2.083 16.95" fill="#002776"/>
                            <path class="play" id="hoyre-fot" d="M509.484 379.356l-.333 1.176 7.31 1.944 7.33-7.303 4.403-7.08c1.223-1.956.63-4.532-1.325-5.754-.14-.088-.284-.167-.433-.237-1.014-.48-2.223-.214-2.942.648l-2.646 3.176-18.608 9.108-1.426 1.99 8.67 2.332z" fill="#80C6E8"/>
                            <path class="play" id="hoyre-hael" d="M500.306 392.89c1.85 1.72 3.377 3.285 4.626 4.544 1.328 1.375 3.52 1.413 4.893.085.206-.2.388-.425.538-.67l1.583-2.536c-1.962-.73-3.998-1.425-6.07-2.073l-.444 1.584c-1.805-.39-3.49-.694-5.126-.935" fill="#80C6E8"/>
                            <path class="play" id="venstre-fot" d="M541.592 365.01c.544-2.336-.908-4.67-3.242-5.214-.15-.035-.305-.063-.46-.08-1.158-.133-2.258.537-2.674 1.628l-1.536 4.008-9.863 9.83-7.328 7.303-7.31-1.944-3.304 11.664c2.072.648 4.108 1.342 6.07 2.073 5.21 1.935 9.91 4.045 13.518 5.795h7.902c.144-.272.252-.56.324-.86l7.902-34.203z" fill="#FFF"/>
                            <path class="play" id="overkropp" d="M376.827 368.934l.99-1.5c-1.668-4.847-3.037-9.794-4.1-14.81-1.12-5.365-4.22-10.114-8.678-13.3l-3.128-2.25 5.55-12.57s-.424-.62-1.192-1.564c-2.517-3.1-8.753-9.673-15.906-9.256-1.63 4.994-4.806 9.34-9.067 12.412 2.775 4.628 5.255 11.793-6.385 11.793-7.79 0-13.6-4.13-17.58-8.637-1.086-.425-2.14-.927-3.155-1.5l-19.015-3.027.046.87 1.23 21.632.223 3.84 15.6 5.555h13.436c11.513.016 20.838 9.356 20.838 20.873v22.53c1.374.672 2.82 1.185 4.31 1.527h4.322c1.065-3.166 7.8-22.095 21.66-32.62" fill="#FFF"/>
                            <path class="play" id="bein" d="M446.436 378.347c-.255-.002-.46-.212-.457-.468 0-.11.04-.218.114-.3l10.64-12.034c.116-.13.294-.183.463-.14l40.26 10.414c.254.064.41.324.346.58-.064.254-.323.41-.58.346l-39.98-10.34-10.455 11.82c-.1.075-.228.106-.352.084v.037zm53.87 14.542c1.637.277 3.32.582 5.09.925l.443-1.583 3.302-11.663.333-1.177-8.67-2.314 1.425-1.99.315-.436-25.74-18.142-7.977-5.61-.805-.564-13.944-9.802c-3.015-2.123-6.91-2.532-10.3-1.083-5.55 2.37-14.702 6.285-24.594 10.478-11.797 5-24.63 10.396-33.578 14.033-3.147 1.234-6.103 2.908-8.78 4.97-13.88 10.525-20.634 29.454-21.68 32.592h30.978c39.445-2.944 56.646-18.975 56.646-18.975 28.073 7.562 39.768 7.275 57.534 10.34z" fill="#008ED2"/>
                            <path class="play" id="sofa10" d="M226.386 313.443c.135-.218.42-.284.638-.15v.002c3.592 2.215 5.94 5.98 6.348 10.182l3.202 32.535 69.636.102c11.736.04 21.24 9.55 21.28 21.29v65.32c0 .256-.206.463-.46.463-.257 0-.464-.207-.464-.463v-65.247c-.04-11.23-9.13-20.323-20.356-20.363l-70.053-.102c-.24 0-.438-.18-.462-.417l-3.248-32.952c-.372-3.922-2.56-7.444-5.913-9.515-.216-.136-.28-.422-.144-.64.01-.014.02-.03.033-.045h-.037zm23.132 139.148h271.014l6.597-25.796H346.514c-.255 0-.463-.207-.463-.462v-24.344c0-.256.208-.463.463-.463h4.312c-1.492-.342-2.938-.854-4.312-1.527v-22.52c0-11.51-9.313-20.847-20.82-20.873h-13.47l-15.6-5.554-.223-3.84-34.818-15.588c-5.06-2.282-7.31-8.236-5.027-13.296.79-1.753 2.066-3.242 3.676-4.29l3.59-2.324h-46.606c-2.897 0-5.246 2.352-5.245 5.25 0 .173.01.345.026.517l13.315 135.14h24.214l-.01-.03z" fill="#005AA4"/>
                            <path class="play" id="sofa11" d="M226.57 314.082c3.354 2.07 5.542 5.592 5.914 9.515l3.248 32.952c.024.236.223.417.462.416l70.053.1c11.225.042 20.315 9.135 20.356 20.365v65.322c0 .256.207.463.463.463.255 0 .462-.207.462-.463v-65.275c-.04-11.74-9.545-21.248-21.28-21.29l-69.637-.1-3.2-32.62c-.41-4.2-2.757-7.966-6.348-10.18-.218-.137-.504-.07-.64.147-.134.217-.068.503.15.638v.01z" fill="#002776"/>
                            <path class="play" id="hake-bryst" d="M334.95 337.972c11.64 0 9.17-7.183 6.384-11.792-1.356.976-2.807 1.813-4.33 2.5l-.445.202c-6.082 2.742-13.013 2.91-19.22.463 4.017 4.49 9.818 8.627 17.61 8.627" fill="#DBCCAE"/>
                            <path class="play" id="fjes" d="M345.904 296.7l3.813 1.85-10.465 3.415 6.652-5.266zM327.5 285.516c1.076-.347 2.23.24 2.582 1.314l2.397 7.406c.346 1.076-.242 2.23-1.315 2.583-1.075.346-2.23-.242-2.582-1.316l-2.396-7.404c-.347-1.076.24-2.23 1.314-2.583zm6.348 20.863c.238-.094.506.022.6.26.886 2.03 2.647 3.55 4.785 4.128 2.582.814 5.552.592 7.31-.528.215-.14.502-.08.643.135.14.214.08.502-.134.643-1.402.816-3.006 1.22-4.627 1.166-1.182 0-2.358-.177-3.488-.527-2.396-.65-4.37-2.353-5.367-4.63-.113-.227-.02-.505.21-.62.02-.01.044-.02.068-.027zm5.857-32.618c-.436.156-.858.35-1.258.583-.218.135-.504.07-.64-.148-.134-.218-.068-.504.15-.64.36-.214.738-.4 1.128-.554-4.042-4.53-9.04-8.104-14.63-10.47 1.774 5.168 2.2 10.7 1.24 16.08.606-.294 1.243-.517 1.898-.668.256-.048.503.12.55.375.05.256-.12.503-.374.55-.8.205-1.564.517-2.277.927-2.313 12.375-10.53 23.927-21.457 24.5-7.68-5.247-9.253 2.52-7.218 6.073 1.617 2.436 3.91 4.348 6.598 5.498l.6 1.23c5.862 12.072 20.25 17.3 32.488 11.803l.444-.203c6.37-2.856 11.235-8.272 13.398-14.912.234-.71.435-1.43.6-2.165 1.184-5.03.766-10.306-1.192-15.088l-2.674-6.646c-.21.192-.46.337-.73.426-1.077.347-2.23-.24-2.583-1.315l-2.396-7.405c-.333-1.05.222-2.18 1.26-2.554h.073l-.833-2.064c-.61-1.142-1.336-2.218-2.165-3.212z" fill="#EBE4C7"/>
                            <path class="play" id="hoyre-oye" d="M328.583 295.504c.353 1.074 1.507 1.662 2.582 1.315 1.073-.354 1.66-1.508 1.314-2.584l-2.398-7.405c-.352-1.05-1.474-1.63-2.535-1.313-1.073.353-1.66 1.507-1.314 2.583l2.35 7.404z" fill="#008ED2"/>
                            <path class="play" id="venstre-oye" d="M342.63 279.038c-1.074.352-1.662 1.507-1.315 2.582l2.397 7.405c.352 1.074 1.506 1.662 2.58 1.315 1.054-.377 1.63-1.51 1.315-2.583l-2.397-7.405c-.345-1.066-1.484-1.657-2.553-1.324h-.074l.046.01z" fill="#008ED2"/>
                            <path class="play" id="nese" fill="#DBCCAE" d="M339.242 302.02l10.465-3.415-3.812-1.888"/>
                            <path class="play" id="munn" d="M338.965 311.647c1.13.35 2.306.53 3.488.528 1.62.054 3.225-.35 4.627-1.166.214-.142.274-.43.134-.645-.14-.214-.43-.275-.643-.134-1.72 1.13-4.728 1.343-7.31.53-2.137-.58-3.898-2.098-4.783-4.13-.094-.237-.363-.353-.6-.26-.24.096-.355.365-.26.603.98 2.29 2.95 4.01 5.348 4.674" fill="#002776"/>
                            <path class="play" id="mellom-bein" d="M457.234 366.333l39.98 10.34c.257.063.516-.093.58-.348.063-.256-.092-.515-.348-.58l-40.258-10.412c-.17-.044-.347.01-.463.14l-10.64 12.032c-.177.184-.172.478.012.655.184.176.478.17.654-.013l.028-.03 10.456-11.784z" fill="#002776"/>
                            <path d="M527.574 452.59l8.068-25.796h24.612c.256 0 .463-.207.463-.462V411.3h3.313l1.175 41.29.657 23.142h-45.524l7.236-23.14zm-180.596-26.72v-23.42H503.22c-.61.91-.933 1.986-.925 3.083v.315c0 3.026 2.452 5.48 5.478 5.48h23.335l-3.7 14.56-180.43-.02zm212.814-14.57v14.56H535.93l4.55-14.56h19.312zm37.16 0l20.142 64.432H571.57l.657-23.14 1.176-41.292h23.548zm113.965 64.432h-88.095l-16.48-64.432h29.054c3.026 0 5.478-2.453 5.478-5.48v-.287c0-3.027-2.452-5.48-5.478-5.48h-74.68v-22.585c-.02-8.283-4.812-15.81-12.305-19.336-.23-.107-.507-.006-.614.227-.108.23-.006.507.226.614 7.175 3.373 11.762 10.582 11.78 18.513v22.585h-52.057c-1.374.003-2.696.525-3.7 1.462h-157.53c-.255 0-.463.208-.463.463v24.335c0 .255.208.462.463.462H527.14l-6.6 25.807-5.92 23.14h-35.55l3.628-23.14h-14.805l3.627 23.14H245.89l3.628-23.14h-14.804l3.627 23.14h-39.1v-5.367c0-3.297-2.674-5.97-5.97-5.97h-45.44l51.38-108.446c.112.006.223.006.334 0 1.6 0 2.896-1.297 2.896-2.897 0-1.6-1.296-2.898-2.896-2.898-.11-.006-.222-.006-.333 0l-44.227-93.487c.847-.812 1.114-2.06.675-3.147l75.873-64.294 1.48 2.47-2.45 23.725 15.165-15.07.694-.694 10.51-10.515.694-.693 15.156-15.162-23.715 2.453.148-.148-16.36-9.82-9.65 9.588 7.403 12.283-76.142 64.545c-1.37-.817-3.14-.37-3.957 1.002-.817 1.37-.368 3.143 1 3.96.445.264.95.404 1.468.406.11.007.222.007.333 0l44.228 93.488c-1.147 1.1-1.185 2.923-.086 4.07.028.03.056.06.086.087L145.97 463.995c-.057.125-.085.26-.083.398h-5.755c-3.296 0-5.968 2.673-5.968 5.97v5.37h-3.7c-.257 0-.464.206-.464.462 0 .255.207.463.463.463h580.454c.256 0 .463-.208.463-.463 0-.256-.207-.463-.463-.463z" fill="#002776"/>
                            <path class="play" d="M444.356 320.874l.076-.08c.305-.41.22-.986-.185-1.292l-22.695-17.01c-.412-.307-.997-.224-1.306.188-.31.41-.225.995.186 1.304l22.694 16.996c.377.283.907.238 1.23-.105" id="skjermlys1" fill="#fea"/>
                            <path class="play" d="M387.673 337.006c-.066.44.188.864.607 1.01l.183.07 24.872 3.805c.514.082 1-.27 1.082-.785.08-.514-.27-1-.785-1.08l-24.872-3.807c-.504-.093-.987.238-1.08.742l-.007.047" id="skjermlys2" fill="#fea"/>
                            <path class="play" d="M396.782 314.59c-.21.464-.005 1.01.46 1.222l25.36 11.532c.464.216 1.017.013 1.232-.45.217-.467.015-1.018-.45-1.235l-25.36-11.533c-.463-.218-1.016-.02-1.233.44-.002.008-.006.015-.007.022" id="skjermlys3" fill="#fea"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
