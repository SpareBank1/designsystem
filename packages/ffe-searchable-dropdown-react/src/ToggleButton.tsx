import React from 'react';
import { getButtonLabelClose, getButtonLabelOpen } from './translations';
import classNames from 'classnames';
import { Spinner } from '@sb1/ffe-spinner-react';
import { Icon } from '@sb1/ffe-icons-react';
import { Locale } from './types';

interface Props {
    locale: Locale;
    isExpanded: boolean;
    onClick: () => void;
    isLoading: boolean;
}

export const ToggleButton = React.forwardRef<HTMLButtonElement, Props>(
    ({ locale, isExpanded, onClick, isLoading }, ref) => {
        return (
            <button
                type="button"
                ref={ref}
                aria-label={
                    isExpanded
                        ? getButtonLabelClose(locale)
                        : getButtonLabelOpen(locale)
                }
                className={classNames('ffe-searchable-dropdown__button', {
                    'ffe-searchable-dropdown__button--flip': isExpanded,
                })}
                onClick={onClick}
            >
                {isLoading ? (
                    <Spinner />
                ) : (
                    <Icon
                        fileUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+"
                        size="md"
                        className="ffe-searchable-dropdown__button-icon"
                    />
                )}
            </button>
        );
    },
);
