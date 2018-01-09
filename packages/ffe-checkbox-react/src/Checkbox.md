# Checkbox

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
<CheckBox name="loves-ads" aria-invalid="true" checked={true}>
    Ja, jeg vil gjerne motta reklame!
</CheckBox>
```

Du kan kan sende inn en callback-funksjon som blir kalt hver gang verdien i checkboxen endrer
seg med `onChange`:

```js
<CheckBox
    name="clicked"
    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}
>
    Trykk for å lære litt om meg
</CheckBox>
```

Komponenten videresender alle udokumenterte props til `<input />`-elementet.
