import React from 'react';
import { shallow, mount } from 'enzyme';

import InfoSirkelIkon from '@sb1/ffe-icons-react/lib/info-sirkel-ikon';

import {
    ContextErrorMessage,
    ContextInfoMessage,
    ContextSuccessMessage,
    ContextTipMessage,
} from '.';

import ContextMessage from './ContextMessage';

const defaultProps = {
    children: <p>content</p>,
    messageType: 'tip',
};

const getShallowWrapper = props =>
    shallow(<ContextMessage {...defaultProps} {...props} />);
const getMountedWrapper = props =>
    mount(<ContextMessage {...defaultProps} {...props} />);

describe('<ContextMessage />', () => {
    it('renders with provided content', () => {
        const wrapper = getMountedWrapper();
        const content = wrapper.find('.ffe-body-text').find('p');
        expect(content.exists()).toBe(true);
        expect(content.text()).toBe('content');
    });

    it('renders with provided header', () => {
        const header = 'header';
        const wrapper = getMountedWrapper({
            header,
        });
        const headerComponent = wrapper.find('header');
        expect(headerComponent.exists()).toBe(true);
        expect(headerComponent.text()).toBe(header);
    });

    it('renders without header', () => {
        const wrapper = getMountedWrapper();
        const header = wrapper
            .find('.ffe-context-message-content')
            .find('header');
        expect(header.exists()).toBe(false);
    });

    it('renders provided styles to outermost container', () => {
        const wrapper = getShallowWrapper({
            style: {
                marginTop: '40px',
            },
        });
        expect(wrapper.prop('style').marginTop).toBe('40px');
    });

    it('renders provided className to outermost container', () => {
        const wrapper = getShallowWrapper({
            className: 'special special--mod',
        });
        expect(wrapper.hasClass('special')).toBe(true);
        expect(wrapper.hasClass('special--mod')).toBe(true);
        expect(wrapper.hasClass('ffe-context-message')).toBe(true);
    });

    it('renders --compact modifier if compact prop is true', () => {
        const wrapper = getShallowWrapper({
            compact: true,
        });
        expect(wrapper.hasClass('ffe-context-message--compact')).toBe(true);
    });

    it('renders with context icon', () => {
        const wrapper = getMountedWrapper({
            icon: <InfoSirkelIkon />,
        });
        const el = wrapper.find('svg');
        expect(el).toHaveLength(1);
        expect(el.hasClass('ffe-context-message-content__icon-svg')).toBe(true);
    });

    it('lets consumer add extra classes to icon', () => {
        const wrapper = getMountedWrapper({
            icon: <InfoSirkelIkon className="extra-extra-read-all-about-it" />,
        });

        const el = wrapper.find('svg');

        expect(el.hasClass('ffe-context-message-content__icon-svg')).toBe(true);
        expect(el.hasClass('extra-extra-read-all-about-it')).toBe(true);
    });

    it('renders without close button by default', () => {
        const wrapper = getMountedWrapper({
            icon: <InfoSirkelIkon />,
        });
        expect(
            wrapper
                .find('.ffe-context-message-content__close-button-svg')
                .exists(),
        ).toBe(false);
        expect(
            wrapper.find('.ffe-context-message-content__close-button').exists(),
        ).toBe(false);
    });

    it('closes itself on close click', done => {
        const onClickSpy = jest.fn();
        const wrapper = getMountedWrapper({
            animationLengthMs: 10,
            showCloseButton: true,
            onClose: onClickSpy,
        });
        expect(wrapper.find('.ffe-context-message').exists()).toBe(true);
        wrapper
            .find('.ffe-context-message-content__close-button')
            .simulate('click');

        setTimeout(() => {
            wrapper.update();
            expect(onClickSpy).toHaveBeenCalledTimes(1);
            expect(wrapper.find('.ffe-context-message').exists()).toBe(false);
            done();
        }, 20);
    });

    it('does not have aria-labelledby when header was not specified', () => {
        const wrapper = getMountedWrapper({
            headerElementId: 'header-element-id',
        });

        const message = wrapper.find('.ffe-context-message');
        expect(message.prop('aria-labelledby')).toBe(undefined);
    });
});

describe('<ContextInfoMessage />', () => {
    const wrapper = mount(
        <ContextInfoMessage icon={<InfoSirkelIkon />} showCloseButton={true}>
            <p>content</p>
        </ContextInfoMessage>,
    );

    it('renders ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--info')).toBe(true);
    });
});

describe('<ContextTipMessage />', () => {
    const wrapper = mount(
        <ContextTipMessage icon={<InfoSirkelIkon />} showCloseButton={true}>
            <p>content</p>
        </ContextTipMessage>,
    );

    it('renders ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--tip')).toBe(true);
    });
});

describe('Test ContextSuccessMessage', () => {
    const wrapper = mount(
        <ContextSuccessMessage icon={<InfoSirkelIkon />} showCloseButton={true}>
            <p>content</p>
        </ContextSuccessMessage>,
    );

    it('renders ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--success')).toBe(true);
    });
});

describe('<ContextErrorMessage />', () => {
    const wrapper = mount(
        <ContextErrorMessage icon={<InfoSirkelIkon />} showCloseButton={true}>
            <p>content</p>
        </ContextErrorMessage>,
    );

    it('renders ContextErrorMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--error')).toBe(true);
    });
});
