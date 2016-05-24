import React from 'react';
import { render } from 'react-dom';
import Datepicker, { DateInput } from '../src/ffe-datepicker-react';
require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'FFE-Datepicker';
heading.classList.add('ffe-h1');
document.body.appendChild(heading);

const main = document.createElement('main');
document.body.appendChild(main);

const datebegin = document.createElement('section');
main.appendChild(datebegin);

class ExampleComponent extends React.Component {
  constructor() {
    super();
    this.state = { date: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({ date });
  }
  render() {
    return (
      <div>
        <Datepicker
          value={this.state.date}
          onChange={this.handleChange}
          language="nb"
          minDate="01.01.2016"
          maxDate="31.12.2016"
        >
          <DateInput
            value={this.state.date}
            onChange={(e) => this.handleChange(e.target.value)}
          />
        </Datepicker>
      </div>
    );
  }
}

render(<ExampleComponent />, datebegin);
