Flere tab buttons kan grupperes i en `TabButtonGroup`:

```js
const TabButton = require('./TabButton').default;

<TabButtonGroup>
    <TabButton>Dette er en tab button</TabButton>
    <TabButton>Dette er en annen tab button</TabButton>
</TabButtonGroup>;
```

Det finnes også en tynnere variant ved bruk av `thin`:

```js
const TabButton = require('./TabButton').default;

<TabButtonGroup thin={true}>
    <TabButton>Dette er en tab button</TabButton>
    <TabButton>Dette er en annen tab button</TabButton>
</TabButtonGroup>;
```

Eksempel med innhold knyttet til hver tab:

```js
const { HusIkon, BilIkon } = require('../../ffe-icons-react');

const displayNone = {
    display: 'none',
};

const loan = { house: 'house', car: 'car' };
initialState = { activeTabId: loan.house };

<React.Fragment>
    <TabButtonGroup>
        <TabButton
            selected={state.activeTabId === loan.house}
            onClick={() => {
                setState({ activeTabId: loan.house });
            }}
            aria-controls={loan.house}
        >
            Huslån
        </TabButton>

        <TabButton
            selected={state.activeTabId === loan.car}
            onClick={() => {
                setState({ activeTabId: loan.car });
            }}
            aria-controls={loan.car}
        >
            Billån
        </TabButton>
    </TabButtonGroup>

    <IconCard
        icon={<HusIkon />}
        id={loan.house}
        style={state.activeTabId === loan.house ? null : displayNone}
    >
        {({ Title, Subtext }) => (
            <React.Fragment>
                <Title>Huslån</Title>
                <Subtext>Ta opp huslån</Subtext>
            </React.Fragment>
        )}
    </IconCard>

    <IconCard
        icon={<BilIkon />}
        id={loan.car}
        style={state.activeTabId === loan.car ? null : displayNone}
    >
        {({ Title, Subtext }) => (
            <React.Fragment>
                <Title>Billån</Title>
                <Subtext>Ta opp billån</Subtext>
            </React.Fragment>
        )}
    </IconCard>
</React.Fragment>;
```
