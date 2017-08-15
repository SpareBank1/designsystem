/*eslint jsx-a11y/onclick-has-focus:1 jsx-a11y/onclick-has-role:1 */
import React, { Component } from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid';
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

    this.datepickerId = uuid.v4();

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
    const {
      language,
      onError,
    } = this.props;

    return onError ? onError(type) : i18n[language][type];
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
    if (this.state.displayDatePicker && !this._datepickerNode.contains(evt.target)) {
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
    const { ariaInvalid } = this.props;
    if (ariaInvalid !== undefined && ariaInvalid !== null) {
      return ariaInvalid;
    }

    return this.state.ariaInvalid;
  }

  render() {
    const {
      hideErrors,
      inputProps = {},
      label,
      language,
      maxDate,
      minDate,
      onChange,
      value,
    } = this.props;

    if (this.ariaInvalid()) {
      inputProps['aria-describedby'] = `date-input-validation-${this.datepickerId}`;
    }

    const calendarClassName = classNames(
        'ffe-calendar ffe-calendar--datepicker',
        { 'ffe-calendar--datepicker--above': this.props.calendarAbove }
    );

    return (
      <div>
        { label &&
        <label
          className="ffe-form-label ffe-form-label--block"
          htmlFor={ inputProps.id }
        >
          { label }
        </label>
        }
        <div
          className="ffe-datepicker"
          onClick={ this.clickHandler }
          ref={ c => { this._datepickerNode = c; } }
          role="button"
          tabIndex={ -1 }
        >
          <DateInput
            ariaInvalid={ this.ariaInvalid() }
            inputProps={ inputProps }
            onBlur={ this.onInputBlur }
            onChange={ (evt) => onChange(evt.target.value) }
            onFocus={ this.onInputFocus }
            onKeyDown={ this.onInputKeydown }
            ref={ c => { this.dateInputRef = c; } }
            value={ value }
          />

          { this.state.ariaInvalid && !hideErrors &&
              <div
                id={`date-input-validation-${this.datepickerId}`}
                className="ffe-body-text ffe-field-error-message"
                role="alert"
              >
                { this.state.errorMessage }
              </div>
          }

          { this.state.displayDatePicker &&
              <Calendar
                calendarClassName={ calendarClassName }
                escKeyHandler={ this.escKeyHandler }
                language={ language }
                maxDate={ maxDate }
                minDate={ minDate }
                onBlurHandler={ this.blurHandler }
                onDatePicked={ this.datePickedHandler }
                selectedDate={ value }
              />
          }
        </div>
      </div>);
  }
}

FFEDatepicker.propTypes = {
  ariaInvalid: bool,
  calendarAbove: bool,
  hideErrors: bool,
  inputProps: shape({
    className: string,
    id: string,
  }),
  label:  string,
  language: string.isRequired,
  maxDate: string,
  minDate: string,
  onChange: func.isRequired,
  onError: func,
  value: string.isRequired,
};
