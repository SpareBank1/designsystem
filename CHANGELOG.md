# Changelog

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
![plaster-ikon](https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-icons/browse/icons/plaster-ikon.svg?raw)

## Version 1.0.0
* Renamed default sprite to ffe-icons.svg
* Renamed desktop-ikon to laptop-ikon
* Added several new icons to ffe-icons
* Removed sfo-icons - use instead the common ffe-icons
* Updated the gulpfile to be extendable via an options json to allow for minimum SVG sprite generation per project
