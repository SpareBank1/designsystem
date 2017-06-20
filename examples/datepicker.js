import React from 'react';
import { render } from 'react-dom';
import Datepicker, { ErrorTypes } from '../src/ffe-datepicker-react';
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
    this.state = { dateOne: '', dateTwo: '', dateThree: '' };
    this.onChange = this.onChange.bind(this);
    this.onError = this.onError.bind(this);
  }

  onChange(date, field) {
    this.setState({
      [field]: date,
    });
  }

  onError(type) {
    switch (type) {
      case ErrorTypes.INVALID_DATE_FORMAT:
        return 'Dato må skrives på dette formatet: dd.mm.åååå';
      case ErrorTypes.INVALID_DATE:
        return 'Ugyldig dato';
      case ErrorTypes.MIN_DATE:
        return 'Du kan ikke velge dato lenger tilbake i tid';
      case ErrorTypes.MAX_DATE:
        return 'Oops, du kan dessverre ikke velge dato lenger frem i tid';
    }
  }

  render() {
    return (
      <form className="ffe-input-group">
        <div style={ { padding: '10px' } }>
          <Datepicker
            value={ this.state.dateOne }
            onChange={ date => this.onChange(date, 'dateOne') }
            language="nn"
            minDate="01.01.2016"
            maxDate="31.12.2018"
            inputProps={ { className: 'customClass', id: 'custom-input-id' } }
            ariaInvalid={ false }
            style={ {display: 'block'} }
          />
        </div>

        <div style={ { padding: '10px' } }>
          <Datepicker
            value={ this.state.dateTwo }
            onChange={ date => this.onChange(date, 'dateTwo') }
            onError={ this.onError }
            language="nb"
            minDate="01.01.2016"
            maxDate="31.12.2018"
            inputProps={ { className: 'customClass', id: 'custom-input-id' } }
          />
        </div>

        <div style={ { padding: '10px' } }>
          <Datepicker
            value={ this.state.dateThree }
            onChange={ date => this.onChange(date, 'dateThree') }
            language="en"
            minDate="01.01.2016"
            maxDate="31.12.2018"
            inputProps={ {
              className: 'customClass',
              label: 'A really long label. Longer than the input field, in fact.',
              id: 'unique-input-id' } }
            ariaInvalid={ false }
            calendarAbove={ true }
          />
        </div>
      </form>
    );
  }
}

render(<DatepickerExample />, datepicker);
