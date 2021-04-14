import { useEffect } from 'react';
import {
    getItemClearedA11yStatus,
    getItemSelectedA11yStatus,
    getNoResultA11yStatus,
    getResultCountChangedA11yStatus,
} from './translations';

const debounce = (fn, time) => {
    let timeoutId;

    function cancel() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    }

    function wrapper(...args) {
        cancel();
        timeoutId = setTimeout(() => {
            timeoutId = null;
            fn(...args);
        }, time);
    }

    wrapper.cancel = cancel;

    return wrapper;
};

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

const setStatus = status => {
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

const getItemSelectedMessage = ({ selectedItem, searchAttributes, locale }) => {
    if (!selectedItem) {
        return getItemClearedA11yStatus(locale);
    }
    return getItemSelectedA11yStatus(locale, selectedItem[searchAttributes[0]]);
};

const getStateChangeMessage = ({
    isExpanded,
    resultCount,
    previousResultCount,
    locale,
}) => {
    if (!isExpanded) {
        return '';
    }

    if (!resultCount) {
        return getNoResultA11yStatus(locale);
    }

    if (resultCount !== previousResultCount) {
        return getResultCountChangedA11yStatus(locale, resultCount);
    }

    return '';
};

export const useSetAllyMessageItemSelection = ({
    isInitialMount,
    selectedItem,
    prevSelectedItem,
    searchAttributes,
    locale,
    resultCount,
    previousResultCount,
    isExpanded,
}) => {
    useEffect(() => {
        if (isInitialMount) {
            return;
        }

        if (
            selectedItem?.[searchAttributes[0]] !==
            prevSelectedItem?.[searchAttributes[0]]
        ) {
            updateA11yStatus(() => {
                return getItemSelectedMessage({
                    selectedItem,
                    searchAttributes,
                    isExpanded,
                    locale,
                });
            });
        } else {
            updateA11yStatus(() => {
                return getStateChangeMessage({
                    isExpanded,
                    resultCount,
                    previousResultCount,
                    locale,
                });
            });
        }
    }, [
        selectedItem,
        prevSelectedItem,
        searchAttributes,
        isInitialMount,
        locale,
        isExpanded,
        resultCount,
        previousResultCount,
    ]);
};
