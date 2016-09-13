# Changelog

## Version 5.2.0

*Added a few new icons
    * hus-hake-ikon.svg
    * hus-hjerte-ikon-svg
    * kr-hake-ikon.svg

## Version 5.1.0

* Added a bunch of new icons
     * campingbil-ikon
     * fritidshus-ikon
     * handlevogn-ikon
     * hus-enebolig-ikon
     * hus-horisontaldelt-ikon
     * hus-ikon
     * hus-kjedet-ikon
     * hus-leilighet-ikon
     * hus-rekkehus-ikon
     * hus-vertikaldelt-ikon
     * katt-ikon
     * lommebok-ikon
     * mobil-ikon
     * motorsykkel-ikon
     * nokkelhull-ikon
     * person-brukket-arm-ikon
     * robat-ikon
     * seilbat-ikon
     * snoscooter-ikon
     * sofa-ikon
     * sporsmalstegn-ikon
     * sykebil-ikon
     * traktor-ikon
     * ung-caps-ikon

## Version 5.0.0

* A vengeful lumberjack has swung the axe against tre-ikon, spire-ikon, and blad-ikon. It was decided the icons did not fit the brand and should not be used by anyone. 

## Version 4.7.0
* Added bygning-pluss-ikon.svg

## Version 4.6.0
* Added stetoskop-ikon.svg

## Version 4.5.0
* Added forstorrelsesglass-ikon.svg

## Version 4.4.0
* Added snakkeboble-ikon.svg

## Version 4.3.0
* Added person-rullestol-ikon.svg
* Added hjerte-kardiograf-ikon.svg

## Version 4.2.0
* Added graf-opp-enkel-ikon.svg
* Added soylediagram-ikon.svg
* Added pil-ut-av-boks-skraa-ikon.svg

## Version 4.1.0
* Added blyant-ikon.svg
* Added person-pluss-ikon.svg
* Added bsu-ikon.svg

## Version 4.0.0

* Renamed: hake-sirkel-ikon.svg => hake-sirkel-solid-ikon.svg
* Added a new hake-sirkel-ikon.svg that is not solid

## Version 3.7.2

* New icon: kalender-ikon.svg

## Version 3.7.1

* Quickfix for kartmarkor-ikon - Was not optimized correctly

## Version 3.7.0

* Changed look of tannhjul-ikon
* Add old tannhjul-ikon.svg as tannhjul-solid-ikon.svg
* Name change: dokument-med-test-ikon.svg -> dokument-med-tekst-ikon.svg
* Name change: hengelas.svg -> hengelas-ikon.svg
* Name change: kontorbygg.svg -> kontorbygg-ikon.svg
* Name change: pil-ned.svg -> pil-ned-ikon.svg
* New icon: utropstegn-ikon.svg
* New icon: info-ikon.svg
* New icon: dokument-efaktura-ikon.svg
* New icon: kartmarkor-ikon.svg
* New icon: kr-pil-solid-ikon.svg

## Version 3.6.0

* New icons: hake-stjerne-ikon

## Version 3.5.0

* New icons: blad-ikon, hake-sirkel-ikon, spire-ikon, tre-ikon

## Version 3.4.0

* New icons: graf-opp-ikon, kake-kvart-ikon, person-slips-ikon, sparegris-ikon, konvolutt-ikon

## Version 3.3.0

* New icon: kontorbygg

## Version 3.2.0

* New icon: paraply-ikon

## Version 3.1.0

* New icons: hengelaas, pil-ned, tannhjul
* Automatic publish and test
* Screenshot in readme

## Version 3.0.0

* Removed the postinstall script, since it created issues with builds on npm 2.x. See https://github.com/npm/npm/issues/8850

## Version 2.4.0
Optimized:

* boks-ikon
* varebil-ikon
* verktoy-skiftenokkel-ikon

## Version 2.3.0
Renamed lukk-ikon to kryss-sirkel-ikon and optimized it

## Version 2.2.0
Optimized:

* lyspare-ikon

## Version 2.1.0
Added new icons and optimized some old ones for use in lo-kort.

Optimized:

* 1-2-3-sirkel
* 1-2-3-understrek
* atv
* badekar-dusj
* bamse
* bat-liten
* bat-stor
* bestikk
* betaling-100
* betaling-kontaktlos
* betaling-kontaktlos-info
* betalingskort
* betalingskort-innpakket
* betalingskort-kryss
* bil
* faks-printer
* kr-pil
* kryss
* laptop
* mobil-a-b-c
* mynter
* person
* tabell-kroner

New:

* betalingskort-globus
* betalingskort-hand
* betalingskort-kreditt
* betalingskort-stjerne
* dokument-med-test
* faks-printer-2
* mynter-2
* pdf
* piler-hoyre-venstre
* xls-ikon

## Version 2.0.0
For version 2.x, removed all existing icons and added _ICON_REQUIREMENTS.md to have a clean slate. Also updated README.

Releasing version 2 with the first batch of optimized icons:

* chevron
* familie
* flamme
* fly
* gave
* hake
* hjerte
* info-sirkel
* kr-pose
* person-mikrofon
* plaster
* telefon

## Version 1.0.3
* Made devDependencies actual dependencies so package consumers get them...
* Re-added postinstall script

## Version 1.0.2
* Removed postinstall script, since some build tools had trouble finding gulp at that stage
* Updated package.json with the correct repository URL

## Version 1.0.1
* Added plaster-ikon
![plaster-ikon](***REMOVED***)

## Version 1.0.0
* Renamed default sprite to ffe-icons.svg
* Renamed desktop-ikon to laptop-ikon
* Added several new icons to ffe-icons
* Removed sfo-icons - use instead the common ffe-icons
* Updated the gulpfile to be extendable via an options json to allow for minimum SVG sprite generation per project
