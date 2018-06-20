Knappen går til kjøp, bestill, søk etc. På produktsider følger knappen etter USP
(unique selling points) øverst på sidene. Det skal bare være én action-knapp (i
grønn) på en side.

```js
<ActionButton
    onClick={() => {
        alert('Hei!');
    }}
>
    Klikk på meg!
</ActionButton>
```

På sider der man har behov for flere action-knapper, for eksempel i skjema med
flere kjøpsknapper bruker man en versjon av action button som heter `ghost`.
Denne knappen er hvit med grønn outline og grønn tekst.

```js
<ActionButton
    onClick={() => {
        alert('Bø!');
    }}
    ghost={true}
>
    Spooky!
</ActionButton>
```

For å vise at noe skjer når bruker har trykket på en knapp, og dersom systemet
er veldig treigt, vil det bli vist en progressindikator – spinner – på knappen.

```js
initialState = { isLoading: false };
const toggleLoading = () => setState({ isLoading: !state.isLoading });

<ActionButton
    isLoading={state.isLoading}
    onClick={() => {
        setState({ isLoading: true });
        setTimeout(() => setState({ isLoading: false }), 4000);
    }}
    ariaLoadingMessage="Jeg jobber med saken..."
>
    Klikk for å laste!
</ActionButton>;
```
