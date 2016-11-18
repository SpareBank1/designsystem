import React, { PropTypes } from 'react';

const AccountSuggestionsEmpty = ({value}) =>
    <ul className="nfe-account-suggestions" role="listbox">
      <li className="nfe-account-suggestions__item">
        <div className="nfe-account-suggestions__empty">
          <span className="nfe-account-suggestions__name">{ value }</span>
        </div>
      </li>
    </ul>;

AccountSuggestionsEmpty.propTypes = {
  value: PropTypes.string
};

export default AccountSuggestionsEmpty;
