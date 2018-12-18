```js
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label ffe-form-label--block">
        Hvilke aviser leser du?
    </legend>
    <Checkbox name="newspapers" value="vg">
        VG
    </Checkbox>
    <Checkbox name="newspapers" value="dagbladet">
        Dagbladet
    </Checkbox>
    <Checkbox name="newspapers" value="aftenposten">
        Aftenposten
    </Checkbox>
</fieldset>
```

Kan komme under hverandre også, ved å sende inn `inline={false}`:

```js
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label">Hva er du interessert i?</legend>
    <Checkbox name="interests" value="sport" inline={false}>
        Sport
    </Checkbox>
    <Checkbox name="interests" value="food" inline={false}>
        Matlaging
    </Checkbox>
    <Checkbox name="interests" value="moon" inline={false}>
        Månen
    </Checkbox>
</fieldset>
```

Dersom du skal ha en skjult label, brukes `hiddenLabel={true}` og label sendes inn via en `aria-label` prop og ikke som en child:

```js
<Checkbox
    defaultChecked={true}
    aria-label="Jeg har en ingen label"
    hiddenLabel={true}
    inline={false}
/>
```

Du kan merke at et felt er ugyldig ved å sette `aria-invalid="true"`:

```js
<Checkbox name="loves-ads" aria-invalid="true" checked={true} onChange={f => f}>
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

Du kan sende inn children som en funksjon, for å rendre din egen label. Funksjonen mottar props
du kan spre på labelen.

```js
<Checkbox>
    {labelProps => <label {...labelProps}>Her benyttes render props</label>}
</Checkbox>
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label ffe-form-label--block ffe-form-label--dark">
        Hvilke TV kanal ser du på?
    </legend>
    <Checkbox name="newspapers" value="nrk" dark={true}>
        NRK
    </Checkbox>
    <Checkbox name="newspapers" value="tv2" dark={true}>
        TV2
    </Checkbox>
    <Checkbox name="newspapers" value="tvnorge" dark={true}>
        TVNorge
    </Checkbox>
</fieldset>
```

Komponenten videresender alle udokumenterte props til `<input />`-elementet.
