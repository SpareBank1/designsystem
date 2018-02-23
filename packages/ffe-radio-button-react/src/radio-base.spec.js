import React from 'react';
import { shallow, mount } from 'enzyme';
import RadioBase from './radio-base';

describe('<RadioBase />', () => {
    describe('rendering', () => {
        describe('default', () => {
            const wrapper = shallow(
                <RadioBase labelClasses="" value="shark" label="Kjempetorsk" />,
            );

            it('should render an input with type radio', () => {
                expect(wrapper.find('input')).toHaveLength(1);
                expect(wrapper
                        .find('input')
                        .prop('type')).toBe('radio');
            });

            it('should render a label', () => {
                expect(wrapper.find('label')).toHaveLength(1);
            });

            it('should apply the same id to <label> and <input>', () => {
                const htmlFor = wrapper.find('label').prop('htmlFor');
                const id = wrapper.find('input').prop('id');
                expect(htmlFor).toBe(id);
            });

            it('should not create a new id on every render', () => {
                const firstId = wrapper.find('input').prop('id');
                wrapper.setProps({ invalid: true }); // trigger re-render
                const secondId =  wrapper.find('input').prop('id');
                expect(firstId).toBe(secondId);
            })
        });

        it('should render a default value if passed', () => {
            let wrapper = shallow(<RadioBase labelClasses="" value="" />);
            expect(wrapper
                    .find('input')
                    .prop('checked')).toBeFalsy();

            wrapper = shallow(<RadioBase value="" checked={true} labelClasses="" />);
            expect(wrapper
                    .find('input')
                    .prop('checked')).toBe(true);
        });

        it('should render the field disabled if specified', () => {
            let wrapper = shallow(<RadioBase value="" labelClasses="" />);
            expect(wrapper
                    .find('input')
                    .prop('disabled')).toBeUndefined();

            wrapper = shallow(<RadioBase value="" labelClasses="" disabled={true} />);
            expect(wrapper
                    .find('input')
                    .prop('disabled')).toBe(true);
        });

        it('should apply labelClasses to the label', () => {
            const wrapper = shallow(
                <RadioBase labelClasses="test-class" value="" />,
            );
            expect(wrapper
                    .find('label')
                    .hasClass('test-class')).toBe(true);
        });

        it('should apply pass-through extra props', () => {
            const wrapper = shallow(<RadioBase
                    labelClasses=""        value="shark"
                    label="Kjempetorsk"
                    aria-describedby="svorsk"
                />,
            );
            expect(wrapper
                    .find('input')
                    .prop('aria-describedby')).toBe('svorsk');
        });
    });

    describe('interactivity', () => {
        it('should call onChange when clicked', () => {
            const spy = jest.fn();
            const wrapper = shallow(
                <RadioBase value="" onChange={spy} labelClasses="" />,
            );
            wrapper.find('input').simulate('change');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should call onChange with correct parameters', () => {
            const spy = jest.fn();
            const wrapper = mount(
                <fieldset>
                    <RadioBase
                        name="fish"
                        value="hai"
                        onChange={spy}
                        labelClasses=""
                    />
                    <RadioBase
                        name="fish"
                        value="kjempetorsk"
                        onChange={spy}
                        labelClasses=""
                    />
                </fieldset>,
            );
            const shark = wrapper.find('input[value="hai"]');
            const giantCod = wrapper.find('input[value="kjempetorsk"]');

            shark.simulate('change');
            giantCod.simulate('change');
            shark.simulate('change');

            expect(spy).toHaveBeenCalledTimes(3);
            expect(spy.mock.calls[0][0].target.value).toBe('hai');
            expect(spy.mock.calls[1][0].target.value).toBe('kjempetorsk');
            expect(spy.mock.calls[2][0].target.value).toBe('hai');
            // Yes, I'm sad to say, but there actually are swedes who believe that the norwegian word for shark is kjempetorsk...
        });
    });

    describe('invalid', () => {
        it('sets missing prop to false', () => {
            const wrapper = shallow(<RadioBase value="Hei" labelClasses="" />);

            expect(wrapper
                    .find('input')
                    .prop('aria-invalid')).toBe('false');
            expect(wrapper
                    .find('label')
                    .prop(
                        'className',
                    )).not.toBe('ffe-radio-button--invalid');
        });

        it('handles boolean `false` aria-invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" aria-invalid={false} />,
            );

            expect(wrapper
                    .find('input')
                    .prop('aria-invalid')).toBe('false');
            expect(wrapper
                    .find('label')
                    .prop(
                        'className',
                    )).not.toBe('ffe-radio-button--invalid');
        });

        it('handles boolean `true` aria-invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" aria-invalid={true} />,
            );

            expect(wrapper
                    .find('input')
                    .prop('aria-invalid')).toBe('true');
            expect(wrapper
                    .find('label')
                    .prop(
                        'className',
                    )).toBe('ffe-radio-button--invalid');
        });

        it('handles string "false" aria-invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" aria-invalid="false" />,
            );

            expect(wrapper
                    .find('input')
                    .prop('aria-invalid')).toBe('false');
            expect(wrapper
                    .find('label')
                    .prop(
                        'className',
                    )).not.toBe('ffe-radio-button--invalid');
        });

        it('handles string "true" aria-invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" aria-invalid="true" />,
            );

            expect(wrapper
                    .find('input')
                    .prop('aria-invalid')).toBe('true');
            expect(wrapper
                    .find('label')
                    .prop(
                        'className',
                    )).toBe('ffe-radio-button--invalid');
        });

        it('handles boolean `false` invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" invalid={false} />,
            );

            expect(wrapper
                    .find('input')
                    .prop('aria-invalid')).toBe('false');
            expect(wrapper
                    .find('label')
                    .prop(
                        'className',
                    )).not.toBe('ffe-radio-button--invalid');
        });

        it('handles boolean `true` invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" invalid={true} />,
            );

            expect(wrapper
                    .find('input')
                    .prop('aria-invalid')).toBe('true');
            expect(wrapper
                    .find('label')
                    .prop(
                        'className')).toBe('ffe-radio-button--invalid');
        });

        it('handles string "false" invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" invalid="false" />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).toBe('false');
            expect(wrapper.find('label').prop('className')).not.toBe('ffe-radio-button--invalid');
        });

        it('handles string "true" invalid-prop', () => {
            const wrapper = shallow(
                <RadioBase value="Hei" labelClasses="" invalid="true" />,
            );

            expect(wrapper.find('input').prop('aria-invalid')).toBe('true');
            expect(wrapper.find('label').prop('className')).toBe('ffe-radio-button--invalid');
        });
    });
});
