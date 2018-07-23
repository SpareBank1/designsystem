Flere tab buttons kan grupperes i en `TabButtonGroup`:

```js
const TabButton = require('./TabButton').default;

<TabButtonGroup>
    <TabButton>Dette er en tab button</TabButton>
    <TabButton>Dette er en annen tab button</TabButton>
</TabButtonGroup>;
```

Det finnes også en tynnere variant ved bruk av `thin`:

```js
const TabButton = require('./TabButton').default;

<TabButtonGroup thin={true}>
    <TabButton>Dette er en tab button</TabButton>
    <TabButton>Dette er en annen tab button</TabButton>
</TabButtonGroup>;
```
