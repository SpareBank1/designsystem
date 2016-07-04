import React from 'react';
import { mount } from 'enzyme';
import { SystemInfoMessage } from '../';

describe('render', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <SystemInfoMessage header="Jeg er en test">
                Blå sjiraff
            </SystemInfoMessage>
        );
    });

    it('renders with provided header and body', () => {
        const header = wrapper.find('.ffe-system-message__header');
        expect(header.length).to.be(1);
        expect(header.text()).to.be('Jeg er en test');

        const text = wrapper.find('.ffe-system-message__text');
        expect(text.length).to.be(1);
        expect(text.text()).to.be('Blå sjiraff');
    });

    it('closes itself after a click on the close container', done => {
        wrapper.find('.ffe-system-message__close').simulate('click');
        setTimeout(() => {
            const component = wrapper.find('.ffe-system-message__wrapper');
            expect(component.get(0).style.getPropertyValue('height')).to.be('0px');
            done();
        }, 100);
    });
});
