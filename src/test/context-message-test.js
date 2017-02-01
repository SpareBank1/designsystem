import React, { cloneElement } from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import {
    ContextInfoMessage,
    ContextTipMessage,
    ContextSuccessMessage,
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
                showCloseButton={true}
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

    it('renders without header', () => {
        const header = wrapper.find('.ffe-context-message-content').find('header');
        expect(header.length).to.be(0);
    });

    it('renders provided styles to outermost container', () => {
        const component = shallow(cloneElement(element, { style: { marginTop: '40px' } }));
        expect(component.props().style.marginTop).to.be('40px');
    });

    it('renders with context icon', done => {
        wrapper = mount(cloneElement(element, { icon: <InfoCircleIcon /> }));
        expect(wrapper.find('.ffe-context-message-content__icon-svg').length).to.be(1);
        done();
    });

    it('renders without close button', done => {
        wrapper = mount(cloneElement(element, { showCloseButton: false }));
        expect(wrapper.find('.ffe-context-message-content__close-button-svg').isEmpty()).to.be(true);
        expect(wrapper.find('.ffe-context-message-content__close-button').isEmpty()).to.be(true);
        done();
    });

    it('closes itself on close click', done => {
        const onClickSpy = sinon.spy();
        wrapper = mount(cloneElement(element, { onClose: onClickSpy, animationLengthMs : 10 }));
        let component = wrapper.find('.ffe-context-message');
        expect(component.length).to.be(1);
        wrapper.find('.ffe-context-message-content__close-button').simulate('click');
        setTimeout(() => {
            component = wrapper.find('.ffe-context-message');
            expect(component.length).to.be(0);
            expect(onClickSpy.calledOnce);
            done();
        }, 20);
    });
});

describe('Test ContextInfoMessage', () => {
    const wrapper = mount(
        <ContextInfoMessage
            icon={<InfoCircleIcon />}
            showCloseButton={true}
        >
            <p>content</p>
        </ContextInfoMessage>
    );

    it('renders ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--info')).to.be(true);
    });
});

describe('Test ContextTipMessage', () => {
    const wrapper = mount(
        <ContextTipMessage
            icon={<InfoCircleIcon />}
            showCloseButton={true}
        >
            <p>content</p>
        </ContextTipMessage>
    );

    it('renders ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--tip')).to.be(true);
    });
});

describe('Test ContextSuccessMessage', () => {
    const wrapper = mount(
        <ContextSuccessMessage
            icon={<InfoCircleIcon />}
            showCloseButton={true}
        >
            <p>content</p>
        </ContextSuccessMessage>
    );

    it('renders ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--success')).to.be(true);
    });
});
