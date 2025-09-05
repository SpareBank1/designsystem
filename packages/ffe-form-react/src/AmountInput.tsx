import React, { useState } from 'react';
import { Paragraph } from '@sb1/ffe-core-react';
import {
    formatAmountV2,
    formatAmountWithCurrency,
} from '@sb1/ffe-formatters/src/formatAmount';
import classNames from 'classnames';

type Locale = 'nb' | 'nn' | 'en';

export interface AmountInputProps
    extends React.ComponentPropsWithoutRef<'input'> {
    defaultValue?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    locale: Locale;
}

export const AmountInput = (props: AmountInputProps) => {
    const { className, defaultValue, onChange, locale, ...rest } = props;
    const [value, setValue] = useState<number>(defaultValue ?? 0);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const amount = stripAmountAndGetFloat(event.target.value);
        setValue(amount);
        if (onChange) {
            onChange({
                ...event,
                target: { ...event.target, value: amount.toString() },
            });
        }
    }

    function stripAmountAndGetFloat(amount: string) {
        return parseFloat(amount.replace(/\s+/g, '').replace(/[.,]/g, ''));
    }

    return (
        <div className="ffe-amount-input">
            <Paragraph
                className={classNames(
                    'ffe-amount-input__visible-amount',
                    'ffe-default-mode',
                )}
            >
                {value || value === 0
                    ? formatAmountWithCurrency(value, { locale })
                    : ''}
            </Paragraph>
            <input
                defaultValue={undefined}
                value={
                    value || value === 0
                        ? formatAmountV2(value, { locale: locale })
                        : ''
                }
                onChange={handleChange}
                className={classNames(
                    'ffe-input-field',
                    'ffe-default-mode',
                    'ffe-amount-input__editable-amount',
                    className,
                )}
                {...rest}
            />
        </div>
    );
};
