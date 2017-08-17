/* eslint-env mocha */

import { shallow } from 'enzyme';
import { assert } from 'chai';
import React from 'react';
import ActiveDate from './activeDate';
import simpleDate from '../datelogic/simpledate';

describe('<ActiveDate />', () => {
  const date = simpleDate.fromString('17.05.2016');
  const activeDate = (
    <ActiveDate
      date={ date }
      forceFocus={ false }
      onClick={ () => true }
      headers="id-to-th-element"
    />
  );

  it('should render an active date', () => {
    const wrapper = shallow(activeDate);
    assert.equal(wrapper.find('td.ffe-calendar__day').length, 1);
  });

  it('should have role gridcell', () => {
    const wrapper = shallow(activeDate);
    assert.equal(wrapper.find('[role="gridcell"]').length, 1);
  });
});
