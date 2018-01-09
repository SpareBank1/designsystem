En _input group_ er en standarisert omverden for enkelt-inputs i et skjema. En gruppe består av en label, et valgfritt
tooltip, skjemaelementet, og en feilmelding for valideringsfeil som vil bli vist om det er feil i skjemaet.

```js
<InputGroup
    label="Telefonnummer"
    tooltop="Vi bruker telefonnummer for å sende deg kvittering på SMS"
>
    <Input
        type="tel"
        name="mobile"
        onChange={e => console.log('onChange', e.target.value)}
        onBlur={e => console.log('onBlur', e.target.value)}
    />
</InputGroup>
```

Utviklere bør merke seg at man er nødt til å bruke det såkalte _function-as-a-child_-patternet med mindre man bare har
ett child-element til InputGroup. Dette er fordi InputGroup setter properties som ID og liknende på rot-elementet, og
det forventes at det er et skjemaelement.

Et eksempel med flere children kan du se her:

```js static
<InputField label="How old are you?">
  {(extraProps) => (
    <Fragment>
        <InputField
            {...extraProps}
            inline={true}
        />
        <span> years old</span>
    </Fragment>
  )}
</InputField>
```
