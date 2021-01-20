import { shallow } from 'enzyme';
import React from 'react';
import Input from './Input';

const defaultProps = {
    inputProps: {
        className: 'given-class-name',
        placeholder: 'Given placeholder',
    },
    onChange: f => f,
    onFocus: f => f,
    onKeyDown: f => f,
    value: '2016-03-07',
    'aria-invalid': 'false',
    language: 'nb',
};

const getInput = props => shallow(<Input {...defaultProps} {...props} />);

describe('<Input />', () => {
    describe('nested input field', () => {
        it('should be a single input field', () => {
            const input = getInput();
            expect(input).toHaveLength(1);
        });

        it('should have BEM element class name', () => {
            const input = getInput();
            expect(input.hasClass('ffe-dateinput__field')).toBe(true);
        });

        it('should have given value', () => {
            const input = getInput();
            expect(input.prop('value')).toBe('2016-03-07');
        });

        it('should have property from input props', () => {
            const input = getInput();
            expect(input.prop('placeholder')).toBe('Given placeholder');
        });

        it('should have given aria-invalid', () => {
            const input = getInput();
            expect(input.prop('aria-invalid')).toBe('false');
        });

        it('should fall back to use ariaInvalid prop if aria-invalid is not set', () => {
            const input = getInput({
                'aria-invalid': undefined,
                ariaInvalid: true,
            });
            expect(input.prop('aria-invalid')).toBe('true');
        });

        it('should have class name from input props', () => {
            const input = getInput();
            expect(input.hasClass('given-class-name')).toBe(true);
        });

        it('should delegate change events', () => {
            const spy = jest.fn();
            const input = getInput({ onChange: spy });
            input.simulate('change');
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should delegate key down events', () => {
            const spy = jest.fn();
            const input = getInput({ onKeyDown: spy });
            input.simulate('keydown');
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});
