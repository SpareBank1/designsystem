# ffe-lists

Pakken inneholder styling til ffe-lists

## Bruke
ffe-lists har en peerDependency på ffe-core

```
$ npm install --save-dev ffe-core ffe-lists
```
ffe-lists brukes på samme måte som ffe-core. Importer `ffe-lists/less/lists.less` for å ta i bruk alle listene.

## Screenshot
![icons](visual-tests/baseline-screenshots/lists/plain/firefox-large.png)

## Utvikling


For å teste endringer i en reell app lokalt kan man kjøre i dette prosjektes mappe:

```
sudo npm link
```

Og i prosjektet som skal bruke endringene gjort lokalt kan man kjøre:

```
npm link ffe-lists
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
