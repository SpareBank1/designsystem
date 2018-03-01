Kontovelger for én konto.

```js
initialState = { value: '' };

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
    id="account-selector-1337"
    locale="nb"
    onAccountSelected={acc =>
        setState({ value: acc.name, selectedAccount: acc })
    }
    onChange={value => setState({ value })}
    onReset={() => setState({ value: '', selectedAccount: null })}
    value={state.value}
    selectedAccount={state.selectedAccount}
/>;
```
