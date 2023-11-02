import React from 'react';
import Symbol from '@sb1/ffe-symbols-react';

import {
    ContextErrorMessage,
    ContextInfoMessage,
    ContextSuccessMessage,
    ContextTipsMessage,
} from '.';

import ContextMessage from './ContextMessage';

const defaultProps = {
    children: <p>content</p>,
    messageType: 'tips',
    role: 'group',
    icon: <Symbol ariaLabel="info" icon="info_i" />,
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
        const wrapper = getMountedWrapper({
            headerText: 'header text',
        });
        const headerComponent = wrapper.find(
            '.ffe-context-message-content__header',
        );
        expect(headerComponent.exists()).toBe(true);
        expect(headerComponent.text()).toBe('header text');
        expect(headerComponent.type()).toBe('h2');
    });

    it('renders with provided header as given tag', () => {
        const wrapper = getMountedWrapper({
            headerText: 'header text',
            headerElement: 'h5',
        });
        const headerComponent = wrapper.find(
            '.ffe-context-message-content__header',
        );
        expect(headerComponent.type()).toBe('h5');
    });

    it('renders without header', () => {
        const wrapper = getMountedWrapper();
        const header = wrapper.find('.ffe-context-message-content__header');
        expect(header.exists()).toBe(false);
    });
    it('set role="group" on outer container', () => {
        const wrapper = getMountedWrapper();
        const container = wrapper.find('.ffe-context-message');
        expect(container.prop('role')).toBe('group');
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
        const wrapper = getMountedWrapper({});
        const el = wrapper.find(Symbol);
        expect(el).toHaveLength(1);
        expect(el.hasClass('ffe-context-message-content__icon-span')).toBe(
            true,
        );
    });

    it('lets consumer add extra classes to icon', () => {
        const wrapper = getMountedWrapper({
            icon: (
                <Symbol
                    icon="info_i"
                    className="extra-extra-read-all-about-it"
                />
            ),
        });

        const el = wrapper.find(Symbol);

        expect(el.hasClass('ffe-context-message-content__icon-span')).toBe(
            true,
        );
        expect(el.hasClass('extra-extra-read-all-about-it')).toBe(true);
    });

    it('passes unknown props on to the root DOM node', () => {
        const wrapper = getMountedWrapper({
            'data-foo': 'bar',
        });

        const el = wrapper.find('.ffe-context-message');

        expect(el.prop('data-foo')).toBe('bar');
    });

    it('renders without close button by default', () => {
        const wrapper = getMountedWrapper({
            icon: <Symbol ariaLabel="info" icon="info_i" />,
        });
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
        const wrapper = getMountedWrapper();
        const message = wrapper.find('.ffe-context-message');
        expect(message.prop('aria-labelledby')).toBe(undefined);
    });
});

describe('<ContextInfoMessage />', () => {
    const wrapper = mount(
        <ContextInfoMessage showCloseButton={true}>
            <p>content</p>
        </ContextInfoMessage>,
    );

    it('renders ContextInfoMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--info')).toBe(true);
    });
});

describe('<ContextTipsMessage />', () => {
    const wrapper = mount(
        <ContextTipsMessage showCloseButton={true}>
            <p>content</p>
        </ContextTipsMessage>,
    );

    it('renders ContextTipsMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--tips')).toBe(true);
    });
});

describe('Test ContextSuccessMessage', () => {
    const wrapper = mount(
        <ContextSuccessMessage showCloseButton={true}>
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
        <ContextErrorMessage showCloseButton={true}>
            <p>content</p>
        </ContextErrorMessage>,
    );

    it('renders ContextErrorMessage', () => {
        const component = wrapper.find('.ffe-context-message');
        expect(component.hasClass('ffe-context-message--error')).toBe(true);
    });
});
