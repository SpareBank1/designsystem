# ffe-tabs-react

## Install

```
$ npm install --save ffe-tabs-react
```

## Usage

```javascript
import Tab from 'ffe-tabs-react';
```

```
<Tab>
  Dette er en tab
</Tab>
```

```
<Tab condensed={true} ghost={true} selected={true}>
  Dette er en kompakt (condensed) tab med transparent (ghost) bakgrunn, som er valgt
</Tab>
```

## Test

To view live examples, run `npm start`

# Local

For å teste endringer lokalt kan man kjøre i dette prosjektes mappe:

```
sudo npm link
```

Og i prosjektet som skal bruke endringene gjort lokalt kan man kjøre:

```
npm link ffe-tabs-react
```
