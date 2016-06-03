import React, { PropTypes, Component } from 'react';
import ChevronIkon from 'ffe-icons-react/chevron-ikon';

class Header extends Component {

  constructor(props) {
    super(props);

    this.datepickerId = props.datepickerId;
    this.previousHandler = props.previousMontHandler;
    this.nextHandler = props.nextMontHandler;
  }

  render() {
    return (
      <div className="ffe-calendar__header">
        <div className="ffe-calendar__header-inner-wrapper">
          <button
            tabIndex="-1"
            className="ffe-calendar__month-nav ffe-calendar__previous"
            title={ this.props.previousMonthLabel }
            onClick={ this.previousHandler }
          >
            <ChevronIkon className="ffe-calendar__icon-prev" />
          </button>
          <header
            id={`${this.datepickerId}-title`}
            className="ffe-calendar__title"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div id={ `${this.datepickerId}__month-label` }>
              <span className="ffe-calendar__month">{ this.props.month }</span>
              <span className="ffe-calendar__year">{ this.props.year }</span>
            </div>
          </header>
          <button
            tabIndex="-1"
            className="ffe-calendar__month-nav ffe-calendar__next"
            title={ this.props.nextMonthLabel }
            onClick={ this.nextHandler }
          >
            <ChevronIkon className="ffe-calendar__icon-next" />
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  previousMonthLabel: PropTypes.string.isRequired,
  nextMonthLabel: PropTypes.string.isRequired,
  datepickerId: PropTypes.string.isRequired,
  previousMontHandler: PropTypes.func.isRequired,
  nextMontHandler: PropTypes.func.isRequired,
};

export default Header;
