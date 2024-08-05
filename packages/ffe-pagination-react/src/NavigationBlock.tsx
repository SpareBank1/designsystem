import React from 'react';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import { txt } from './texts';
import { Locale } from './types';
import classNames from 'classnames';

interface NavigationBlockProps {
    direction: 'next' | 'prev';
    buttonText?: boolean;
    isHidden: boolean;
    locale: Locale;
    onClick: () => void;
    className?: string;
}

const chevronLeftIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==';

export const NavigationBlock: React.FC<NavigationBlockProps> = ({
    direction,
    buttonText,
    isHidden,
    locale,
    onClick,
    className,
}) => {
    return (
        <div
            className={classNames(
                className,
                `ffe-pagination-navigation-block ffe-pagination-navigation-block--${direction}`,
                {
                    'ffe-pagination-navigation-block--hidden': isHidden,
                    'ffe-pagination-navigation-block--no-text': !buttonText,
                },
            )}
        >
            <SecondaryButton
                type="button"
                leftIcon={
                    direction === 'prev' ? (
                        <Icon fileUrl={chevronLeftIcon} size="md" />
                    ) : undefined
                }
                rightIcon={
                    direction === 'next' ? (
                        <Icon fileUrl={chevronLeftIcon} size="md" />
                    ) : undefined
                }
                onClick={onClick}
            >
                {buttonText && (
                    <span className="ffe-pagination-navigation-block__button-text">
                        {direction === 'next'
                            ? txt[locale].next
                            : txt[locale].previous}
                    </span>
                )}
            </SecondaryButton>
        </div>
    );
};
