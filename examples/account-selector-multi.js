import React from 'react';
import { accountGroups } from './example-data';
import { AccountSelectorMulti } from '../src/account-selector';

const AccountSelectorMultiExample = () => {

  function onChange(accountNumberOrUserInput) {
    console.log('account changed', accountNumberOrUserInput);
  }

  function onBlur(value) {
    console.log(`account selector lost focus, account number or input value: ${value}`);
  }

  function onFocus() {
    console.log('account selector gained focus');
  }

  function onAccountSelected(value) {
    console.log('account selected', value);
  }

  const renderMultiselectStatus = (selectedItems) => {
    if (selectedItems.length === 0) {
      return 'Ingen kontoer valgt';
    } else if (selectedItems.length === 1) {
      return `${selectedItems.length} konto valgt`;
    }
    return `${selectedItems.length} kontoer valgt`;
  };

  return (
    <div className="selector">
      <label htmlFor="multiselector" className="ffe-form-label selector-label">Velg en eller flere kontoer</label>
      <AccountSelectorMulti
        accounts={ accountGroups }
        locale="nb"
        id="multiselector"
        placeholder="Velg konto"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={ onFocus }
        onAccountSelected={onAccountSelected}
        noMatches="Ingen kontoer"
        renderMultiselectStatus={renderMultiselectStatus}
      />
    </div>
  );
};

export default AccountSelectorMultiExample;
