import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { spy } from 'sinon';

import ActionButton from './ActionButton';
import Button from './Button';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import ShortcutButton from './ShortcutButton';

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

    it('ShortcutButton renders a shortcut button', () => {
        let wrapper = render(<ShortcutButton onClick={() => ({})}>Hello</ShortcutButton>);
        expect(wrapper.find('.ffe-shortcut-button')).to.have.length(1);
        expect(wrapper.find('.ffe-shortcut-button__label-text').text()).to.equal('Hello');

        wrapper = render(<ShortcutButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-shortcut-button')).to.have.length(1);
        expect(wrapper.find('.ffe-shortcut-button__label-text').text()).to.equal('Hello');
    });

    it('isLoading prop toggles aria-hidden and classes with --loading modifier', () => {
        let wrapper = render(<Button onClick={() => ({})}>Hello</Button>);
        expect(wrapper.find('.ffe-primary-button--loading')).to.have.length(0);
        expect(wrapper.find('.ffe-primary-button__label-text--loading')).to.have.length(0);
        expect(wrapper.find('.ffe-primary-button__label-spinner').prop('aria-hidden'))
            .to.equal('true');

        wrapper = render(<Button onClick={() => ({})} isLoading>Hello</Button>);
        expect(wrapper.find('.ffe-primary-button--loading')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text--loading')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-spinner').prop('aria-hidden'))
            .to.equal('false');
    });

    it('buttons should not be disabled by default', () => {
        const wrapper = shallow(<Button onClick={() => ({})}>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('disabled')).to.be.equal(undefined);
        expect(button.prop('aria-disabled')).to.be.equal(undefined);
    });

    it('disableButton prop disables the button', () => {
        const wrapper = shallow(<Button disableButton onClick={() => ({})}>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('disabled')).to.be.equal(true);
        expect(button.prop('aria-disabled')).to.be.equal(true);
    });

    it('ActionButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <ActionButton disableButton onClick={() => ({})}>Hello</ActionButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.equal(true);
    });

    it('PrimaryButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <PrimaryButton disableButton onClick={() => ({})}>Hello</PrimaryButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.equal(true);
    });

    it('SecondaryButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <SecondaryButton disableButton onClick={() => ({})}>Hello</SecondaryButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.equal(true);
    });

    it('ShortcutButton passes disableButton on to Button', () => {
        const wrapper = shallow(
            <ShortcutButton disableButton onClick={() => ({})}>Hello</ShortcutButton>
        );
        expect(wrapper.find('Button').prop('disableButton')).to.be.equal(true);
    });

    it('runs the function passed as onClick when clicked', () => {
        let onClick = spy();
        const wrapper = shallow(<Button onClick={onClick}>Hello</Button>);
        wrapper.find('button').simulate('click');
        expect(onClick.calledOnce).to.equal(true);
    });

    it('Button button should be tabbable by default', () => {
        const wrapper = shallow(<Button onClick={() => ({})}>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('tabindex')).to.be.equal(undefined);
    });

    it('Button can be set to be non-tabbable', () => {
        const wrapper = shallow(<Button onClick={() => ({})} isTabbable={false}>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('tabIndex')).to.be.equal(-1);
    });

    it('Set tabbable on Button', () => {
        const wrapper = shallow(<Button onClick={() => ({})} isTabbable>Hello</Button>);
        const button = wrapper.find('button');
        expect(button.prop('tabIndex')).to.be.equal(0);
    });

    it('ActionButton passes tabbability on to Button', () => {
        const wrapper = shallow(
            <ActionButton disableButton onClick={() => ({})} isTabbable>Hello</ActionButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.equal(true);
    });

    it('PrimaryButton passes tabbability on to Button', () => {
        const wrapper = shallow(
            <PrimaryButton disableButton onClick={() => ({})} isTabbable>Hello</PrimaryButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.equal(true);
    });

    it('SecondaryButton passes tabability on to Button', () => {
        const wrapper = shallow(
            <SecondaryButton disableButton onClick={() => ({})} isTabbable>Hello</SecondaryButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.equal(true);
    });

    it('ShortcutButton passes tabbability on to Button', () => {
        const wrapper = shallow(
            <ShortcutButton disableButton onClick={() => ({})} isTabbable>Hello</ShortcutButton>
        );
        expect(wrapper.find('Button').prop('isTabbable')).to.be.equal(true);
    });
});
