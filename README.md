# ffe-tabs

Pakken inneholder stylingen FFE-Tabs.

## Bruk

ffe-tabs har en peerDependency på ffe-core. Installer begge for å bruke ffe-tabs.

```sudo a
$ npm install --save-dev ffe-core ffe-tabs
```

ffe-tabs brukes på samme måte som ffe-core. Importer `ffe-tabs/less/tabs.less` for å ta i bruk tabs.

## Utvikling

For å teste endringer i en reell app lokalt kan man kjøre i dette prosjektes mappe:

```
(sudo) npm link
```

Og i prosjektet som skal bruke endringene gjort lokalt kan man kjøre:

```
npm link ffe-tabs
```

Når endringene dine er gjort må du oppdatere de visuelle regresjonstestene. Dette krever at Docker og
[Gemini](https://github.com/gemini-testing/gemini) er installert på din maskin:

```
./update_visual_regression_test_baseline.sh
```

Verifiser ved å kjøre testene:

```
./run_visual_regression_test.sh
```

Commit endringene med oppdaterte baselines og lag en pull request.
