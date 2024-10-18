import React, { ElementType, ForwardedRef } from 'react';
import { Chip, type ChipProps } from './Chip';
import { fixedForwardRef } from './fixedForwardRef';
import classNames from 'classnames';

export type ChipSelectableProps<As extends ElementType = 'button'> =
    ChipProps<As> & {
        /** Whether this chips is selected */
        isSelected?: boolean;
    };

function ChipSelectableForwardRef<As extends ElementType>(
    props: ChipSelectableProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, isSelected, ...rest } = props;

    return (
        <Chip
            ref={ref}
            className={classNames(className, {
                'ffe-chip--selected': isSelected,
            })}
            {...rest}
        />
    );
}

export const ChipSelectable = fixedForwardRef(ChipSelectableForwardRef);
