import React, { PropTypes } from 'react';

const AccountSuggestionsEmpty = ({value, onSelect}) =>
    <ul className="nfe-account-suggestions" role="listbox">
      <li className="nfe-account-suggestions__item">
        <div className="nfe-account-suggestions__empty" onMouseDown={ onSelect }>
          <span className="nfe-account-suggestions__name">{ value }</span>
        </div>
      </li>
    </ul>;

AccountSuggestionsEmpty.propTypes = {
  value: PropTypes.string,
  onSelect: PropTypes.func
};

export default AccountSuggestionsEmpty;
