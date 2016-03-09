#Felles Front End Framework
##Intro
Inneholder generell styling for bruk utenom komponenter. F.eks. typografi, knapper, farger, o.l. Vi følger
[BEM](https://en.bem.info/) for å sørge for god organisasjon av CSS-koden.

##Kom i gang
Konfigurer npm til å bruke SB1's lokale og private repo (proxy med cache til NPM public).

    npm set registry https://nexus.intern.sparebank1.no/nexus/content/groups/npmgroup/

Installer som vanlig

    npm install ffe-core --save-dev

##Bruk
Modulen inneholder LESS-filer som kan importeres direkte fra node_modules til prosjektets CSS/LESS.

###Import
Anbefalt er å importere gatewayfilen som i sin tur importerar alle de andre filene. Det garanterer at prosjektet ditt følger den grafiske profilen til SpareBank 1.

    @import ffe.less

Hvis du ønsker styling på elementer (body, a, p, h1-h5, etc. Se `element-map.less`) så ær dette muligt æven om det ikke rekommenderas.

    @import ffe-element-styling.less

Det er også mulig å importere enkelte filer etter behov.

    @import colors.less
    @import radio-button.less

###Variabler
Det er forventet at det defineres en LESS-variabel som inneholder rot-pathen til FFE:s sina statiska resurser.

    @import ffe.less
    @base-url: '/my-project/app/';

###Fonts
SpareBank 1's profil-font er også inkludert i OpenType format og må kopieres fra node_modules.
Dette kan f.eks. gjøres via en Grunt task.

    copy: {
        fonts: {
            files: [
                { cwd: 'node_modules/ffe-core/fonts', expand: true, src: ['*.otf'], dest: 'app/open/fonts/' }
            ]
        }
    }

###Style guide
Klargjør stilguide ved å kjøre følgende kommando:

    npm run examples

##Visuell regressionstestning
Det utførs visuell regressiontestning av stilguiden på byggserver med Gemini. Vid ændringar som medfør att testerna
brekker måste det aktuella baseline-screenshotet uppdateras, detta gørs med `./update_visual_tests-baslines.sh`.

##Pull Requests
Gjøres mot master. Endringer som skal ut på tidligere `major` releases må portes til aktuell branch.

Squash alle commits til en enkelt commit.

##Publisering

###Minor og Patch release
Ved lansering av ny minor eller patch versjon må i tillegg disse stegene følges:

- Oppdater `CHANGELOG.md`
- Skift til branchen det skal releases fra
- Backport endringene som skal leveres og endringen i CHANGELOG.md ved å cherry picke endringene fra master
- `npm version [patch|minor]` (dette oppretter også en tag med versjonsnummeret)
- `git push && git push --tags`
- `npm publish --registry https://nexus.intern.sparebank1.no/nexus/content/repositories/npm-internal`

###Major release
Ved hver major release lages en ny branch (f.eks. release/02-wistful-wizard) som kan vedlikeholdes ved siden av master. Master har da kun ikke lanserte endringer.

- Oppdater `CHANGELOG.md` på master
- Opprett release branch og skift til denne
- Opprett en tag for den nye versjonen
- `git push && git push --tags`
- `npm publish --registry https://nexus.intern.sparebank1.no/nexus/content/repositories/npm-internal`
- Bytt tilbake til master
- Oppdater `package.json` med neste major versjonsummer for å tydeliggjøre at master ligger foran siste release.
