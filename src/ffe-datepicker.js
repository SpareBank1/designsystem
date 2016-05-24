import React, { PropTypes } from 'react';
import Datepicker from './datepicker/datepicker';
import KeyCode from './util/keyCode';

export default class FFEDatepicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayDatePicker: false,
      selectedDate: props.initialDate || '',
    };

    this.openCalendar = this.openCalendar.bind(this);
    this.closeCalendar = this.closeCalendar.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.escKeyHandler = this.escKeyHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.datePickedHandler = this.datePickedHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  componentDidMount() {
    this.addFocusListenerToInput();
  }

  changeHandler(event) {
    this.setState({ selectedDate: event.target.value });
  }

  openCalendar() {
    this.setState({
      displayDatePicker: true,
    });
    window.addEventListener('click', this.clickHandler);
    window.addEventListener('keyup', this.escKeyHandler);
  }

  closeCalendar() {
    this.removeEventListeners();
    this.setState({ displayDatePicker: false });
  }

  escKeyHandler(evt) {
    if (evt.which === KeyCode.ESC) {
      this.closeCalendar();
      this.removeEventListeners();
    }
  }

  clickHandler(evt) {
    if (this.state.displayDatePicker) {
      // Is click outside component?
      if ((!this._datepickerNode.contains(evt.target) && !this._input.contains(evt.target))) {
        this.closeCalendar();
      }
    }
  }

  removeEventListeners() {
    window.removeEventListener('click', this.clickHandler);
    window.removeEventListener('keyup', this.escKeyHandler);
  }

  blurHandler() {
    this.removeEventListeners();
    this.setState({
      displayDatePicker: false,
    });
  }

  keyDownHandler(evt) {
    if (evt.which === KeyCode.ENTER) {
      this.openCalendar();
    }
  }

  addFocusListenerToInput() {
    this._input.addEventListener('focus', this.openCalendar);
  }

  datePickedHandler(date) {
    this.closeCalendar();
    this._input.removeEventListener('focus', this.openCalendar);
    this._input.focus();
    this.setState({
      selectedDate: date,
    }, this.addFocusListenerToInput);
    this.props.onChange(date);
  }

  dialogPositionStyle() {
    const inputRect = this._input.getBoundingClientRect();
    const dialogOffset = 10;
    return {
      background: '#fff',
      position: 'absolute',
      width: '320px',
      top: `${inputRect.top + inputRect.height + dialogOffset}px`,
      left: `${inputRect.left}px`,
      zIndex: '9999',
    };
  }

  render() {
    return (<div>
      <div
        onKeyDown={ this.keyDownHandler }
        onClick={ this.openCalendar }
        ref={ c => { this._input = c && c.firstChild.firstChild; } }
      >
        {this.props.children}
      </div>
      { this.state.displayDatePicker ?
        <div
          ref={ c => { this._datepickerNode = c; } }
          style={ this.dialogPositionStyle() }
        >
          <Datepicker
            datePickedHandler={ this.datePickedHandler }
            onBlurHandler={ this.blurHandler }
            language={ this.props.language }
            selectedDate={ this.props.value }
            minDate={ this.props.minDate }
            maxDate={ this.props.maxDate }
          />
        </div>
        : null }
    </div>);
  }
}

FFEDatepicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired,
  initialDate: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
};
