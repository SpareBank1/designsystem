import { shallow } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';
import React from 'react';
import DropdownStatusbar from './dropdownStatusbar';

describe('<DropdownStatusbar />', () => {

  it('should call onDone when tab is pressed', () => {
    const onDone = sinon.spy();
    const wrapper = shallow(<DropdownStatusbar onDone={onDone} renderSelectionStatus={() => {}} locale="nb"/>);
    const button = wrapper.find('button');
    const keyCodeTab = 9;
    const tabEvent = {which: keyCodeTab};
    button.simulate('keydown', tabEvent);
    assert.equal(onDone.calledOnce, true);
  });

  it('should not call onDone when shift+tab is pressed', () => {
    const onDone = sinon.spy();
    const wrapper = shallow(<DropdownStatusbar onDone={onDone} renderSelectionStatus={() => {}} locale="nb"/>);
    const button = wrapper.find('button');
    const keyCodeTab = 9;
    const tabEvent = {which: keyCodeTab, shiftKey: true};
    button.simulate('keydown', tabEvent);
    assert.equal(onDone.callCount, 0);
  });

});
