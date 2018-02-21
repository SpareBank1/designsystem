import { shallow } from 'enzyme';
import React from 'react';
import ActiveDate from './ActiveDate';
import simpleDate from '../datelogic/simpledate';

describe('<ActiveDate />', () => {
    const date = simpleDate.fromString('17.05.2016');
    const activeDate = (
        <ActiveDate
            date={date}
            forceFocus={false}
            onClick={() => true}
            headers="id-to-th-element"
        />
    );

    it('should render an active date', () => {
        const wrapper = shallow(activeDate);
        expect(wrapper.find('td.ffe-calendar__day').exists()).toBe(true);
    });

    it('should have role gridcell', () => {
        const wrapper = shallow(activeDate);
        expect(wrapper.find('[role="gridcell"]').exists()).toBe(true);
    });
});
