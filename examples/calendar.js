import React from 'react';
import { render } from 'react-dom';
import { Calendar } from '../src/ffe-datepicker-react';
require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'FFE-Calendar';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const calendar = document.createElement('section');
document.body.appendChild(calendar);

class CalendarExample extends React.Component {

  constructor() {
    super();
    this.state = { selectedDate: '17.05.2016' };
    this.datePicked = this.datePicked.bind(this);
  }

  datePicked(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    return (
      <form>
        <Calendar
          onDatePicked={ this.datePicked }
          language="nb"
          selectedDate={ this.state.selectedDate }
        />
      </form>
    );
  }
}

render(<CalendarExample />, calendar);
