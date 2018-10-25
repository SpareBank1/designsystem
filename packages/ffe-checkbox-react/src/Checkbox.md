```js
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label ffe-form-label--block">
        Hvilke aviser leser du?
    </legend>
    <CheckBox name="newspapers" value="vg">
        VG
    </CheckBox>
    <CheckBox name="newspapers" value="dagbladet">
        Dagbladet
    </CheckBox>
    <CheckBox name="newspapers" value="aftenposten">
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

Dersom du skal ha en skjult label, brukes `hiddenLabel={true}` og label sendes inn via en `aria-label` prop og ikke som en child:

```js
<CheckBox
    defaultChecked={true}
    aria-label="Jeg har en ingen label"
    hiddenLabel={true}
    inline={false}
/>
```

Du kan merke at et felt er ugyldig ved å sette `aria-invalid="true"`:

```js
<CheckBox name="loves-ads" aria-invalid="true" checked={true} onChange={f => f}>
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

Du kan sende inn children som en funksjon, for å rendre din egen label. Funksjonen mottar props
du kan spre på labelen.

```js
<CheckBox>
    {labelProps => <label {...labelProps}>Her benyttes render props</label>}
</CheckBox>
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
<fieldset className="ffe-fieldset">
    <legend className="ffe-form-label ffe-form-label--block ffe-form-label--dark">
        Hvilke TV kanal ser du på?
    </legend>
    <CheckBox name="newspapers" value="nrk" dark={true}>
        NRK
    </CheckBox>
    <CheckBox name="newspapers" value="tv2" dark={true}>
        TV2
    </CheckBox>
    <CheckBox name="newspapers" value="tvnorge" dark={true}>
        TVNorge
    </CheckBox>
</fieldset>        
```

Komponenten videresender alle udokumenterte props til `<input />`-elementet.
