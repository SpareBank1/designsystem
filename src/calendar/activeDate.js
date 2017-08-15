import React, { Component } from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';

export default class ActiveDate extends Component {

  componentDidMount() {
    this.focusIfNeeded();
  }

  componentDidUpdate() {
    this.focusIfNeeded();
  }

  focusIfNeeded() {
    const {
      date,
      setFocusOnInitialMount,
    } = this.props;

    if (date.isFocus && setFocusOnInitialMount) {
      this._datecell.focus();
    }
  }

  dateClassName() {
    const {
      isEnabled,
      isFocus,
      isSelected,
      isToday,
    } = this.props.date;

    return classNames({
      'ffe-calendar__date': true,
      'ffe-calendar__date--today': isToday,
      'ffe-calendar__date--focus': isFocus,
      'ffe-calendar__date--disabled': !isEnabled,
      'ffe-calendar__date--selected': isSelected,
      'ffe-calendar__date--disabled-focus': !isEnabled && isFocus,
    });
  }

  dayClassName() {
    return classNames(
      'ffe-calendar__day',
      { 'ffe-calendar_date--focus' : this.props.date.isFocus }
    );
  }

  tabIndex() {
    return this.props.date.isFocus ? 0 : -1;
  }

  render() {
    const {
      date,
      headers,
      onClick,
    } = this.props;

    return (
      <td
        aria-selected={ date.isSelected }
        aria-disabled={ !date.isEnabled }
        className={ this.dayClassName() }
        headers={ headers }
        onClick={ () => onClick(date) }
        ref={ c => { this._datecell = c; } }
        role="gridcell"
        tabIndex={ this.tabIndex() }
      >
        <span className={ this.dateClassName() }>
          { date.date }
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
