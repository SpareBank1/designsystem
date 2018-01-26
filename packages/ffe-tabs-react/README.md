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
<TabGroup>
  <Tab>
    Dette er en tab
  </Tab>

  <Tab condensed={true} ghost={true} selected={true} onClick={() => { alert('Hei'); }}>
    Dette er en kompakt (condensed) tab med transparent (ghost) bakgrunn, som er valgt og sier Hei på klikk
  </Tab>
</TabGroup>
```

### Supported props

```
children: node,
selected: bool,
ghost: bool,
condensed: bool
```

## Test

For å starte en testserver med live eksempler, kjør `npm start`

# Local

For å teste endringer lokalt kan man kjøre i dette prosjektes mappe:

```
sudo npm link
```

Og i prosjektet som skal bruke endringene gjort lokalt kan man kjøre:

```
npm link ffe-tabs-react
```
