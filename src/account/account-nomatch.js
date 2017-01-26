import React, { PropTypes } from 'react';

const AccountNoMatch = ({value}) =>
  <div className='nfe-account-suggestions__empty'>
    <span className='nfe-account-suggestions__name'>{ value }</span>
  </div>;

AccountNoMatch.propTypes = {
  value: PropTypes.string.isRequired
};

export default AccountNoMatch;
