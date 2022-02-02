import React, { Component } from 'react';
import { string, func, object } from 'prop-types';
import { KalenderIkon } from '@sb1/ffe-icons-react';
import { validateDate } from '../util/dateUtil';
import i18n from '../i18n/i18n';

export default class Button extends Component {
    render() {
        const { value, language, onClick, buttonRef } = this.props;
        const buttonLabel = validateDate(value)
            ? `${i18n[language].CHANGE_DATE}, ${i18n[language].CHOSEN_DATE} ${value}`
            : i18n[language].CHOOSE_DATE;

        return (
            <button
                ref={buttonRef}
                onClick={onClick}
                className="ffe-datepicker__button"
                aria-label={buttonLabel}
                type="button"
            >
                <KalenderIkon className="ffe-datepicker__icon" />
            </button>
        );
    }
}

Button.propTypes = {
    value: string.isRequired,
    language: string.isRequired,
    onClick: func.isRequired,
    buttonRef: object.isRequired,
};
