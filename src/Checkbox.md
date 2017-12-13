# Checkbox

```js
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label">Hvilke aviser leser du?</legend>
    <Checkbox name="newspapers" value="sport">VG</Checkbox>
    <Checkbox name="newspapers" value="food">Dagbladet</Checkbox>
    <Checkbox name="newspapers" value="moon">Aftenposten</Checkbox>
</fieldset>
```

Kan komme under hverandre også, ved å sende inn `inline={false}`:

```js
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label">Hva er du interessert i?</legend>
    <Checkbox name="interests" value="sport" inline={false}>Sport</Checkbox>
    <Checkbox name="interests" value="food" inline={false}>Matlaging</Checkbox>
    <Checkbox name="interests" value="moon" inline={false}>Månen</Checkbox>
</fieldset>
```

Du kan merke at et felt er ugyldig ved å sette `aria-invalid="true"`:

```js
<Checkbox
    name="loves-ads"
    aria-invalid="true"
    checked={true}
>
    Ja, jeg vil gjerne motta reklame!
</Checkbox>
```

Du kan kan sende inn en callback-funksjon som blir kalt hver gang verdien i checkboxen endrer
seg med `onChange`:

```js
<Checkbox
    name="clicked"
    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}
>
    Trykk for å lære litt om meg
</Checkbox>
```

Komponenten videresender alle udokumenterte props til `<input />`-elementet.