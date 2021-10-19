Om du ikke bruker InputGroup kan du fremdeles bruke deler av den, som f.eks. Tooltip.

```js
<Tooltip>Dette er lurt å tenke på</Tooltip>
```

Dersom du bygger din egen hjelpefunksjon og kun trenger knappen så er det ikke nødvendig
å sende med innholdet, du kan bruke `onClick` prop til å reagere på knappetrykk men da må du
også sende med `aria-controls` som skal peke på iden til elementet som vises/skjules med knappen din.

```js
const initialState = { open: false };

<>
    <Tooltip
        aria-controls="tooltip-text"
        onClick={() => setState(prevState => ({ open: !prevState.open }))}
    />
    <div hidden={!state.open} id="tooltip-text">
        Titt tei!
    </div>
</>;
```
