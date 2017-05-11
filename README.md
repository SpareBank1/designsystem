# ffe-chart-donut-react

## Install

```
$ npm install --save ffe-chart-donut-react
```

## Usage

Appen må først importere less stylesheet fra lib/ mappa:
```css
@import "~ffe-chart-donut-react/lib/ffe-chart-donut";
```

For å bruke selve komponenten:
```javascript
import ChartDonut from 'ffe-chart-donut-react';

...

return (
    <ChartDonut
        firstLabel="..."
        lastLabel="..."
        name="..."
        percentage={42}
    />
);

```

Note that `percentage` must be in the 0-100 range (and a `Number`). Normalize input if needed.

## Test

### Local

`npm start` to start up a test-server.

If you're testing changes via another project, run
```
npm link
```
And in the other project, run
```
npm link ffe-chart-donut-react
```
