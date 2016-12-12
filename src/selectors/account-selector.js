import React, { PropTypes } from 'react';
import BaseSelector from './base-selector';
import { accountFilter } from '../filter/filters';
import AccountRowSingle from '../suggestion/account-row-single';
import AccountDetails from '../details/account-details';

class AccountSelector extends React.Component {

  constructor(props) {
    super(props);

    this.renderItemRow = this.renderItemRow.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.reset = this.reset.bind(this);
  }

  renderItemRow(item) {
    if (this.props.renderItemRow) {
      return this.props.renderItemRow(item);
    }
    return <AccountRowSingle account={item} locale={this.props.locale}/>;
  }

  renderDetails(selectedItems) {
    if (selectedItems.length === 0) {
      return null;
    }
    return (<AccountDetails
      account={ selectedItems[0] }
      locale={ this.props.locale }
    />);
  }

  onBlur(selectedAccounts, inputValue) {
    this.props.onBlur(selectedAccounts[0], inputValue);
  }

  reset(inputFocus) {
    this.baseSelector.reset(inputFocus);
  }

  render() {
    const selectedItems = this.props.selectedAccount ? [this.props.selectedAccount] : [];

    // To provide backwards compatibility
    const accounts = this.props.accounts.map(account => ({
        ...account,
        id: account.id || parseInt(account.accountNumber, 10)
      })
    );

    return (
      <BaseSelector
        ref={baseSelector => {this.baseSelector = baseSelector;}}
        items={ accounts }
        renderItemRow={ this.renderItemRow }
        onChange={ this.props.onChange }
        onBlur={this.onBlur}
        onFocus={this.props.onFocus}
        onItemSelected={this.props.onAccountSelected}
        value={this.props.value}
        filter={ accountFilter }
        locale={ this.props.locale }
        inputId={this.props.id}
        placeholder={this.props.placeholder}
        ariaInvalid={this.props.ariaInvalid}
        noMatches={this.props.noMatches}
        selectedItems={ selectedItems }
        getRowId={(account) => account.id}
        renderDetails={this.renderDetails}
      />
    );
  }
}

AccountSelector.propTypes = {
  accounts: PropTypes.array.isRequired,
  onAccountSelected: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  locale: PropTypes.oneOf(["nb", "nn", "en"]),
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  ariaInvalid: PropTypes.bool,
  noMatches: PropTypes.string,
  selectedAccount: PropTypes.object,
  renderItemRow: PropTypes.func
};

AccountSelector.defaultProps = {
  onChange: () => {},
  locale: 'nb',
  onBlur: () => {},
  ariaInvalid: false,
  value: '',
  onFocus: () => {}
};

export default AccountSelector;
