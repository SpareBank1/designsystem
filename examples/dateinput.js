import React from 'react';
import { render } from 'react-dom';
import { DateInput } from '../src/ffe-datepicker-react';
require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'FFE-Dateinput';
heading.classList.add('ffe-h1');
document.body.appendChild(heading);

const dateinput = document.createElement('section');
document.body.appendChild(dateinput);

class DateInputExample extends React.Component {

  constructor() {
    super();
    this.state = { date: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({
      date,
    });
  }

  render() {
    return (
      <DateInput
        onChange={ this.onChange }
        value={ this.state.date }
      />
    );
  }
}

render(<DateInputExample />, dateinput);
