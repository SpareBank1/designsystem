Luft i og mellom komponenter er en viktig ingrediens i visuell design, men blir ofte overlatt til tilfeldighetene. Tilnærmingen kan imidlertid systematiseres med enkle grep.

Fremfor å definere luft med hardkodede verdier i hvert enkelt tilfelle bruker vi et sett med variabler som spiller på lag med hverandre. Dette bidrar til at komponentene skalerer på en mer forutsigbar måte i forhold til hverandre. Variablene er basert på [8pt Grid](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632).

### Variabler

Disse Less-variablene kan brukes til å definere `margin` og `padding` i og rundt komponenter og innhold.

<table class="ffe-table">
    <tr class="ffe-table__row">
        <th class="ffe-table__heading" scope="col">Variabel</th>
        <th class="ffe-table__heading" scope="col">Verdi</th>
        <th class="ffe-table__heading" scope="col">Eksempel</th>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>Base value</td>
        <td class="ffe-table__cell">8px</td>
        <td></td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-xs</code></td>
        <td class="ffe-table__cell">8px</td>
        <td>
            <div class="sb1ds-spacing-example sb1ds-spacing-example--xs"></div>
        </td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-sm</code></td>
        <td class="ffe-table__cell">16px</td>
        <td><div class="sb1ds-spacing-example sb1ds-spacing-example--sm"></div></td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-md</code></td>
        <td class="ffe-table__cell">24px</td>
        <td><div class="sb1ds-spacing-example sb1ds-spacing-example--md"></div></td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-lg</code></td>
        <td class="ffe-table__cell">32px</td>
        <td><div class="sb1ds-spacing-example sb1ds-spacing-example--lg"></div></td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-xl</code></td>
        <td class="ffe-table__cell">40px</td>
        <td><div class="sb1ds-spacing-example sb1ds-spacing-example--xl"></div></td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-2xl</code></td>
        <td class="ffe-table__cell">48px</td>
        <td><div class="sb1ds-spacing-example sb1ds-spacing-example--2xl"></div></td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-3xl</code></td>
        <td class="ffe-table__cell">64px</td>
        <td><div class="sb1ds-spacing-example sb1ds-spacing-example--3xl"></div></td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-4xl</code></td>
        <td class="ffe-table__cell">80px</td>
        <td><div class="sb1ds-spacing-example sb1ds-spacing-example--4xl"></div></td>
    </tr>
    <tr class="ffe-table__row">
        <td class="ffe-table__cell"><code>@ffe-spacing-5xl</code></td>
        <td class="ffe-table__cell">160px</td>
        <td><div class="sb1ds-spacing-example sb1ds-spacing-example--5xl"></div></td>
    </tr>
</table>
