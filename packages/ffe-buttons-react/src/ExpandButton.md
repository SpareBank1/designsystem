```js
initialState = { isExpanded: false };
<div>
    <ExpandButton
        isExpanded={state.isExpanded}
        onClick={() => setState({ isExpanded: !state.isExpanded })}
    >
        Vis mer
    </ExpandButton>
</div>;
```
