#Felles Front End Framework
##Intro
Inneholder generell styling for bruk utenom komponenter. F.eks. typografi, knapper, farger, o.l. Vi følger
[Reasonable System for CSS Stylesheet Structure](https://github.com/rstacruz/rscss) for å sørge for god organisasjon av CSS-koden.

##Kom i gang

Konfigurer npm til å bruke SB1's lokale og private repo (proxy med cache til NPM public).

    npm set registry http://ntadc1.test.sparebank1.no:4873

Installer som vanlig

    npm install sb1-ffe-framework --save-dev

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
                { cwd: 'node_modules/sb1-ffe-framework/fonts', expand: true, src: ['*.otf'], dest: 'app/open/fonts/' }
            ]
        }
    }

Klargjør stilguide ved å kjøre følgende kommando:

    npm run examples
