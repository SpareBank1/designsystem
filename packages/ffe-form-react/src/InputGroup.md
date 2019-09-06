En _input group_ er en standarisert omverden for enkelt-inputs i et skjema. En gruppe består av en label, et valgfritt
tooltip, skjemaelementet, og en feilmelding for valideringsfeil som vil bli vist om det er feil i skjemaet.

```js
const { DatePicker } = require('../../ffe-datepicker-react');
const { DropDown } = require('../../ffe-dropdown-react');
const { Checkbox, Input, TextArea } = require('.');
const { SecondaryButton } = require('../../ffe-buttons-react');

initialState = { showErrors: false };

<React.Fragment>
    <div className="ffe-button-group">
        <SecondaryButton
            onClick={() =>
                setState(prevState => ({
                    showErrors: !prevState.showErrors,
                }))
            }
        >
            Skru feilmeldinger av/på
        </SecondaryButton>
    </div>
    <InputGroup
        label="Telefonnummer"
        tooltip="Vi bruker telefonnummer for å sende deg kvittering på SMS"
        fieldMessage={state.showErrors ? 'Ugyldig telefonnummer' : null}
    >
        {inputProps => (
            <>
                <Input
                    type="tel"
                    name="mobile"
                    onChange={e => console.log('onChange', e.target.value)}
                    onBlur={e => console.log('onBlur', e.target.value)}
                    {...inputProps}
                />
                <p>Ekstra innhold</p>
            </>
        )}
    </InputGroup>

    <InputGroup
        label="E-postadresse"
        fieldMessage={state.showErrors ? 'Ugyldig e-postadresse' : null}
    >
        <Input />
    </InputGroup>

    <InputGroup
        label="Måned"
        fieldMessage={state.showErrors ? 'Du må velge måned' : null}
    >
        <Dropdown defaultValue="placeholder">
            <option value="placeholder" disabled>
                Velg måned
            </option>
            <option value="jan">Januar</option>
            <option value="feb">Februar</option>
            <option value="mar">Mars</option>
        </Dropdown>
    </InputGroup>

    <InputGroup
        label="Fritekst"
        fieldMessage={state.showErrors ? 'Du må skrive noe lurt' : null}
    >
        <TextArea rows={4} />
    </InputGroup>

    <InputGroup
        label="Dato"
        fieldMessage={state.showErrors ? 'Feil dato' : null}
    >
        <Datepicker
            language="nb"
            maxDate="31.12.2016"
            minDate="01.01.2016"
            onChange={f => f}
            value={'01.01.2016'}
        />
    </InputGroup>

    <InputGroup fieldMessage={state.showErrors ? 'Ooops' : null}>
        <Checkbox name="check">Kryssboks</Checkbox>
    </InputGroup>
</React.Fragment>;
```

Default oppførsel er at det holdes av plass under inputfeltene for å vise en feilmelding uten at innholdet lengre ned endres. Dersom man ikke ønsker dette kan det skrus
av med å sette `extraMargin` prop til `false`.

```js
const { SecondaryButton } = require('../../ffe-buttons-react');
const { Input } = require('.');

initialState = { showErrors: false };

<React.Fragment>
    <div className="ffe-button-group">
        <SecondaryButton
            onClick={() =>
                setState(prevState => ({
                    showErrors: !prevState.showErrors,
                }))
            }
        >
            Skru feilmeldinger av/på
        </SecondaryButton>
    </div>
    <InputGroup
        extraMargin={false}
        label="Telefonnummer"
        tooltip="Vi bruker telefonnummer for å sende deg kvittering på SMS"
        fieldMessage={state.showErrors ? 'Ugyldig telefonnummer' : null}
    >
        {inputProps => (
            <>
                <Input
                    type="tel"
                    name="mobile"
                    onChange={e => console.log('onChange', e.target.value)}
                    onBlur={e => console.log('onBlur', e.target.value)}
                    {...inputProps}
                />
                <p>Ekstra innhold</p>
            </>
        )}
    </InputGroup>

    <InputGroup
        extraMargin={false}
        label="E-postadresse"
        fieldMessage={state.showErrors ? 'Ugyldig e-postadresse' : null}
    >
        <Input />
    </InputGroup>

    <InputGroup
        extraMargin={false}
        label="Måned"
        fieldMessage={state.showErrors ? 'Du må velge måned' : null}
    >
        <Dropdown defaultValue="placeholder">
            <option value="placeholder" disabled>
                Velg måned
            </option>
            <option value="jan">Januar</option>
            <option value="feb">Februar</option>
            <option value="mar">Mars</option>
        </Dropdown>
    </InputGroup>

    <InputGroup
        extraMargin={false}
        label="Fritekst"
        fieldMessage={state.showErrors ? 'Du må skrive noe lurt' : null}
    >
        <TextArea rows={4} />
    </InputGroup>

    <InputGroup
        extraMargin={false}
        label="Dato"
        fieldMessage={state.showErrors ? 'Feil dato' : null}
    >
        <Datepicker
            language="nb"
            maxDate="31.12.2016"
            minDate="01.01.2016"
            onChange={f => f}
            value={'01.01.2016'}
        />
    </InputGroup>

    <InputGroup
        extraMargin={false}
        fieldMessage={state.showErrors ? 'Ooops' : null}
    >
        <Checkbox name="check">Kryssboks</Checkbox>
    </InputGroup>
</React.Fragment>;
```

Dersom man skal vise en hjelpetekst som alltid er synlig brukes `description` i stedet for `tooltip`.

```js
const { Input } = require('.');

<InputGroup
    label="Telefonnummer"
    description="Vi bruker telefonnummer for å sende deg kvittering på SMS"
>
    <Input
        type="tel"
        name="mobile"
        onChange={e => console.log('onChange', e.target.value)}
        onBlur={e => console.log('onBlur', e.target.value)}
    />
</InputGroup>;
```

Utviklere bør merke seg at man er nødt til å bruke det såkalte _function-as-a-child_-patternet med mindre man bare har
ett child-element til InputGroup. Dette er fordi InputGroup setter properties som ID og liknende på rot-elementet, og
det forventes at det er et skjemaelement.

Et eksempel med flere children kan du se her:

```js
const { Input } = require('.');

<InputGroup label="How old are you?">
    {extraProps => (
        <div>
            <span>I am </span>
            <Input {...extraProps} inline={true} textLike={true} />
            <span> years old</span>
        </div>
    )}
</InputGroup>;
```
