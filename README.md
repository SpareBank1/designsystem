# Felles Front End Framework
Inneholder generell styling for bruk utenom komponenter. F.eks. typografi, knapper, farger, o.l. Vi følger
[BEM](https://en.bem.info/) for å sørge for god organisasjon av CSS-koden.

FFE ivaretar fargekontrastkravene som spesifisert i WCAG 2.0-standarden (AA-nivå).

Nettleser som ikke støttes av FFE:

 * Internet Explorer 8 og tidligere; Internet Explorer 9 kan brukes, men begrensede visuelle avvik må aksepteres.
 * Android Browser-versjoner tidligere enn 4.4

## Kom i gang
Konfigurer npm til å bruke SB1's lokale og private repo (proxy med cache til NPM public).

    npm set registry https://nexus.intern.sparebank1.no/nexus/content/groups/npmgroup/

Installer som vanlig

    npm install ffe-core --save-dev

## Migrering til v.8.0.0

I versjon 8.0.0 ble det gjort en større job ved å splitte ffe-core opp i mindre pakker. For å få samme styling som før 8.0.0 må man ha følgende pakker som en dependency.

```
ffe-core
ffe-buttons
ffe-form
ffe-lists
ffe-tables
ffe-tabs
ffe-spinner
```

Man må også legge til tilsvarende `@import`'s i .less for prosjektet.

## Bruk
Modulen inneholder LESS-filer som kan importeres direkte fra node_modules til prosjektets CSS/LESS.

### Import
Anbefalt er å importere gatewayfilen som i sin tur importerar alle de andre filene. Det garanterer at prosjektet ditt følger den grafiske profilen til SpareBank 1.

    @import ffe.less

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
brekker måste det aktuella baseline-screenshotet uppdateras, detta gørs med `./update_visual-tests-baselines.sh`.

Gemini bruker native-moduler varfør du bør ha g++-compiler tillgænglig innan du kør tester i detta paketet:

SpareBank1:s RHEL-baserade utvecklingsplattform:

    $ sudo yum install gcc-c++

Legacy Ubuntu-baserad virtuell utvecklingsmiljø:

    $ sudo apt-get install -y g++
