import React, { cloneElement } from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { InfoSirkelIkon } from 'ffe-icons-react';

import {
    ContextErrorMessage,
    ContextInfoMessage,
    ContextSuccessMessage,
    ContextTipMessage,
} from '../';
import ContextMessage from '../ContextMessage';

const defaultProps = {
    children: (<p>content</p>),
    messageType: 'tip',
};

const getShallowWrapper = props => shallow(<ContextMessage {...defaultProps} {...props} />);
const getMountedWrapper = props => mount(<ContextMessage {...defaultProps} {...props} />);

describe('<ContextMessage />', () => {
    it('renders with provided content', () => {
        const wrapper = getMountedWrapper();
        const content = wrapper.find('.ffe-body-text').find('p');
        expect(content.exists()).to.be(true);
        expect(content.text()).to.be('content');
    });

    it('renders with provided header', () => {
        const header = 'header';
        const wrapper = getMountedWrapper({
            header,
        });
        const headerComponent = wrapper.find('header');
        expect(headerComponent.exists()).to.be(true);
        expect(headerComponent.text()).to.be(header);
    });

    it('renders without header', () => {
        const wrapper = getMountedWrapper();
        const header = wrapper.find('.ffe-context-message-content').find('header');
        expect(header.exists()).to.be(false);
    });

    it('renders provided styles to outermost container', () => {
        const wrapper = getShallowWrapper({
            style: {
                marginTop: '40px',
            },
        });
        expect(wrapper.props().style.marginTop).to.be('40px');
    });

    it('renders provided className to outermost container', () => {
        const wrapper = getShallowWrapper({
            className: 'special special--mod',
        });
        expect(wrapper.props().className)
            .to.be('ffe-context-message ffe-context-message--tip special special--mod');
    });

    it('renders --compact modifier if compact prop is true', () => {
        const wrapper = getShallowWrapper({
            compact: true,
        });
        expect(wrapper.props().className)
            .to.be('ffe-context-message ffe-context-message--tip ffe-context-message--compact');
    });

    it('renders with context icon', () => {
        const wrapper = getMountedWrapper({
            icon: (<InfoSirkelIkon />),
        });
        expect(wrapper.find('svg.ffe-context-message-content__icon-svg').length).to.be(1);
    });

    it('renders without close button by default', () => {
        const wrapper = getMountedWrapper({
            icon: (<InfoSirkelIkon />),
        });
        expect(wrapper.find('.ffe-context-message-content__close-button-svg').exists()).to.be(false);
        expect(wrapper.find('.ffe-context-message-content__close-button').exists()).to.be(false);
    });

    it('closes itself on close click', (done) => {
        const onClickSpy = sinon.spy();
        const wrapper = getMountedWrapper({
            animationLengthMs: 10,
            showCloseButton: true,
            onClose: onClickSpy,
        });
        expect(wrapper.find('.ffe-context-message').exists()).to.be(true);
        wrapper.find('.ffe-context-message-content__close-button').simulate('click');
        setTimeout(() => {
            wrapper.update();
            expect(onClickSpy.calledOnce);
            expect(wrapper.find('.ffe-context-message').exists()).to.be(false);
            done();
        }, 20);
    });
});

describe('<ContextInfoMessage />', () => {
    const wrapper = mount(
        <ContextInfoMessage
            icon={<InfoSirkelIkon />}
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

describe('<ContextTipMessage />', () => {
    const wrapper = mount(
        <ContextTipMessage
            icon={<InfoSirkelIkon />}
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
            icon={<InfoSirkelIkon />}
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

describe('<ContextErrorMessage />', () => {
    const wrapper = mount(
        <ContextErrorMessage
            icon={<InfoSirkelIkon />}
            showCloseButton={true}
        >
            <p>content</p>
        </ContextErrorMessage>
    );

    it('renders ContextErrorMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--error')).to.be(true);
    });
});
