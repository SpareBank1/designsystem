```js
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label">Hvilke aviser leser du?</legend>
    <CheckBox name="newspapers" value="sport">
        VG
    </CheckBox>
    <CheckBox name="newspapers" value="food">
        Dagbladet
    </CheckBox>
    <CheckBox name="newspapers" value="moon">
        Aftenposten
    </CheckBox>
</fieldset>
```

Kan komme under hverandre også, ved å sende inn `inline={false}`:

```js
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label">Hva er du interessert i?</legend>
    <CheckBox name="interests" value="sport" inline={false}>
        Sport
    </CheckBox>
    <CheckBox name="interests" value="food" inline={false}>
        Matlaging
    </CheckBox>
    <CheckBox name="interests" value="moon" inline={false}>
        Månen
    </CheckBox>
</fieldset>
```

Du kan merke at et felt er ugyldig ved å sette `aria-invalid="true"`:

```js
<CheckBox name="loves-ads" aria-invalid="true" checked={true} onChange={f => f}>
    Ja, jeg vil gjerne motta reklame!
</CheckBox>
```

Du kan sende inn en callback-funksjon som blir kalt hver gang verdien i checkboxen endrer
seg med `onChange`:

```js
<CheckBox
    name="clicked"
    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}
>
    Trykk for å lære litt om meg
</CheckBox>
```

Du kan forhindre at click-event bobler opp fra checkboxen.
Dette kan være nyttig dersom området rundt checkboxen er klikkbart.

```js
<div style={ { background: '#ccc', width: '150px' } } onClick={ () => alert('Jeg skal ikke komme frem når du bruker checkboxen') }>
    <CheckBox
        name="clicked"
        stopPropagation
    >
        Trykk utenfor label for en alert
    </CheckBox>
</div>
```

Komponenten videresender alle udokumenterte props til `<input />`-elementet.
