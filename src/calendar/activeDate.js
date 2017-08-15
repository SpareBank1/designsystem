import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';

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
    return classNames({
      'ffe-calendar__date': true,
      'ffe-calendar__date--today': this.props.date.isToday,
      'ffe-calendar__date--focus': this.props.date.isFocus,
      'ffe-calendar__date--disabled': !this.props.date.isEnabled,
      'ffe-calendar__date--selected': this.props.date.isSelected,
      'ffe-calendar__date--disabled-focus': !this.props.date.isEnabled && this.props.date.isFocus,
    });
  }

  dayClassName() {
    let className = 'ffe-calendar__day';
    className += this.props.date.isFocus ? ' ffe-calendar_date--focus' : '';
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
        ref={ c => { this._datecell = c; } }
        aria-selected={ this.props.date.isSelected }
        aria-disabled={ !this.props.date.isEnabled }
        onClick={ () => this.props.onClick(this.props.date) }
        headers={ this.props.headers }
      >
        <span className={ this.dateClassName() }>
          { this.props.date.date }
        </span>
      </td>);
  }
}

ActiveDate.propTypes = {
  date: shape({
    date: shape({}),
    isEnabled: bool,
    isFocus: bool,
    isSelected: bool,
    isToday: bool,
  }).isRequired,
  headers: string.isRequired,
  onClick: func.isRequired,
  setFocusOnInitialMount: bool.isRequired,
};
