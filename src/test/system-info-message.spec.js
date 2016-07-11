import React from 'react';
import { mount } from 'enzyme';
import {
    SystemErrorMessage,
    SystemInfoMessage,
    SystemSuccessMessage,
} from '../';

describe('when rendering', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <SystemInfoMessage>
                Blå sjiraff
            </SystemInfoMessage>
        );
    });

    it('renders with provided body', () => {
        const text = wrapper.find('.ffe-system-message__content');
        expect(text.length).to.be(1);
        expect(text.text()).to.be('Blå sjiraff');
    });

    it('closes itself after a click on the close container', done => {
        wrapper.find('.ffe-system-message__close').simulate('click');
        setTimeout(() => {
            const component = wrapper.find('.ffe-system-message-wrapper');
            expect(component.get(0).style.getPropertyValue('height')).to.be('0px');
            done();
        }, 100);
    });
});

describe('for different types of message', () => {
    let wrapper;

    it('creates info-message', () => {
        wrapper = mount(
            <SystemInfoMessage>
                Infomelding
            </SystemInfoMessage>
        );
        const message = wrapper.find('.ffe-system-message-wrapper');
        expect(message.hasClass('ffe-system-message-wrapper--info')).to.be(true);
    });

    it('creates error-message', () => {
        wrapper = mount(
            <SystemErrorMessage>
                Feilmelding
            </SystemErrorMessage>
        );
        const message = wrapper.find('.ffe-system-message-wrapper');
        expect(message.hasClass('ffe-system-message-wrapper--error')).to.be(true);
    });

    it('create success-message', () => {
        wrapper = mount(
            <SystemSuccessMessage>
                Gladmelding
            </SystemSuccessMessage>
        );
        const message = wrapper.find('.ffe-system-message-wrapper');
        expect(message.hasClass('ffe-system-message-wrapper--success')).to.be(true);
    });
});
