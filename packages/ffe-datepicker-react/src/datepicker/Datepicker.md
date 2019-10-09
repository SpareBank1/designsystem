```js
initialState = { date: '01.01.2016' };
<Datepicker
    inputProps={{ id: 'datepicker-example' }}
    label="Velg dato"
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
    inputProps={{ id: 'datepicker-example-aria-invalid' }}
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
    inputProps={{ id: 'datepicker-example-calendar-above' }}
    label="Velg en dato"
    language="nb"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={date => setState({ date })}
    value={state.date}
/>;
```

Kan rendres i full bredde:

```js
initialState = { date: '01.01.2016' };
<Datepicker
    inputProps={{ id: 'datepicker-example' }}
    label="Velg dato"
    language="nb"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={date => setState({ date })}
    value={state.date}
    fullWidth={true}
/>;
```

Kan rendres på engelsk og nynorsk, i tillegg til bokmål:

```js
initialState = { date: '01.01.2016' };
<Datepicker
    inputProps={{ id: 'datepicker-example-en' }}
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
    inputProps={{ id: 'datepicker-example-nn' }}
    label="Velg dato"
    language="nn"
    maxDate="31.12.2016"
    minDate="01.01.2016"
    onChange={date => setState({ date })}
    value={state.date}
/>;
```
