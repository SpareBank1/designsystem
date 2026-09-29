import { useEffect, useRef } from 'react';
import {
    getIsLoadingItemsA11yStatus,
    getItemClearedA11yStatus,
    getItemSelectedA11yStatus,
    getMultipleItemsChangedA11yStatus,
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

/**
 * Alle meldinger deler én debounce, så den siste innom vinduet vinner. Uten
 * rangering taper handlingsmeldingen mot omgivelsesstøy: å fjerne en chip
 * flytter fokus til inputen, som åpner lista og planlegger «N resultater er
 * tilgjengelig» i samme vindu. Bekreftelsen brukeren trenger er den om det de
 * nettopp gjorde.
 */
const AMBIENT = 1;
const ACTION = 2;
let pendingPriority = 0;

const updateA11yStatus = debounce((getA11yMessage: () => string) => {
    pendingPriority = 0;
    setStatus(getA11yMessage());
}, 200);

const queueA11yStatus = (priority: number, getA11yMessage: () => string) => {
    if (priority < pendingPriority) {
        return;
    }
    pendingPriority = priority;
    updateA11yStatus(getA11yMessage);
};

const cancelA11yStatus = () => {
    pendingPriority = 0;
    updateA11yStatus.cancel();
    cleanupStatus.cancel();
};

const getItemSelectedMessage = ({
    selectedValue,
    locale,
}: {
    selectedValue: string | undefined;
    locale: Locale;
}) => {
    if (!selectedValue) {
        return getItemClearedA11yStatus(locale);
    }
    return getItemSelectedA11yStatus(locale, selectedValue);
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

export const useSetAllyMessageItemSelection = ({
    hasFocus,
    isExpanded,
    isLoading,
    locale,
    resultCount,
    selectedValue,
    selectedCount = 0,
}: {
    hasFocus: boolean;
    isExpanded: boolean;
    isLoading: boolean;
    locale: Locale;
    resultCount: number;
    selectedValue?: string;
    /** Number of selected items. Used to announce bulk changes as one message */
    selectedCount?: number;
}) => {
    const isInitialMount = useRef(true);
    const prevSelectedValue = useRef<string>();
    const prevSelectedCount = useRef(selectedCount);

    useEffect(() => {
        if (isLoading && hasFocus) {
            queueA11yStatus(AMBIENT, () => {
                return getIsLoadingItemsMessage(locale);
            });
            return;
        }

        if (isInitialMount.current) {
            isInitialMount.current = false;
            prevSelectedCount.current = selectedCount;
            return;
        }

        const countDelta = selectedCount - prevSelectedCount.current;
        prevSelectedCount.current = selectedCount;

        if (Math.abs(countDelta) > 1) {
            // Keep prevSelectedValue in sync so the item message below is not
            // also announced on the next render
            prevSelectedValue.current = selectedValue;
            queueA11yStatus(ACTION, () => {
                return getMultipleItemsChangedA11yStatus(
                    locale,
                    countDelta,
                    selectedCount,
                );
            });
            return;
        }

        const selectedItemHasChanged =
            selectedValue !== prevSelectedValue.current;
        if (selectedItemHasChanged) {
            prevSelectedValue.current = selectedValue;
            queueA11yStatus(ACTION, () => {
                return getItemSelectedMessage({ selectedValue, locale });
            });
        } else {
            queueA11yStatus(AMBIENT, () => {
                return getStateChangeMessage({
                    isExpanded,
                    resultCount,
                    locale,
                });
            });
        }
    }, [
        selectedValue,
        selectedCount,
        locale,
        isExpanded,
        resultCount,
        hasFocus,
        isLoading,
    ]);

    /* Debouncen er på modulnivå, så den må stoppes når komponenten forsvinner.
       Den hører ikke hjemme i effekten over: med sju dependencies ville den
       avbrutt en ventende melding hver gang et hvilket som helst felt i staten
       endret seg. */
    useEffect(() => cancelA11yStatus, []);
};

export const setAllyStatusMessage = (message: string) => {
    getStatusDiv().textContent = message;
};

export const setArrowAllyMessage = <Item extends Record<string, any>>(
    highlightedValue: Item,
    dropdownAttributes: (keyof Item)[],
) =>
    setAllyStatusMessage(
        dropdownAttributes.map(attr => highlightedValue[attr]).join(' '),
    );
