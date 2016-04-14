import React from 'react';
import simpleCalendar from './datelogic/simplecalendar.js';

import Datepicker from './datepicker/datepicker.js';

export default class FFEDatepicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      calendar: simpleCalendar(null, 'no_nb'),
      displayDatePicker: false,
    };

    this.focusHandler = this.focusHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  focusHandler() {
    this.setState({ displayDatePicker: true });
  }

  keyDownHandler(event) {
    // UP and DOWN keys
    if ([38, 40].indexOf(event.keyCode) === -1) {
      return;
    }

    this._datepicker._body.focus();
  }

  changeHandler(event) {
    const newDateString = event.target.value;
    this.state.calendar.selectDateString(newDateString);
    this.setState({ selectedDate: newDateString });
  }

  changeDate() {
    this.setState({ selectedDate: this.state.calendar.selected(), displayDatePicker: false });
  }

  render() {
    return (<div>
      <input
        type="text" value={ this.state.selectedDate }
        className="ffe-input-field ffe-input-field--medium"
        onFocus={ this.focusHandler }
        onKeyDown={ this.keyDownHandler }
        onChange={ this.changeHandler }
        ref={ c => { this._input = c; } }
      />
      { this.state.displayDatePicker ?
        <Datepicker
          calendar={ this.state.calendar }
          ref={ c => { this._datepicker = c; } }
          onChange={ this.changeDate }
        />
        : null }
    </div>);
  }
}
