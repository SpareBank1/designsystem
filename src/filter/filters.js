export function accountFilter(query = '') {
  const nameQuery = query.toLowerCase();
  const accountNumberQuery = query.replace(/[ .]/g, '');

  return (account) => {
    if (account.name.toLowerCase().indexOf(nameQuery) !== -1) {
      return true;
    } else if (`${account.accountNumber}`.indexOf(accountNumberQuery) !== -1) {
      return true;
    }
    return false;
  };
}

export function nameFilter(query = '') {
  const nameQuery = query.toLowerCase();

  return (item) => {
    return item.name.toLowerCase().indexOf(nameQuery) !== -1;
  };
}
