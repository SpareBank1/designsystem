# @sb1/ffe-decorators-react

## Install

```
npm install --save @sb1/ffe-decorators-react
```

## Usage

```javascript
import decorator from '@sb1/ffe-decorators-react/lib/decorator';

decorator(config)(MyComponent);
```

## Decorators

### ease-properties

En dekoratør-klasse som kan brukes i forbindelse med animering med Javascript.
Denne sørger for at en endring i en gitt property skjer gradivis over et gitt tidsinterval i stedet for at den endres med en gang.

Opprett komponenten med

```javascript
easeProperties({
    foobar: {
        initialValue: 1,
        duration: 0.5,
    },
})(MyComponent);
```

Der `foobar` er propertyen man er interessert i, `initialValue` er start-verdien og `duration` er hvor lang tid det skal ta før en property-endringen er fullført.

Det er frivillig å oppgi en `initialValue`.
Dersom det ikke angis en `duration` blir 1s brukt som default.
