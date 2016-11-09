import React, { PropTypes } from 'react';
import BaseSelector from './base-selector';
import { accountFilter } from '../filter/filters';
import AccountRowMulti from '../suggestion/account-row-multi';

class AccountSelectorMulti extends React.Component {

  constructor(props) {
    super(props);
    this.renderItemRow = this.renderItemRow.bind(this);
  }

  renderItemRow(item, selected) {
    if (this.props.renderItemRow) {
      return this.props.renderItemRow(item, selected);
    }
    return <AccountRowMulti account={item} selected={selected} locale={this.props.locale}/>;
  }

  render() {
    return (
      <div>
        <BaseSelector
          items={ this.props.accounts }
          renderItemRow={ this.renderItemRow }
          onChange={ this.props.onChange }
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          onItemSelected={this.props.onAccountSelected}
          value={this.props.value}
          filter={ accountFilter }
          locale={ this.props.locale }
          inputId={this.props.id}
          placeholder={this.props.placeholder}
          ariaInvalid={this.props.ariaInvalid}
          noMatches={this.props.noMatches}
          multiSelect={true}
          selectedItems={this.props.selectedAccounts}
          renderMultiselectStatus={this.props.renderMultiselectStatus}
        />
      </div>
    );
  }
}

AccountSelectorMulti.propTypes = {
  accounts: PropTypes.array,
  selectedAccounts: PropTypes.array,
  locale: PropTypes.oneOf(["nb", "nn", "en"]),
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onAccountSelected: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  ariaInvalid: PropTypes.bool,
  noMatches: PropTypes.string,
  renderMultiselectStatus: PropTypes.func.isRequired,
  renderItemRow: PropTypes.func
};

AccountSelectorMulti.defaultProps = {
  ariaInvalid: false,
  placeholder: '',
  locale: 'nb',
  id: PropTypes.string,
  value: '',
  onAccountSelected: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {}
};

export default AccountSelectorMulti;
