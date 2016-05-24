import React, { PropTypes } from 'react';

export default class ActiveDate extends React.Component {

  componentDidMount() {
    if (this.props.date.isFocus && this.props.setFocusOnInitialMount) {
      this._datecell.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.date.isFocus && this.props.setFocusOnInitialMount) {
      this._datecell.focus();
    }
  }

  dateClassName() {
    let className = 'ffe-datepicker__date';
    className += this.props.date.isToday ? ' ffe-datepicker__date--today' : '';
    className += this.props.date.isFocus ? ' ffe-datepicker__date--focus' : '';
    className += this.props.date.isSelected ? ' ffe-datepicker__date--selected' : '';
    className += !this.props.date.isEnabled ? ' ffe-datepicker__date--disabled' : '';
    className +=
      !this.props.date.isEnabled &&
      this.props.date.isFocus ? ' ffe-datepicker__date--disabled-focus' : '';
    return className;
  }

  dayClassName() {
    let className = 'ffe-datepicker__day';
    className += this.props.date.isFocus ? ' ffe-datepicker_date--focus' : '';
    return className;
  }

  tabIndex() {
    return this.props.date.isFocus ? 0 : -1;
  }

  render() {
    return (
      <td
        className={ this.dayClassName() }
        role="gridcell"
        tabIndex={ this.tabIndex() }
        ref={ c => (this._datecell = c) }
        aria-selected={ this.props.date.isSelected }
        aria-disabled={ !this.props.date.isEnabled }
        onClick={ (event) => this.props.onClick(this.props.date) }
        headers={ this.props.headers }
      >
        <span className={ this.dateClassName() }>
          { this.props.date.date }
        </span>
      </td>);
  }
}

ActiveDate.propTypes = {
  date: PropTypes.object.isRequired,
  setFocusOnInitialMount: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  headers: PropTypes.string.isRequired,
};
