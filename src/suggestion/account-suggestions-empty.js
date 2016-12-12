import React, { PropTypes } from 'react';

const AccountSuggestionsEmpty = ({ value }) =>
  <ul className="nfe-account-suggestions" role="listbox">
    <li className="nfe-account-suggestions__item-no-matches">
      <span>{ value }</span>
    </li>
  </ul>;

AccountSuggestionsEmpty.propTypes = {
  value: PropTypes.string
};

export default AccountSuggestionsEmpty;
