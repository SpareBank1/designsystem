import { useEffect, useRef } from 'react';
import {
    getIsLoadingItemsA11yStatus,
    getItemClearedA11yStatus,
    getItemSelectedA11yStatus,
    getNoResultA11yStatus,
    getResultCountChangedA11yStatus,
} from './translations';
import debounce from 'lodash.debounce';
import { Locale } from './types';

const getStatusDiv = () => {
    const id = 'a11y-status-message';
    let statusDiv = window.document.getElementById(id);
    if (statusDiv) {
        return statusDiv;
    }

    statusDiv = window.document.createElement('div');
    statusDiv.setAttribute('id', id);
    statusDiv.setAttribute('role', 'status');
    statusDiv.setAttribute('aria-live', 'polite');
    statusDiv.setAttribute('aria-relevant', 'additions text');
    Object.assign(statusDiv.style, {
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        width: '1px',
    });
    window.document.body.appendChild(statusDiv);
    return statusDiv;
};

const cleanupStatus = debounce(() => {
    getStatusDiv().textContent = '';
}, 500);

const setStatus = (status: string) => {
    const div = getStatusDiv();
    if (!status) {
        return;
    }

    div.textContent = status;
    cleanupStatus();
};

const updateA11yStatus = debounce(getA11yMessage => {
    setStatus(getA11yMessage());
}, 200);

const getItemSelectedMessage = ({
    selectedItemValue,
    locale,
}: {
    selectedItemValue: string | undefined;
    locale: Locale;
}) => {
    if (!selectedItemValue) {
        return getItemClearedA11yStatus(locale);
    }
    return getItemSelectedA11yStatus(locale, selectedItemValue);
};

const getStateChangeMessage = ({
    isExpanded,
    resultCount,
    locale,
}: {
    isExpanded: boolean;
    resultCount: number;
    locale: Locale;
}) => {
    if (!isExpanded) {
        return '';
    }

    if (!resultCount) {
        return getNoResultA11yStatus(locale);
    }

    return getResultCountChangedA11yStatus(locale, resultCount);
};

const getIsLoadingItemsMessage = (locale: Locale) => {
    return getIsLoadingItemsA11yStatus(locale);
};

export const useSetAllyMessageItemSelection = <
    Item extends Record<string, any>,
>({
    hasFocus,
    isExpanded,
    isLoading,
    locale,
    resultCount,
    searchAttributes,
    selectedItem,
}: {
    hasFocus: boolean;
    isExpanded: boolean;
    isLoading: boolean;
    locale: Locale;
    resultCount: number;
    searchAttributes: Array<keyof Item>;
    selectedItem: Item | null | undefined;
}) => {
    const isInitialMount = useRef(true);
    const prevSelectedItemValue = useRef<string>();
    const selectedItemValue: string | undefined =
        selectedItem?.[searchAttributes[0]];

    useEffect(() => {
        if (isLoading && hasFocus) {
            updateA11yStatus(() => {
                return getIsLoadingItemsMessage(locale);
            });
            return;
        }

        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const selectedItemHasChanged =
            selectedItemValue !== prevSelectedItemValue.current;
        if (selectedItemHasChanged) {
            prevSelectedItemValue.current = selectedItemValue;
            updateA11yStatus(() => {
                return getItemSelectedMessage({ selectedItemValue, locale });
            });
        } else {
            updateA11yStatus(() => {
                return getStateChangeMessage({
                    isExpanded,
                    resultCount,
                    locale,
                });
            });
        }

        return () => {
            // Cancel debounce before component unmounts
            updateA11yStatus.cancel();
            cleanupStatus.cancel();
        };
    }, [
        selectedItemValue,
        locale,
        isExpanded,
        resultCount,
        hasFocus,
        isLoading,
    ]);
};
