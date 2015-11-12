#Felles Front End Framework
##Intro
Inneholder generell styling for bruk utenom komponenter. F.eks. typografi, knapper, farger, o.l. Vi følger
[Reasonable System for CSS Stylesheet Structure](https://github.com/rstacruz/rscss) for å sørge for god organisasjon av CSS-koden.

##Kom i gang

Konfigurer npm til å bruke SB1's lokale og private repo (proxy med cache til NPM public).

    npm set registry https://nexus.intern.sparebank1.no/nexus/content/groups/npmgroup/

Installer som vanlig

    npm install ffe-core --save-dev

##Bruk

Modulen inneholder LESS-filer som kan importeres direkte fra node_modules til prosjektets CSS/LESS.

    @import ffe.less

Det er forventet at det defineres en LESS-variabel som inneholder rot-pathen til applikasjonen.

    @base-url: '/my-project/app/';

SpareBank 1's profil-font er også inkludert i OpenType format og må kopieres fra node_modules.
Dette kan f.eks. gjøres via en Grunt task.

    copy: {
        fonts: {
            files: [
                { cwd: 'node_modules/ffe-core/fonts', expand: true, src: ['*.otf'], dest: 'app/open/fonts/' }
            ]
        }
    }

Klargjør stilguide ved å kjøre følgende kommando:

    npm run examples

##Pull Requests

Gjøres mot master. Endringer som skal ut på tidligere `major` releases må portes til aktuell branch.

Squash alle commits til en enkelt commit.

##Publisering

Ved hver major release lages en ny branch (f.eks. release/02-wistful-wizard) som kan vedlikeholdes ved siden av master. Master har da kun ikke lanserte endringer.


Ved lansering av ny versjon må i tillegg disse stegene følges (`minor` og `major` er også gyldige valg):

- Oppdatere `CHANGELOG.md`
- Skift til branchen det skal releases fra
- Backport endringene som skal leveres og endringen i Changelog.
- `npm version [patch|minor|major]`
- `git push && git push --tags`
- `npm publish --registry https://nexus.intern.sparebank1.no/nexus/content/repositories/npm-internal`
