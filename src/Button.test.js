/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { spy } from 'sinon';

import ActionButton from './ActionButton';
import Button from './Button';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import ShortcutButton from './ShortcutButton';
import TertiaryButton from './TertiaryButton';
import BackButton from './BackButton';

describe('Button components:', () => {
    it('Button by default renders a primary button', () => {
        let wrapper = render(<Button onClick={() => ({})}>Hello</Button>);
        expect(wrapper.find('.ffe-primary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');

        wrapper = render(<Button onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-primary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');
    });

    it('PrimaryButton renders a primary button', () => {
        let wrapper = render(<PrimaryButton onClick={() => ({})}>Hello</PrimaryButton>);
        expect(wrapper.find('.ffe-primary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');

        wrapper = render(<Button onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-primary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');
    });

    it('ActionButton renders an action button', () => {
        let wrapper = render(<ActionButton onClick={() => ({})}>Hello</ActionButton>);
        expect(wrapper.find('.ffe-action-button')).to.have.length(1);
        expect(wrapper.find('.ffe-action-button__label-text').text()).to.equal('Hello');

        wrapper = render(<ActionButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-action-button')).to.have.length(1);
        expect(wrapper.find('.ffe-action-button__label-text').text()).to.equal('Hello');
    });

    it('SecondaryButton renders a secondary button', () => {
        let wrapper = render(<SecondaryButton onClick={() => ({})}>Hello</SecondaryButton>);
        expect(wrapper.find('.ffe-secondary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-secondary-button__label-text').text()).to.equal('Hello');

        wrapper = render(<SecondaryButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-secondary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-secondary-button__label-text').text()).to.equal('Hello');
    });

    it('ShortcutButton renders a shortcut button with icon', () => {
        let wrapper = render(<ShortcutButton onClick={() => ({})}>Hello</ShortcutButton>);
        expect(wrapper.find('.ffe-shortcut-button')).to.have.length(1);
        expect(wrapper.find('.ffe-shortcut-button__label-text').text()).to.equal('Hello');
        expect(wrapper.find('svg.ffe-shortcut-button__label-icon')).to.have.length(1);

        wrapper = render(<ShortcutButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-shortcut-button')).to.have.length(1);
        expect(wrapper.find('.ffe-shortcut-button__label-text').text()).to.equal('Hello');
        expect(wrapper.find('svg.ffe-shortcut-button__label-icon')).to.have.length(1);
    });

    it('TertiaryButton renders a tertiary button', () => {
        let wrapper = render(<TertiaryButton onClick={() => ({})}>Hello</TertiaryButton>);
        expect(wrapper.find('.ffe-tertiary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-tertiary-button').text()).to.equal('Hello');

        wrapper = render(<TertiaryButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-tertiary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-tertiary-button').text()).to.equal('Hello');
    });

    it('BackButton renders a back button', () => {
        let wrapper = render(<BackButton onClick={() => ({})}>Hello</BackButton>);
        expect(wrapper.find('.ffe-back-button')).to.have.length(1);
        expect(wrapper.find('.ffe-back-button').text()).to.equal('Hello');

        wrapper = render(<BackButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-back-button')).to.have.length(1);
        expect(wrapper.find('.ffe-back-button').text()).to.equal('Hello');
    });

    it('isLoading prop toggles aria-hidden and classes with --loading modifier', () => {
        let wrapper = render(<Button onClick={() => ({})}>Hello</Button>);
        expect(wrapper.find('.ffe-primary-button--loading')).to.have.length(0);
        expect(wrapper.find('.ffe-primary-button__label-text--loading')).to.have.length(0);
        expect(wrapper.find('.ffe-primary-button__label-spinner').prop('aria-hidden'))
            .to.equal('true');

        wrapper = render(<Button onClick={() => ({})} isLoading={true}>Hello</Button>);
        expect(wrapper.find('.ffe-primary-button--loading')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text--loading')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-spinner').prop('aria-hidden'))
            .to.equal('false');
    });

    it('buttons should not be disabled by default', () => {
        const wrapper = shallow(<Button onClick={() => ({})}>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('disabled')).to.be.undefined;
        expect(button.prop('aria-disabled')).to.be.undefined;
    });

    it('disableButton prop disables the button', () => {
        const wrapper = shallow(<Button disableButton={true} onClick={() => ({})}>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('disabled')).to.be.true;
        expect(button.prop('aria-disabled')).to.be.true;
    });

    it('ActionButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <ActionButton disableButton={true} onClick={() => ({})}>Hello</ActionButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.true;
    });

    it('ActionButton passes any prop on to Button', () => {
        const wrapper = shallow(
            <ActionButton data-analytics-track="logMe">Hello</ActionButton>
        );
        expect(wrapper.find('Button').is('[data-analytics-track="logMe"]')).to.be.true;
    });

    it('PrimaryButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <PrimaryButton disableButton={true} onClick={() => ({})}>Hello</PrimaryButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.true;
    });

    it('SecondaryButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <SecondaryButton disableButton={true} onClick={() => ({})}>Hello</SecondaryButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.true;
    });

    it('ShortcutButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <ShortcutButton disableButton={true} onClick={() => ({})}>Hello</ShortcutButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.true;
    });

    it('TertiaryButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <TertiaryButton disableButton={true} onClick={() => ({})}>Hello</TertiaryButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.true;
    });

    it('BackButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <BackButton disableButton={true} onClick={() => ({})}>Hello</BackButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.true;
    });

    it('runs the function passed as onClick when clicked', () => {
        let onClick = spy();
        const wrapper = shallow(<Button onClick={onClick}>Hello</Button>);
        wrapper.find('button').simulate('click');
        expect(onClick.calledOnce).to.true;
    });

    it('isLoading prop disables the button and marks it as aria-busy', () => {
        const wrapper = shallow(<Button isLoading={true}>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('disabled')).to.be.true;
        expect(button.prop('aria-busy')).to.be.true;
        expect(button.prop('aria-disabled')).to.be.undefined;
    });

    it('Set isTabbable={true} on Button does nothing', () => {
        const wrapper = shallow(<Button onClick={() => ({})} isTabbable={true}>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('tabIndex')).to.be.undefined;
    });

    it('ActionButton is tabbable by default', () => {
        const wrapper = shallow(
            <ActionButton disableButton={true} onClick={() => ({})}>Hello</ActionButton>
        );
        expect(wrapper.find('Button').prop('tabIndex')).to.be.undefined;
    });

    it('ActionButton passes isTabbable={false} on to Button', () => {
        const wrapper = shallow(
            <ActionButton disableButton={true} onClick={() => ({})} isTabbable={false}>Hello</ActionButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.false;
    });

    it('PrimaryButton is tabbable by default', () => {
        const wrapper = shallow(
            <PrimaryButton disableButton={true} onClick={() => ({})}>Hello</PrimaryButton>
        );
        expect(wrapper.find('Button').prop('tabIndex')).to.be.undefined;
    });

    it('PrimaryButton passes isTabbable={false} on to Button', () => {
        const wrapper = shallow(
            <PrimaryButton disableButton={true} onClick={() => ({})} isTabbable={false}>
                Hello
            </PrimaryButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.false;
    });

    it('SecondaryButton is tabbable by default', () => {
        const wrapper = shallow(
            <SecondaryButton disableButton={true} onClick={() => ({})}>Hello</SecondaryButton>
        );
        expect(wrapper.find('Button').prop('tabIndex')).to.be.undefined;
    });

    it('SecondaryButton passes isTabbable={false} on to Button', () => {
        const wrapper = shallow(
            <SecondaryButton disableButton={true} onClick={() => ({})} isTabbable={false}>
                Hello
            </SecondaryButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.false;
    });

    it('ShortcutButton is tabbable by default', () => {
        const wrapper = shallow(
            <ShortcutButton disableButton={true} onClick={() => ({})}>Hello</ShortcutButton>
        );
        expect(wrapper.find('Button').prop('tabIndex')).to.be.undefined;
    });

    it('ShortcutButton passes isTabbable={false} on to Button', () => {
        const wrapper = shallow(
            <ShortcutButton disableButton={true} onClick={() => ({})} isTabbable={false}>
                Hello
            </ShortcutButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.false;
    });

    it('TertiaryButton is tabbable by default', () => {
        const wrapper = shallow(
            <TertiaryButton disableButton={true} onClick={() => ({})}>Hello</TertiaryButton>
        );
        expect(wrapper.find('Button').prop('tabIndex')).to.be.undefined;
    });

    it('TertiaryButton passes isTabbable={false} on to Button', () => {
        const wrapper = shallow(
            <TertiaryButton disableButton={true} onClick={() => ({})} isTabbable={false}>
                Hello
            </TertiaryButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.false;
    });

    it('BackButton is tabbable by default', () => {
        const wrapper = shallow(
            <BackButton disableButton={true} onClick={() => ({})}>Hello</BackButton>
        );
        expect(wrapper.find('Button').prop('tabIndex')).to.be.undefined;
    });

    it('BackButton passes isTabbable={false} on to Button', () => {
        const wrapper = shallow(
            <BackButton disableButton={true} onClick={() => ({})} isTabbable={false}>
                Hello
            </BackButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.false;
    });

    it('Button sets class', () => {
        const wrapper = shallow(
            <Button className="testClass" onClick={() => {}}>Hello</Button>
        );
        expect(wrapper.find('button').hasClass('testClass')).to.be.true;
    });

    it('Button can be type="button" if specified', () => {
        const wrapper = shallow(
            <Button type="button">Hello</Button>
        );

        expect(wrapper.find('button').is('[type="button"]')).to.be.true;
    });

    it('Button can be type="reset" if specified', () => {
        const wrapper = shallow(
            <Button type="reset">Hello</Button>
        );

        expect(wrapper.find('button').is('[type="reset"]')).to.be.true;
    });

    it('Button can be autoFocused if specified', () => {
        const wrapper = shallow(
            <Button autoFocus={true}>Hello</Button>
        );
        expect(wrapper.find('button').prop('autoFocus')).to.be.true;
    });
});
