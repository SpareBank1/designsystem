```js
<ContextInfoMessage>
    Nå har det kommet noe nytt og spennende fra SpareBank 1!
</ContextInfoMessage>
```

```js
const { InfoIkon } = require('@sb1/ffe-icons-react');

<ContextInfoMessage icon={<InfoIkon />}>
    Nå har det kommet noe nytt og spennende fra SpareBank 1!
</ContextInfoMessage>;
```

```js
<ContextInfoMessage header="Til info">
    Nå har det kommet noe nytt og spennende fra SpareBank 1!
</ContextInfoMessage>
```

```js
<ContextInfoMessage compact={true}>En liten beskjed</ContextInfoMessage>
```

```js
<ContextInfoMessage showCloseButton={true}>
    Jeg kan også lukkes
</ContextInfoMessage>
```
