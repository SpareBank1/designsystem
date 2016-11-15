import React, { cloneElement } from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import {
    ContextInfoMessage,
    ContextTipMessage,
} from '../';
import Base from '../base';
import InfoCircleIcon from 'ffe-icons-react/info-sirkel-ikon';


describe('Test Base', () => {
    let wrapper;
    let element;

    beforeEach(() => {
        element = (
            <Base
                messageType="tip"
                locale='nb'
                icon={<InfoCircleIcon />}
            >
                <p>content</p>
            </Base>
        );
        wrapper = mount(
            element
        );
    });

    it('renders with provided content', () => {
        const content = wrapper.find('.ffe-body-text').find('p');
        expect(content.length).to.be(1);
        expect(content.text()).to.be('content');
    });

    it('renders with provided header', () => {
        const header = 'header';
        wrapper = mount(cloneElement(element, { header }));
        const headerComponent = wrapper.find('header');
        expect(headerComponent.length).to.be(1);
        expect(headerComponent.text()).to.be(header);
    });

    it('does not render header', () => {
        const header = wrapper.find('.ffe-context-message-content').find('header');
        expect(header.length).to.be(0);
    });

    it('renders provided styles to outermost container', () => {
        const component = shallow(cloneElement(element, { style: { marginTop: '40px' } }));
        expect(component.props().style.marginTop).to.be('40px');
    });

    it('closes itself after a click on the close button', done => {
        const onClickSpy = sinon.spy();
        wrapper = mount(cloneElement(element, { onClose: onClickSpy }));
        wrapper.find('.ffe-context-message-content__close-button').simulate('click');
        setTimeout(() => {
            const component = wrapper.find('.ffe-context-message');
            expect(component.get(0).style.getPropertyValue('height')).to.be('0px');
            expect(onClickSpy.calledOnce);
            done();
        }, 100);
    });
});

describe('Test ContextInfoMessage', () => {
    const wrapper = mount(
        <ContextInfoMessage
            icon={<InfoCircleIcon />}
            locale='nb'
        >
            <p>content</p>
        </ContextInfoMessage>
    );

    it('creates ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--info')).to.be(true);
    });
});

describe('Test ContextTipMessage', () => {
    const wrapper = mount(
        <ContextTipMessage
            icon={<InfoCircleIcon />}
            locale='nb'
        >
            <p>content</p>
        </ContextTipMessage>
    );

    it('creates ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--tip')).to.be(true);
    });
});
