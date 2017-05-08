# Changelog

## v3.0.1

* Replaced hardcoded transition properties with variables from ffe-core

## v3.0.0

### Breaking changes

Bumped peer dependency version of ffe-core. No external API change, but this version requires a new major of `ffe-core`

* Renamed color names to stay in sync with refactoring in ffe-core@9.x

To migrate, update your app to ffe-core version 9.x

## v2.1.2
* Removed use of `line-height` to set `ffe-tab-button` height, instead use `padding`. This so line breaks won't look awkward - with padding around every text row.

## v2.1.1

Lagt til `outline: 0` på focus og active for å unngå "dobbel" fokus i Firefox.

## v2.1.0

Endringssuffikset `--condensed` kan brukes til kompaktknapper.

## v2.0.0

BREAKING: `ffe-tab-button` får hvit bakgrunnsfarge, ikke gjennomsiktig

For gjennomsiktig knapp bruk `--ghost`-modifieren (`ffe-tab-button ffe-tab-button--ghost`).

Tabs skal som standard ha hvit bakgrunnsfarge, ikke være gjennomsiktige.
Siden fargen var eksplisitt satt til transparent kan det hende enkelte er
avhengige av den oppførselen. De er nå nødt til å bruke `--ghost`-modifieren.

## v1.0.0

Første versjon av pakken. Less-filene har før dette ligget i
[ffe-core](***REMOVED***).
ffe-tabs ble skilt ut fra ffe-core i ffe-core v8.0.0.
