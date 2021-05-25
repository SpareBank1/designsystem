Kontovelger for én konto.

```js
initialState = { value: undefined };
const label1 = 'label1';

<InputGroup label="Velg konto" extraMargin={false} labelId={label1}>
    <AccountSelector
        accounts={[
            {
                accountNumber: '1234 56 789101',
                name: 'Brukskonto',
                currencyCode: 'NOK',
                balance: 1337,
            },
            {
                accountNumber: '1234 56 789102',
                name: 'Brukskonto2',
                currencyCode: 'NOK',
                balance: 13337,
            },
            {
                accountNumber: '2234 56 789102',
                name: 'Sparekonto1',
                currencyCode: 'NOK',
                balance: 109236,
            },
            {
                accountNumber: '1253 47 789102',
                name: 'Sparekonto2',
                currencyCode: 'NOK',
                balance: 0,
            },
        ]}
        id="account-selector-single"
        locale="nb"
        onAccountSelected={value => setState({ value })}
        onReset={() => setState({ value: '' })}
        selectedAccount={state.value}
        labelId={label1}
    />
</InputGroup>;
```

Kan vise beløp

```js
initialState = { value: undefined };
const label2 = 'label2';

<InputGroup label="Velg konto" extraMargin={false} labelId={label2}>
    <AccountSelector
        accounts={[
            {
                accountNumber: '1234 56 789101',
                name: 'Brukskonto',
                currencyCode: 'NOK',
                balance: 1337,
            },
            {
                accountNumber: '1234 56 789102',
                name: 'Brukskonto2',
                currencyCode: 'NOK',
                balance: 13337,
            },
            {
                accountNumber: '2234 56 789102',
                name: 'Sparekonto1',
                currencyCode: 'EUR',
                balance: 109236,
            },
            {
                accountNumber: '1253 47 789102',
                name: 'Sparekonto2',
                currencyCode: 'NOK',
                balance: 0,
            },
        ]}
        id="account-selector-single"
        locale="nb"
        onAccountSelected={value => setState({ value })}
        onReset={() => setState({ value: '' })}
        selectedAccount={state.value}
        showBalance
        labelId={label2}
    />
</InputGroup>;
```

Kan tillate egeninnskrevet konto

```js
initialState = { value: undefined };
const label4 = 'label4';

<InputGroup label="Velg konto" extraMargin={false} labelId={label4}>
    <AccountSelector
        accounts={[
            {
                accountNumber: '1234 56 789101',
                name: 'Brukskonto',
                currencyCode: 'NOK',
                balance: 1337,
            },
            {
                accountNumber: '1234 56 789102',
                name: 'Brukskonto2',
                currencyCode: 'NOK',
                balance: 13337,
            },
            {
                accountNumber: '2234 56 789102',
                name: 'Sparekonto1',
                currencyCode: 'NOK',
                balance: 109236,
            },
            {
                accountNumber: '1253 47 789102',
                name: 'Sparekonto2',
                currencyCode: 'NOK',
                balance: 0,
            },
        ]}
        id="account-selector-single"
        locale="nb"
        onAccountSelected={value => setState({ value })}
        onReset={() => setState({ value: '' })}
        selectedAccount={state.value}
        allowCustomAccount
        labelId={label4}
    />
</InputGroup>;
```

Kan skru av at kontonummer blir formattert mens man skriver

```js
initialState = { value: undefined };
const label3 = 'label3';

<InputGroup label="Velg konto" extraMargin={false} labelId={label3}>
    <AccountSelector
        accounts={[
            {
                accountNumber: '1234 56 789101',
                name: 'Brukskonto',
                currencyCode: 'NOK',
                balance: 1337,
            },
            {
                accountNumber: '1234 56 789102',
                name: 'Brukskonto2',
                currencyCode: 'NOK',
                balance: 13337,
            },
            {
                accountNumber: '2234 56 789102',
                name: 'Sparekonto1',
                currencyCode: 'NOK',
                balance: 109236,
            },
            {
                accountNumber: '1253 47 789102',
                name: 'Sparekonto2',
                currencyCode: 'NOK',
                balance: 0,
            },
        ]}
        id="account-selector-single"
        locale="nb"
        onAccountSelected={value => setState({ value })}
        onReset={() => setState({ value: '' })}
        selectedAccount={state.value}
        formatAccountNumber={false}
        labelId={label3}
    />
</InputGroup>;
```

Kan velge å ikke holde av plass for visning av valgt konto

```js
initialState = { value: undefined };
const label4 = 'label4';

<InputGroup label="Velg konto" extraMargin={false} labelId={label4}>
    <AccountSelector
        accounts={[
            {
                accountNumber: '1234 56 789101',
                name: 'Brukskonto',
                currencyCode: 'NOK',
                balance: 1337,
            },
            {
                accountNumber: '1234 56 789102',
                name: 'Brukskonto2',
                currencyCode: 'NOK',
                balance: 13337,
            },
            {
                accountNumber: '2234 56 789102',
                name: 'Sparekonto1',
                currencyCode: 'NOK',
                balance: 109236,
            },
            {
                accountNumber: '1253 47 789102',
                name: 'Sparekonto2',
                currencyCode: 'NOK',
                balance: 0,
            },
        ]}
        id="account-selector-single"
        locale="nb"
        onAccountSelected={value => setState({ value })}
        onReset={() => setState({ value: '' })}
        selectedAccount={state.value}
        allowCustomAccount
        labelId={label4}
        withSpaceForDetails={false}
    />
</InputGroup>;
```

Med egendefinert listeutseende

```js
initialState = { value: undefined };
const label5 = 'label5';

const CustomListElementBody = ({ item, isHighlighted }) => {
    return (
        <div
            style={{
                padding: '8px',
                background: isHighlighted ? '#ff9100' : 'white',
            }}
        >
            <div>{item.name}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <SmallText>{item.accountNumber}</SmallText>
                <SmallText>{item.amount}</SmallText>
            </div>
        </div>
    );
};

<InputGroup label="Velg konto" extraMargin={false} labelId={label5}>
    <AccountSelector
        accounts={[
            {
                accountNumber: '1234 56 789101',
                name: 'Brukskonto',
                currencyCode: 'NOK',
                balance: 1337,
            },
            {
                accountNumber: '1234 56 789102',
                name: 'Brukskonto2',
                currencyCode: 'NOK',
                balance: 13337,
            },
            {
                accountNumber: '2234 56 789102',
                name: 'Sparekonto1',
                currencyCode: 'NOK',
                balance: 109236,
            },
            {
                accountNumber: '1253 47 789102',
                name: 'Sparekonto2',
                currencyCode: 'NOK',
                balance: 0,
            },
        ]}
        id="account-selector-single"
        locale="nb"
        onAccountSelected={value => setState({ value })}
        onReset={() => setState({ value: '' })}
        selectedAccount={state.value}
        labelId={label5}
        listElementBody={CustomListElementBody}
    />
</InputGroup>;
```
