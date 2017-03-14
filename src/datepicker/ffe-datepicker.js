/*eslint jsx-a11y/onclick-has-focus:1 jsx-a11y/onclick-has-role:1 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Calendar from '../calendar/ffe-calendar';
import KeyCode from '../util/keyCode';
import DateInput from '../dateinput/ffe-dateinput';

export default class FFEDatepicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayDatePicker: false,
      openOnFocus: true,
    };

    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.closeCalendarSetInputFocus = this.closeCalendarSetInputFocus.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.globalClickHandler = this.globalClickHandler.bind(this);
    this.escKeyHandler = this.escKeyHandler.bind(this);
    this.datePickedHandler = this.datePickedHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.onInputKeydown = this.onInputKeydown.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
  }

  componentWillUnmount() {
    this.removeGlobalEventListeners();
  }

  onInputFocus() {
    if (this.state.openOnFocus) {
      this.openCalendar();
      this._datepickerNode.click();
    }
  }

  onInputBlur() {
    this.setState({
      openOnFocus: true,
    });
  }

  onInputKeydown(evt) {
    if (!this.state.displayDatePicker && evt.which === KeyCode.ENTER) {
      this.openCalendar();
    } else if (evt.shiftKey && evt.which === KeyCode.TAB) {
      this.closeCalendarSetInputFocus();
    }
  }

  escKeyHandler(evt) {
    if (evt.which === KeyCode.ESC) {
      this.closeCalendarSetInputFocus();
    }
  }

  globalClickHandler(evt) {
    if ((this.state.displayDatePicker && !this._datepickerNode.contains(evt.target))) {
      this.closeCalendar();
    }
  }

  clickHandler() {
    if (!this.state.displayDatePicker) {
      this.openCalendar();
    }
  }

  blurHandler(evt) {
    if (evt.shiftKey && evt.which === KeyCode.TAB) {
      evt.preventDefault();
      this.closeCalendarSetInputFocus();
    } else if (evt.which === KeyCode.TAB) {
      this.closeCalendarSetInputFocus();
    }
  }

  datePickedHandler(date) {
    this.props.onChange(date);
    this.removeGlobalEventListeners();
    this.setState({
      openOnFocus: false,
      displayDatePicker: false,
    }, () => this.dateInputRef.focus());
  }

  openCalendar() {
    this.setState({
      displayDatePicker: true,
    });
    this.addGlobalEventListeners();
  }

  closeCalendar() {
    this.removeGlobalEventListeners();
    this.setState({ displayDatePicker: false });
  }

  closeCalendarSetInputFocus() {
    this.removeGlobalEventListeners();
    this.setState({
      openOnFocus: false,
      displayDatePicker: false,
    }, () => this.dateInputRef.focus());
  }

  addGlobalEventListeners() {
    window.addEventListener('click', this.globalClickHandler);
    window.addEventListener('keyup', this.escKeyHandler);
  }

  removeGlobalEventListeners() {
    window.removeEventListener('click', this.globalClickHandler);
    window.removeEventListener('keyup', this.escKeyHandler);
  }

  render() {
    const calendarClassName = classNames(
        'ffe-calendar ffe-calendar--datepicker',
        { 'ffe-calendar--datepicker--above': this.props.calendarAbove }
    );
    return (
      <div
        onClick={ this.clickHandler }
        ref={ c => { this._datepickerNode = c; } }
        className="ffe-datepicker"
      >
        <DateInput
          onFocus={ this.onInputFocus }
          onBlur={ this.onInputBlur }
          onChange={ (evt) => this.props.onChange(evt.target.value) }
          onKeyDown={ this.onInputKeydown }
          value={ this.props.value }
          inputProps={ this.props.inputProps }
          ref={ c => { this.dateInputRef = c; } }
          ariaInvalid={ this.props.ariaInvalid }
        />
        { this.state.displayDatePicker ?
          <Calendar
            onDatePicked={ this.datePickedHandler }
            onBlurHandler={ this.blurHandler }
            language={ this.props.language }
            selectedDate={ this.props.value }
            minDate={ this.props.minDate }
            maxDate={ this.props.maxDate }
            escKeyHandler={ this.escKeyHandler }
            calendarClassName={ calendarClassName }
          />
          : null }
      </div>);
  }
}

FFEDatepicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  inputProps: PropTypes.object,
  ariaInvalid: PropTypes.bool,
  calendarAbove: PropTypes.bool,
};
