/*eslint-env mocha*/
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import CreateCheckbox from '../docs/example-component';

describe('<Checkbox />', () => {

    it('should render a input', () => {
        const wrapper = shallow(CreateCheckbox({}));
        assert.equal(wrapper.find('input').length, 1);
    });

    it('should call onChange when clicked', () => {
        const spy = sinon.spy();
        const wrapper = shallow(CreateCheckbox({ onChange: spy }));

        wrapper.find('input').simulate('change');
        assert.equal(spy.calledOnce, true);
    });

    it('should call onChange with the correct parameter', () => {
        const mockEvent = { target: { value: true } };
        const spy = sinon.spy();

        const wrapper = shallow(CreateCheckbox({ onChange: spy }));

        wrapper.find('input').simulate('change', mockEvent);
        assert.equal(spy.firstCall.args[0], mockEvent);
    });

    it('should render a default value if passed', () => {
        let wrapper = shallow(CreateCheckbox({}));
        assert.equal(wrapper.find('input').prop('checked'), undefined);

        wrapper = shallow(CreateCheckbox({ checked: true }));
        assert.equal(wrapper.find('input').prop('checked'), true);
    });

    it('should apply the same id to <label> and <input>', () => {
        const wrapper = shallow(CreateCheckbox({ name: 'Some text goes here' }));

        assert.equal(
            wrapper.find('label').prop('htmlFor'),
            wrapper.find('input').prop('id')
        );
    });

    it('should support noMargins', () => {
        assert.equal(
            shallow(CreateCheckbox({ noMargins: false })).find('.ffe-checkbox--no-margin').length,
            0);

        assert.equal(
            shallow(CreateCheckbox({ noMargins: true })).find('.ffe-checkbox--no-margin').length,
            1);
    });

    it('should support inline', () => {
        assert.equal(
            shallow(CreateCheckbox()).find('.ffe-checkbox--inline').length,
            1);

        assert.equal(
            shallow(CreateCheckbox({ inline: false })).find('.ffe-checkbox--inline').length,
            0);

        assert.equal(
            shallow(CreateCheckbox({ inline: true })).find('.ffe-checkbox--inline').length,
            1);
    });

    it('should support invalid', () => {
        assert.equal(shallow(CreateCheckbox({ invalid: false })).find('input').prop('aria-invalid'), 'false');
        assert.equal(shallow(CreateCheckbox({ invalid: true })).find('input').prop('aria-invalid'), 'true');
    });

    it('should set arbitrary props (rest) on input', () => {
        const wrapper = shallow(CreateCheckbox({
            name: 'checkbox',
            iDontReallyDoAnything: 'false',
            tabIndex: -1
        }));

        assert.equal(wrapper.find('input').prop('name'), 'checkbox');
        assert.equal(wrapper.find('input').prop('iDontReallyDoAnything'), 'false');
        assert.equal(wrapper.find('input').prop('tabIndex'), -1);
    });

});
