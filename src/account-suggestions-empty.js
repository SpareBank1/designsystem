import React, { PropTypes } from 'react';

const AccountSuggestionsEmpty = ({value}) =>
    <ul className="nfe-account-suggestions" role="listbox">
      <li className="nfe-account-suggestions__item">
        <div className="nfe-account-suggestions__empty">
          <a className="nfe-account-suggestions__name">{ value }</a>
        </div>
      </li>
    </ul>;

AccountSuggestionsEmpty.propTypes = {
  value: PropTypes.string
};

export default AccountSuggestionsEmpty;
