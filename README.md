# ffe-tabs
Stability: **UNSTABLE**

Pakken inneholder styling for tabs i henhold til FFE.

## Intensjon

Målet er å samle styling for konseptet "tabs" på et sted. Foreløpig finnes det kun gjenbrukbar styling for tab-buttons: knapper som brukes for å toggle mellom tabs.

## Bruk

ffe-tabs har en peerDependency på ffe-core. Installer begge for å bruke ffe-tabs.

```
$ npm install --save-dev ffe-core ffe-tabs
```

ffe-tabs brukes på samme måte som ffe-core. Importer `ffe-tabs/less/tabs.less` for å ta i bruk tabs.

## Innhold

- `.ffe-tab-button`
- `.ffe-tab-button--selected`

## Eksempeler

### Stor skjerm
![](./visual-tests/baseline-screenshots/example/plain/firefox-large.png)

### Liten skjerm
![](./visual-tests/baseline-screenshots/example/plain/firefox-small.png)

## Ønskeliste

- Gjenbrukbare stiler for tab-panels

## Utvikling

Du kan utvikle stand-alone ved å bruke eksempel-filene. Et lokalt miljø kan startes med `npm start`.

For å teste bruk i en app kan du linke inn pakka med `npm link`.

Når endringene dine er gjort må du oppdatere de visuelle regresjonstestene.  Det kan du gjøre med scriptet `./update_visual_regression_test_baseline.sh`.

De visuelle regresjonstestene kan verifiseres med scriptet `./run_visual_regression_test.sh`.
