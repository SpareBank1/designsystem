import React, { PropTypes } from 'react';
import Calendar from '../calendar/ffe-calendar';
import KeyCode from '../util/keyCode';
import DateInput from '../dateinput/ffe-dateinput';

export default class FFEDatepicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayDatePicker: false,
    };

    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.globalClickHandler = this.globalClickHandler.bind(this);
    this.escKeyHandler = this.escKeyHandler.bind(this);
    this.datePickedHandler = this.datePickedHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.onInputKeydown = this.onInputKeydown.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
  }

  onInputFocus() {
    this.openCalendar();
  }

  onInputKeydown(evt) {
    if (!this.state.displayDatePicker && evt.which === KeyCode.ENTER) {
      this.openCalendar();
    }
  }

  escKeyHandler(evt) {
    if (evt.which === KeyCode.ESC) {
      this.closeCalendar();
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

  blurHandler() {
    this.removeGlobalEventListeners();
    this.setState({
      displayDatePicker: false,
    });
  }

  datePickedHandler(date) {
    this.closeCalendar();
    this.props.onChange(date);
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

  addGlobalEventListeners() {
    window.addEventListener('click', this.globalClickHandler);
    window.addEventListener('keyup', this.escKeyHandler);
  }

  removeGlobalEventListeners() {
    window.removeEventListener('click', this.globalClickHandler);
    window.removeEventListener('keyup', this.escKeyHandler);
  }

  render() {
    return (
      <div
        onClick={ this.clickHandler }
        ref={ c => (this._datepickerNode = c) }
        className="ffe-datepicker"
      >
        <DateInput
          onFocus={ this.onInputFocus }
          onChange={ (evt) => this.props.onChange(evt.target.value) }
          onKeyDown={ this.onInputKeydown }
          value={ this.props.value }
          inputProps={ this.props.inputProps }
        />
        { this.state.displayDatePicker ?
          <Calendar
            onDatePicked={ this.datePickedHandler }
            onBlurHandler={ this.blurHandler }
            language={ this.props.language }
            selectedDate={ this.props.value }
            minDate={ this.props.minDate }
            maxDate={ this.props.maxDate }
            calendarClassName="ffe-calendar ffe-calendar--datepicker"
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
};
