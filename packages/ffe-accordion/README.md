# ffe-accordion

## Intro

Et klassisk trekkspillelement for bruk i SpareBank1.

Kommer i to varianter - se dokumentasjon på [design.test.sparebank1.no](design.test.sparebank1.no)

Denne komponenten inneholder ikke vendorprefixes, og krever at konsumentapplikasjonen bruker et verktøy for å automatisk tillegge disse i byggesteget.

## Bruk

`@import ../node_modules/ffe-accordion/less/ffe-accordion` i en less-fil i ditt prosjekt.

Merk at ffe-core er en avhengighet for ffe-accordion (se peerDependencies i package.json).

Se readme for ffe-core for øvrig informasjon.

## React-komponent

Det finnes en ferdig React-implementasjon av denne komponenten i pakka [`ffe-accordion-react`](https://stash.intern.sparebank1.no/projects/FFE/repos/ffe-accordion-react/browse)

## Oppgradering til versjon 3
### Version 2.x
```javascript
<button class="ffe-accordion-item__toggler ffe-accordion-item__toggler--blue">
    <svg class="ffe-accordion-item__icon ffe-accordion-item__icon--blue"
         viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
        <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z"></path>
    </svg>
    <span>What is Lorem Ipsum?</span>
</button>
```
### Version 3
Versjon 3 har nå en wrapper rundt innholdet til knappen. Dette er fordi Firefox ikke støtter flexbox(flex) på knapper direkte(https://stackoverflow.com/questions/24289251/flexbox-not-working-in-buttons-in-firefox#24319292).
Wrapperen har klassenavn `ffe-accordion-item__toggler-content` og er satt opp med horisontal flexbox. 
```javascript
<button class="ffe-accordion-item__toggler ffe-accordion-item__toggler--blue">
    <span class="ffe-accordion-item__toggler-content">
        <span class="ffe-accordion-item__title">What is Lorem Ipsum?</span>
        <svg class="ffe-accordion-item__icon ffe-accordion-item__icon--blue"
             viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
            <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z"></path>
        </svg>
    </span>
</button>
```
#### Multiline
Hvis du har behov for flere linjer i knappen er `ffe-accordion-item__title` satt opp med vertikal flexbox.
```javascript
<button class="ffe-accordion-item__toggler ffe-accordion-item__toggler--blue">
    <span class="ffe-accordion-item__toggler-content">
        <span class="ffe-accordion-item__title">
            <span>Where does it come from?</span>
            <span class="ffe-small-text">Pluto is not a planet they said...</span>
        </span>
        <svg class="ffe-accordion-item__icon ffe-accordion-item__icon--open"
             viewBox="0 0 200 200" width="150" height="150" x="150" y="600">
            <path d="M16.171 42c-4.143 0-8.285 1.575-11.427 4.706-6.325 6.284-6.325 16.5 0 22.804l84.028 83.762c6.305 6.304 16.55 6.304 22.875 0l83.61-83.264c6.324-6.283 6.324-16.5 0-22.803-6.306-6.303-16.556-6.303-22.881 0L100.238 119.1 27.624 46.725C24.482 43.573 20.334 42 16.19 42h-.019z"></path>
        </svg>
    </span>
</button>
```
