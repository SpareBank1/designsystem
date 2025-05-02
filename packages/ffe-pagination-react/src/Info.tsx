import React from 'react';
import { txt } from './texts.js';
import { Locale } from './types.js';
import { Paragraph } from '@sb1/ffe-core-react';
import classNames from 'classnames';

interface InfoProps extends React.ComponentPropsWithoutRef<'p'> {
    locale: Locale;
    start: number;
    end: number;
    total: number;
}

export const Info: React.FC<InfoProps> = ({
    locale,
    start,
    end,
    total,
    className,
    ...rest
}) => {
    return (
        <Paragraph
            className={classNames('ffe-pagination-info', className)}
            {...rest}
        >
            {txt[locale].showing(start, end, total)}
        </Paragraph>
    );
};
