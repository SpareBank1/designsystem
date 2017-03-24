import React, { PropTypes } from 'react';
import {Locale} from '../util/types';
import txt from '../i18n/i18n';

const AccountNoMatch = ({value, locale}) =>
  <div className='ffe-account-suggestion__nomatches'>
    <span>{ value || txt[locale].NO_ACCOUNTS_FOUND }</span>
  </div>;

AccountNoMatch.propTypes = {
  value: PropTypes.string,
  locale : Locale.isRequired,
};

export default AccountNoMatch;
