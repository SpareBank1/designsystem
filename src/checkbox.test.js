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
        let spy = sinon.spy();
        
        let wrapper = shallow(CreateCheckbox({ onChange: spy }));

        wrapper.find('input').simulate('change');
        assert.equal(spy.args[0][0], true);

        spy = sinon.spy();
        wrapper = shallow(CreateCheckbox({ onChange: spy, checked: true }));
        
        wrapper.find('input').simulate('change');
        assert.equal(spy.args[0][0], false);

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
    
});
