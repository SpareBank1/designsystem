import React from 'react';
import { render } from 'react-dom';
import Datepicker from '../src/ffe-datepicker-react';
require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'FFE-Datepicker';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const datepicker = document.createElement('section');
document.body.appendChild(datepicker);

class DatepickerExample extends React.Component {

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
      <form>
        <Datepicker
          value={ this.state.date }
          onChange={ this.onChange }
          language="nb"
          minDate="01.01.2016"
          maxDate="31.12.2016"
          inputProps={ { className: 'customClass', id: 'custom-input-id' } }
          ariaInvalid={ false }
        />
      </form>
    );
  }
}

render(<DatepickerExample />, datepicker);
