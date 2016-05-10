import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import { spy } from 'sinon';

import FFEActionButton from './FFEActionButton';
import FFEButton from './FFEButton';
import FFEPrimaryButton from './FFEPrimaryButton';
import FFESecondaryButton from './FFESecondaryButton';
import FFEShortcutButton from './FFEShortcutButton';

describe('Button components:', () => {
    it('FFEButton by default renders a primary button', () => {
        let wrapper = render(<FFEButton onClick={() => ({})}>Hello</FFEButton>);
        expect(wrapper.find('.ffe-primary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');

        wrapper = render(<FFEButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-primary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');
    });

    it('FFEPrimaryButton renders a primary button', () => {
        let wrapper = render(<FFEPrimaryButton onClick={() => ({})}>Hello</FFEPrimaryButton>);
        expect(wrapper.find('.ffe-primary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');

        wrapper = render(<FFEButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-primary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text').text()).to.equal('Hello');
    });

    it('FFEActionButton renders an action button', () => {
        let wrapper = render(<FFEActionButton onClick={() => ({})}>Hello</FFEActionButton>);
        expect(wrapper.find('.ffe-action-button')).to.have.length(1);
        expect(wrapper.find('.ffe-action-button__label-text').text()).to.equal('Hello');

        wrapper = render(<FFEActionButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-action-button')).to.have.length(1);
        expect(wrapper.find('.ffe-action-button__label-text').text()).to.equal('Hello');
    });

    it('FFESecondaryButton renders a secondary button', () => {
        let wrapper = render(<FFESecondaryButton onClick={() => ({})}>Hello</FFESecondaryButton>);
        expect(wrapper.find('.ffe-secondary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-secondary-button__label-text').text()).to.equal('Hello');

        wrapper = render(<FFESecondaryButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-secondary-button')).to.have.length(1);
        expect(wrapper.find('.ffe-secondary-button__label-text').text()).to.equal('Hello');
    });

    it('FFEShortcutButton renders a shortcut button', () => {
        let wrapper = render(<FFEShortcutButton onClick={() => ({})}>Hello</FFEShortcutButton>);
        expect(wrapper.find('.ffe-shortcut-button')).to.have.length(1);
        expect(wrapper.find('.ffe-shortcut-button__label-text').text()).to.equal('Hello');

        wrapper = render(<FFEShortcutButton onClick={() => ({})} label="Hello" />);
        expect(wrapper.find('.ffe-shortcut-button')).to.have.length(1);
        expect(wrapper.find('.ffe-shortcut-button__label-text').text()).to.equal('Hello');
    });

    it('isLoading prop toggles aria-hidden and classes with --loading modifier', () => {
        let wrapper = render(<FFEButton onClick={() => ({})}>Hello</FFEButton>);
        expect(wrapper.find('.ffe-primary-button--loading')).to.have.length(0);
        expect(wrapper.find('.ffe-primary-button__label-text--loading')).to.have.length(0);
        expect(wrapper.find('.ffe-primary-button__label-spinner').prop('aria-hidden'))
            .to.equal('true');

        wrapper = render(<FFEButton onClick={() => ({})} isLoading>Hello</FFEButton>);
        expect(wrapper.find('.ffe-primary-button--loading')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-text--loading')).to.have.length(1);
        expect(wrapper.find('.ffe-primary-button__label-spinner').prop('aria-hidden'))
            .to.equal('false');
    });

    it('buttons should not be disabled by default', () => {
        const wrapper = shallow(<FFEButton onClick={() => ({})}>Hello</FFEButton>);
        const button = wrapper.find('button');
        expect(button.prop('disabled')).to.be.equal(undefined);
        expect(button.prop('aria-disabled')).to.be.equal(undefined);
    });

    it('disableButton prop disables the button', () => {
        const wrapper = shallow(<FFEButton disableButton onClick={() => ({})}>Hello</FFEButton>);
        const button = wrapper.find('button');
        expect(button.prop('disabled')).to.be.equal(true);
        expect(button.prop('aria-disabled')).to.be.equal(true);
    });

    it('FFEActionButton passes disableButton on to FFEButton', () => {
        const wrapper = shallow(
            <FFEActionButton disableButton onClick={() => ({})}>Hello</FFEActionButton>
        );
        expect(wrapper.find('FFEButton').prop('disableButton')).to.be.equal(true);
    });

    it('FFEPrimaryButton passes disableButton on to FFEButton', () => {
        const wrapper = shallow(
            <FFEPrimaryButton disableButton onClick={() => ({})}>Hello</FFEPrimaryButton>
        );
        expect(wrapper.find('FFEButton').prop('disableButton')).to.be.equal(true);
    });

    it('FFESecondaryButton passes disableButton on to FFEButton', () => {
        const wrapper = shallow(
            <FFESecondaryButton disableButton onClick={() => ({})}>Hello</FFESecondaryButton>
        );
        expect(wrapper.find('FFEButton').prop('disableButton')).to.be.equal(true);
    });

    it('FFEShortcutButton passes disableButton on to FFEButton', () => {
        const wrapper = shallow(
            <FFEShortcutButton disableButton onClick={() => ({})}>Hello</FFEShortcutButton>
        );
        expect(wrapper.find('FFEButton').prop('disableButton')).to.be.equal(true);
    });

    it('runs the function passed as onClick when clicked', () => {
        let onClick = spy();
        const wrapper = shallow(<FFEButton onClick={onClick}>Hello</FFEButton>);
        wrapper.find('button').simulate('click');
        expect(onClick.calledOnce).to.equal(true);
    });
});
