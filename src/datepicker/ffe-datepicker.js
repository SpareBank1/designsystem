/*eslint jsx-a11y/onclick-has-focus:1 jsx-a11y/onclick-has-role:1 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Calendar from '../calendar/ffe-calendar';
import KeyCode from '../util/keyCode';
import DateInput from '../dateinput/ffe-dateinput';
import SimpleDate from '../datelogic/simpledate';
import dateErrorTypes from '../datelogic/error-types';
import i18n from '../i18n/i18n';

export default class FFEDatepicker extends Component {

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
    this.onError = this.onError.bind(this);
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

  onError(type) {
    const language = this.props.language;
    return this.props.onError ?
      this.props.onError(type)
      : i18n[language][type];
  }

  onInputBlur() {
    let nextState = {};

    const error = (type) => {
      const errorMessage = this.onError(type);

      nextState = {
        errorMessage,
        openOnFocus: true,
        ariaInvalid: true,
        displayDatePicker: false,
      };
    };

    SimpleDate.fromString(
      this.props.value,
      date => {
        nextState = {
          openOnFocus: true,
          ariaInvalid: false,
        };

        const minDate = SimpleDate.fromString(this.props.minDate);
        const maxDate = SimpleDate.fromString(this.props.maxDate);
        if (this.props.minDate && date.isBefore(minDate)) {
          error(dateErrorTypes.MIN_DATE);
        } else if (this.props.maxDate && date.isAfter(maxDate)) {
          error(dateErrorTypes.MAX_DATE);
        }

        this.props.onChange(date.format());
      },
      errorType => {
        const emptyValue = this.props.value === '';

        if (emptyValue && this.state.errorMessage) {
          nextState = {
            openOnFocus: true,
            ariaInvalid: false,
            errorMessage: null,
            displayDatePicker: false
          };
          return;
        } else if (emptyValue) {
          nextState = {
            ...this.state,
            openOnFocus: true
          };
          return;
        }

        error(errorType);
      }
    );

    this.setState(nextState);
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
    if (!this.state.displayDatePicker && this.state.openOnFocus) {
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

  ariaInvalid() {
    const ariaProp = this.props.ariaInvalid;
    if (ariaProp !== undefined && ariaProp !== null) {
      return ariaProp;
    }

    return this.state.ariaInvalid;
  }

  render() {
    let inputProps = this.props.inputProps;
    if (this.state.ariaInvalid) {
      inputProps = {
        ...inputProps,
        'aria-describedby': 'date-input-validation'
      };
    }

    const calendarClassName = classNames(
        'ffe-calendar ffe-calendar--datepicker',
        { 'ffe-calendar--datepicker--above': this.props.calendarAbove }
    );
    return (
      <div>
        { this.props.label &&
        <label
          className="ffe-form-label ffe-form-label--block"
          htmlFor={ inputProps.id }
        >
          { this.props.label }
        </label>
        }
        <div
          onClick={ this.clickHandler }
          ref={ c => { this._datepickerNode = c; } }
          className="ffe-datepicker"
          tabIndex={ -1 }
          role="button"
        >
          <DateInput
            onFocus={ this.onInputFocus }
            onBlur={ this.onInputBlur }
            onChange={ (evt) => this.props.onChange(evt.target.value) }
            onKeyDown={ this.onInputKeydown }
            value={ this.props.value }
            inputProps={ inputProps }
            ref={ c => { this.dateInputRef = c; } }
            ariaInvalid={ this.ariaInvalid() }
          />

          {
            this.state.ariaInvalid &&
              <div
                id="date-input-validation"
                className="ffe-body-text ffe-field-error-message"
                role="alert"
              >
                { this.state.errorMessage }
              </div>
          }

          {
            this.state.displayDatePicker &&
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
          }
        </div>
      </div>);
  }
}

FFEDatepicker.propTypes = {
  label:  PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  inputProps: PropTypes.object,
  ariaInvalid: PropTypes.bool,
  calendarAbove: PropTypes.bool,
  onError: PropTypes.func,
};
