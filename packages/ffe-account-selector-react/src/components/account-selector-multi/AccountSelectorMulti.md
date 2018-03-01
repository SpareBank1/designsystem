Kontovelger med støtte for å velge flere kontoer på én gang.

```js
initialState = {
    selectedAccounts: undefined,
    value: undefined,
};

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
    onAccountSelected={acc => {
        const selectedAccounts = Array.isArray(state.selectedAccounts) 
            ? state.selectedAccounts 
            : [];

        const filteredAccounts = selectedAccounts
            .filter(a => a.accountNumber !== acc.accountNumber);
        
        const accountAlreadySelectedAndShouldBeRemoved =
            filteredAccounts.length !== selectedAccounts.length;

        if (accountAlreadySelectedAndShouldBeRemoved) {
            setState({ 
                selectedAccounts: filteredAccounts,
            });
        } else {
            setState({
                selectedAccounts: [
                    ...selectedAccounts,
                    acc,
                ],
            });
        }
    }}
    onBlur={f => f}
    selectedAccounts={state.selectedAccounts}
    value={state.value}
/>;
```
