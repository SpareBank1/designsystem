import React, { PropTypes } from 'react';

const AccountNoMatch = ({value}) =>
  <div className='account-suggestion__nomatches'>
    <span>{ value }</span>
  </div>;

AccountNoMatch.propTypes = {
  value: PropTypes.string.isRequired
};

export default AccountNoMatch;
