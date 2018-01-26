/*eslint-env jest*/
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import SystemMessage from './SystemMessage';
import SystemErrorMessage from './SystemErrorMessage';
import SystemInfoMessage from './SystemInfoMessage';
import SystemNewsMessage from './SystemNewsMessage';
import SystemSuccessMessage from './SystemSuccessMessage';

const defaultProps = {
    children: <span>Message</span>,
};

const getMountedWrapper = props =>
    mount(<SystemInfoMessage {...defaultProps} {...props} />);
const getShallowWrapper = props =>
    shallow(<SystemInfoMessage {...defaultProps} {...props} />);

describe('<SystemMessage />', () => {
    it('renders with provided body', () => {
        const wrapper = getMountedWrapper({
            children: <span>Blå sjiraff</span>,
        });
        const text = wrapper.find('.ffe-system-message__content');
        expect(text.exists()).toBe(true);
        expect(text.text()).toBe('Blå sjiraff');
    });

    it('closes itself after a click on the close container', () => {
        const clock = sinon.useFakeTimers();
        const wrapper = getMountedWrapper();
        wrapper.find('.ffe-system-message__close').simulate('click');
        clock.tick(200);
        const component = wrapper.find('.ffe-system-message-wrapper');
        expect(component.first().instance().style.height).toBe('0px');
        clock.restore();
    });

    it('should accept style prop to apply styles to outermost container', () => {
        const wrapper = getShallowWrapper({
            style: { marginTop: '40px' },
        });
        expect(wrapper.props().style.marginTop).toBe('40px');
    });

    it('should execute onClose prop when close button is clicked', () => {
        const clock = sinon.useFakeTimers();
        const onClose = sinon.spy();
        const wrapper = getMountedWrapper({
            onClose,
        });

        const component = wrapper.find('.ffe-system-message');
        expect(component.exists()).toBe(true);
        wrapper.find('.ffe-system-message__close').simulate('click');

        clock.tick(100);
        expect(onClose.calledOnce).toBe(false);
        clock.tick(300);
        expect(onClose.calledOnce).toBe(true);
        clock.restore();
    });

    describe('for different types of message', () => {
        it('<SystemInfoMessage />', () => {
            const wrapper = mount(
                <SystemInfoMessage>Infomelding</SystemInfoMessage>,
            );
            const message = wrapper.find('.ffe-system-message-wrapper');
            expect(message.hasClass('ffe-system-message-wrapper--info')).toBe(
                true,
            );
        });

        it('<SystemErrorMessage />', () => {
            const wrapper = mount(
                <SystemErrorMessage>Feilmelding</SystemErrorMessage>,
            );
            const message = wrapper.find('.ffe-system-message-wrapper');
            expect(message.hasClass('ffe-system-message-wrapper--error')).toBe(
                true,
            );
        });

        it('<SystemSuccessMessage />', () => {
            const wrapper = mount(
                <SystemSuccessMessage>Gladmelding</SystemSuccessMessage>,
            );
            const message = wrapper.find('.ffe-system-message-wrapper');
            expect(
                message.hasClass('ffe-system-message-wrapper--success'),
            ).toBe(true);
        });

        it('<SystemNewsMessage />', () => {
            const wrapper = mount(
                <SystemNewsMessage>Nyhetsmelding</SystemNewsMessage>,
            );
            const message = wrapper.find('.ffe-system-message-wrapper');
            expect(message.hasClass('ffe-system-message-wrapper--news')).toBe(
                true,
            );
        });
    });
});
