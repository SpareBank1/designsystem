# Datepicker

```js
<Datepicker
    label="Velg en dato"
    language="nb"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={f => console.log(f)}
    value="01.01.2016"
/>
```

Har en egen styling dersom feltet merkes med `aria-invalid="true"`:

```js
<Datepicker
    aria-invalid="true"
    label="Velg dato"
    language="nn"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={f => console.log(f)}
    value="01.01.2016"
/>
```

Kan rendres med kalenderen over inputfeltet:

```js
<Datepicker
    calendarAbove={true}
    label="Velg en dato"
    language="nb"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={f => console.log(f)}
    value="01.01.2016"
/>
```


Kan rendres på engelsk og nynorsk, i tillegg til bokmål:

```js
<Datepicker
    label="Pick a date"
    language="en"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={f => console.log(f)}
    value="01.01.2016"
/>
```

```js
<Datepicker
    label="Velg dato"
    language="nn"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={f => console.log(f)}
    value="01.01.2016"
/>
```
