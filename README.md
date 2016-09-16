# Felles Frontend

Felles frontend (FFE) inneholder Less og JavaScript for felles bruk.

**ffe-core** inneholder Less som er felles for alle delte komponenter i FFE - for eksempel
typografi, farger, og liknende.

## TL;DR

```
$ npm install --save ffe-core
$ npm install --save-dev less less-plugin-npm-import    # less-plugin er valgfri, men kan forenkle imports
```

```less
/* Ditt prosjekts .less */
@import "npm://ffe-core/less/ffe";                      // med less-plugin
@import "~ffe-core/less/ffe";                           // med webpack og less-loader
@import "../path/to/node_modules/ffe-core/less/ffe";    // direkte referanse

/* FFE trenger at det er definert en konstant 'base-url'. Denne må inneholde rot-pathen i appens URL */
/* FFEs fonter må kopieres til en mappe 'fonts' som publiseres på denne pathen, f.eks. /privat/forsikring/fonts */
@base-url: '/privat/forsikring/';

/* Om du vil ha element styling finnes det en annen import */
/* Det anbefales ikke å bruke denne siden det kan skape problemer med andre CSS-regler */
@import "npm://ffe-core/less/ffe-element-styling";
```

## Kom i gang med FFE

Koden for FFE pakkes i flere forskjellige NPM-moduler som publiseres på et internt
repository: [Nexus](***REMOVED***).

For å bruke Nexus i ditt prosjekt må du konfigurere NPM til ikke å gå mot det eksterne NPM registry.

Det anbefales å opprette en `.npmrc` i hvert enkelt prosjekt og sjekke inn denne i Git så hvert
teammedlem får riktig konfigurasjon:

```
# .npmrc
registry=***REMOVED***
```

Etter dette kan du gjøre `$ npm install` som vanlig.

For en fullstendig installasjon av stylingen i FFE må du installere flere pakker:

```bash
$ npm install --save ffe-core ffe-buttons ffe-form ffe-lists ffe-tables ffe-tabs ffe-spinner
```

For en fullstendig liste over tilgjengelige pakker i FFE, se
[prosjektoversikten på Bitbucket](***REMOVED***)

## Bruk av FFEs pakker

Pakkene i FFE-prosjektet publiserer enten rå Less eller JavaScript ES2015 eller nyere.
Enkelte komponenter inneholder React-komponenter med JSX-kode.

Med andre ord vil du trenge ett eller flere byggsteg for å ta i bruk FFE, avhengig av hvilke pakker du vil bruke.
Pakken du vil bruke har som oftest en fungerende konfigurasjon (for å kunne bygge eksempelsider) som du kan ta utgangspunkt i.
Ellers kan du følge dokumentasjonen for de forskjellige verktøyene.

* Kompilering av [Less](http://lesscss.org/)
* Transpilering av [ES2015+ til ES5](https://babeljs.io/)
* Kompilering av [JSX](https://facebook.github.io/react/)

I koden vil du måtte `import`e Less og JavaScript fra de enkelte pakkene. Se pakkens README for hvordan dette bør gjøres.

## Forvaltning av FFE

Se [CONTRIBUTE.md](***REMOVED***) for hvordan du bidrar med features og bugfixes.

Vi følger [BEM](https://en.bem.info/) for å sørge for god organisasjon av CSS-koden.

FFE skal ivareta fargekontrastkravene som spesifisert i WCAG 2.0-standarden (AA-nivå).

Nettleser som _ikke_ støttes av FFE:

* Internet Explorer 8 og tidligere; Internet Explorer 9 kan brukes, men begrensede visuelle avvik må aksepteres.
* Android Browser-versjoner tidligere enn 4.4

