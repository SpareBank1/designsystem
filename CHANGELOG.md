# Changelog

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
