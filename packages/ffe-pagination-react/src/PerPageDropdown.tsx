import React, { ChangeEvent } from 'react';
import { Locale } from './types.js';
import { txt } from './texts.js';
import { Dropdown } from '@sb1/ffe-dropdown-react';
import classNames from 'classnames';

interface PerPageDropdownProps extends React.ComponentPropsWithoutRef<'div'> {
    locale: Locale;
    defaultValue: number;
    setPageSize: (pageSize: number) => void;
    rowsPerPageOptions: number[];
}

export const PerPageDropdown: React.FC<PerPageDropdownProps> = ({
    locale,
    defaultValue,
    setPageSize,
    rowsPerPageOptions,
    className,
    ...rest
}) => {
    return (
        <div
            className={classNames('ffe-pagination-rows-per-page', className)}
            {...rest}
        >
            <span aria-hidden={true}>{txt[locale].rowsPerPageLabel[0]}</span>
            <Dropdown
                aria-label={txt[locale].rowsPerPageLabel.join(' ')}
                defaultValue={defaultValue}
                onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                    setPageSize(Number(event.target.value))
                }
            >
                {rowsPerPageOptions.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Dropdown>
            <span aria-hidden={true}>{txt[locale].rowsPerPageLabel[1]}</span>
        </div>
    );
};
