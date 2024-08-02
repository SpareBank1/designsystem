import React from 'react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { txt } from './texts';
import classnames from 'classnames';
import { Locale } from './types';

interface PageButtonProps {
    isActive: boolean;
    onClick: () => void;
    children: number;
    locale: Locale;
}

export const PageButton = React.forwardRef<HTMLButtonElement, PageButtonProps>(
    ({ isActive, onClick, children, locale }, ref) => {
        return (
            <SecondaryButton
                ref={ref}
                type="button"
                aria-label={
                    isActive
                        ? txt[locale].currentPage(children)
                        : txt[locale].goToPage(children)
                }
                aria-current={isActive}
                className={classnames('ffe-pagination-page-button', {
                    'ffe-pagination-page-button--active': isActive,
                })}
                onClick={onClick}
            >
                {children}
            </SecondaryButton>
        );
    },
);
