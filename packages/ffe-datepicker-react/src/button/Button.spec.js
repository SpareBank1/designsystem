import React from 'react';
import Button from './Button';

const buttonRef = React.createRef();
const defaultProps = {
    value: '',
    language: 'nb',
    onClick: f => f,
    buttonRef: buttonRef,
};

const getButton = props => shallow(<Button {...defaultProps} {...props} />);

describe('<Button />', () => {
    it('should have aria-label with text', () => {
        const button = getButton();
        expect(button.find('[aria-label="Velg dato"]').exists()).toBe(true);
        const buttonWithSelectedDate = getButton({ value: '24.12.2020' });
        expect(
            buttonWithSelectedDate
                .find('[aria-label="Endre dato, valgt dato er 24.12.2020"]')
                .exists(),
        ).toBe(true);
    });
});
