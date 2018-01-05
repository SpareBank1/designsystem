Kontovelger med støtte for å velge flere kontoer på én gang.

```js
initialState = { value: '' };

<AccountSelectorMulti
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
    id="account-selector-multi-1337"
    locale="nb"
    onAccountSelected={acc => setState({ value: acc.name })}
    onBlur={value => setState({ value })}
    onChange={value => setState({ value })}
    onReset={() => setState({ value: '' })}
    selectedAccounts={[]}
    value={state.value}
/>;
```
