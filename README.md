# Felles Front End Framework
Inneholder generell styling for bruk utenom komponenter. F.eks. typografi, knapper, farger, o.l. Vi følger
[BEM](https://en.bem.info/) for å sørge for god organisasjon av CSS-koden.

## Kom i gang
Konfigurer npm til å bruke SB1's lokale og private repo (proxy med cache til NPM public).

    npm set registry ***REMOVED***

Installer som vanlig

    npm install ffe-core --save-dev

## Bruk
Modulen inneholder LESS-filer som kan importeres direkte fra node_modules til prosjektets CSS/LESS.

### Import
Anbefalt er å importere gatewayfilen som i sin tur importerar alle de andre filene. Det garanterer at prosjektet ditt følger den grafiske profilen til SpareBank 1.

    @import ffe.less

Hvis du ønsker å bruke FFE i kombinasjon med eksisterende legacy CSS (e.g. common-ui) rekommenderes det å avstå fra FFE's sin CSS reset

    @import ffe-no-reset.less

Hvis du ønsker styling på elementer (body, a, p, h1-h5, etc. Se `element-map.less`) så ær dette muligt  æven om det ikke rekommenderas.

    @import ffe-element-styling.less

Det er også mulig å importere enkelte filer etter behov.

    @import colors.less
    @import radio-button.less

### Variabler
Det er forventet at det defineres en LESS-variabel som inneholder rot-pathen til applikasjonen.

    @import ffe.less
    @base-url: '/my-project/app/';

### Fonts
SpareBank 1's profil-font er også inkludert i OpenType format og må kopieres fra node_modules.
Dette kan f.eks. gjøres via en Grunt task.

    copy: {
        fonts: {
            files: [
                { cwd: 'node_modules/ffe-core/fonts', expand: true, src: ['*.otf'], dest: 'app/open/fonts/' }
            ]
        }
    }

### Style guide
Klargjør stilguide ved å kjøre følgende kommando:

    npm run examples

## Visuell regressionstestning
Det utførs visuell regressiontestning av stilguiden på byggserver med Gemini. Vid ændringar som medfør att testerna
brekker måste det aktuella baseline-screenshotet uppdateras, detta gørs med `./update_visual_tests-baslines.sh`.

## Pull Requests
Gjøres mot master.
Squash alle commits til en enkelt commit.

Alle pull-requests må oppdatere version i package.json.

## Publisering

Alle commits på master blir publisert av jenkins. (dersom den ikke allerede er det)

Backporting gjøres manuelt på release-branches ved behov, oppdateres ved cherry picke endringer fra master.
