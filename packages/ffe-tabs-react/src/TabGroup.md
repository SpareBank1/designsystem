Flere tabs kan grupperes i en `TabGroup`:

```js
const Tab = require('./Tab').default;

<TabGroup>
    <Tab>Dette er en tab</Tab>
    <Tab selected={true}>Dette er en valgt tab</Tab>
    <Tab>Dette er en annen tab</Tab>
</TabGroup>;
```

Det finnes også en tynnere variant ved bruk av `thin`:

```js
const Tab = require('./Tab').default;

<TabGroup thin={true}>
    <Tab>Dette er en tab</Tab>
    <Tab selected={true}>Dette er en valgt tab</Tab>
    <Tab>Dette er en annen tab</Tab>
</TabGroup>;
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
    <TabGroup>
        <Tab
            selected={state.activeTabId === loan.house}
            onClick={() => {
                setState({ activeTabId: loan.house });
            }}
            aria-controls={loan.house}
        >
            Huslån
        </Tab>

        <Tab
            selected={state.activeTabId === loan.car}
            onClick={() => {
                setState({ activeTabId: loan.car });
            }}
            aria-controls={loan.car}
        >
            Billån
        </Tab>
    </TabGroup>

    <IconCard
        role="tabpanel"
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
        role="tabpanel"
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
