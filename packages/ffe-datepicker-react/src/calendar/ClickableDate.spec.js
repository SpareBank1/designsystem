import React from 'react';
import ClickableDate from './ClickableDate';
import simpleDate from '../datelogic/simpledate';

describe('<ClickableDate />', () => {
    const date = simpleDate.fromString('17.05.2016');

    const activeDateRef = React.createRef();
    const activeDate = (
        <ClickableDate
            date={date}
            forceFocus={false}
            onClick={() => true}
            headers="id-to-th-element"
            language="nn"
            isBlured={false}
            activeRef={activeDateRef}
            month={'Mai'}
            year={2016}
            isFocusingHeader={false}
        />
    );

    it('should render an active date', () => {
        const wrapper = shallow(activeDate);
        expect(wrapper.find('td.ffe-calendar__day').exists()).toBe(true);
    });

    it('should have role button', () => {
        const wrapper = shallow(activeDate);
        expect(wrapper.find('[role="button"]').exists()).toBe(true);
    });
});
