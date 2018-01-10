```js
initialState = { date: '01.01.2016' };
<Datepicker
    label="Velg en dato"
    language="nb"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={date => setState({ date })}
    value={state.date}
/>;
```

Har en egen styling dersom feltet merkes med `aria-invalid="true"`:

```js
initialState = { date: '01.01.2016' };
<Datepicker
    aria-invalid="true"
    label="Velg dato"
    language="nn"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={date => setState({ date })}
    value={state.date}
/>;
```

Kan rendres med kalenderen over inputfeltet:

```js
initialState = { date: '01.01.2016' };
<Datepicker
    calendarAbove={true}
    label="Velg en dato"
    language="nb"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={date => setState({ date })}
    value={state.date}
/>;
```

Kan rendres på engelsk og nynorsk, i tillegg til bokmål:

```js
initialState = { date: '01.01.2016' };
<Datepicker
    label="Pick a date"
    language="en"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={date => setState({ date })}
    value={state.date}
/>;
```

```js
initialState = { date: '01.01.2016' };
<Datepicker
    label="Velg dato"
    language="nn"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={date => setState({ date })}
    value={state.date}
/>;
```
