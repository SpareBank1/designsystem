import React, { PropTypes } from 'react';

const AccountSuggestionEmpty = ({value}) =>
  <div className='nfe-account-suggestions__empty'>
    <span className='nfe-account-suggestions__name'>{ value }</span>
  </div>;

AccountSuggestionEmpty.propTypes = {
  value: PropTypes.string.isRequired
};

export default AccountSuggestionEmpty;
