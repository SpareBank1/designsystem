Dette er en ny type kort som ikke har fått navn enda. Det har plass til ikon, overskrift og detaljer.

```jsx
const { GrafOppIkon } = require('../../ffe-icons-react');

<NewCard
    heading="Aksjesparekonto"
    details="Sparing i fond og aksjer er ikke bare for proffene"
    icon={ <GrafOppIkon /> }
/>
```

Kortet har to modifiers, en for å gjøre det litt mindre og en for å gjøre innholdet grått

```jsx
const { SparegrisIkon, KryssSirkelIkon } = require('../../ffe-icons-react');

<React.Fragment>
    <NewCard
        heading="Sparekonto voksen 25"
        details="7 004,00"
        icon={ <SparegrisIkon /> }
        condensed={ true }
    />
    <NewCard
        heading="Start ny sparing"
        details="Det er mange måter å spare på"
        icon={ <KryssSirkelIkon style={ { transform: 'rotate(45deg)' } } /> }
        greyCharcoal={ true }
        condensed={ true }
    />
</React.Fragment>
```
