Kontovelger for én konto.

```js
initialState = { value: '' };

<AccountSelector
    accounts={[
        {
            accountNumber: '123456789101',
            name: 'Brukskonto',
            currencyCode: 'NOK',
            balance: 1337,
        },
        {
            accountNumber: '123456789102',
            name: 'Sparekonto',
            currencyCode: 'NOK',
            balance: 13337,
        },
    ]}
    id="account-selector-1337"
    locale="nb"
    onAccountSelected={acc => setState({ value: acc.name })}
    onChange={value => setState({ value })}
    onReset={() => setState({ value: '' })}
    value={state.value}
/>;
```
