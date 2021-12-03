var COMMON_SEPARATORS = new RegExp(/[\s.]/g);
export function accountFilter() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var nameQuery = query.toLowerCase();
  var accountNumberQuery = query.replace(COMMON_SEPARATORS, '');
  return function (account) {
    if (account.name.toLowerCase().includes(nameQuery)) {
      return true;
    } else if (String(account.accountNumber).replace(COMMON_SEPARATORS, '').includes(accountNumberQuery)) {
      return true;
    }

    return false;
  };
}

function noFilter() {
  return function () {
    return function () {
      return true;
    };
  };
}

export function createAccountFilter(enableFilter) {
  return enableFilter ? accountFilter : noFilter;
}