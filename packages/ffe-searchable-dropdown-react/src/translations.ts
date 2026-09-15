import { Locale } from './types';

export const getSelectedLabel = (locale: Locale, amountSelected: number) => {
    switch (locale) {
        case 'nn':
            return `${amountSelected} valde`;
        case 'en':
            return `${amountSelected} selected`;
        default:
            return `${amountSelected} valgt`;
    }
};

/** Handlingsetiketten på chippen for ett valgt element. */
export const getRemoveSelectedLabel = (locale: Locale, item: string) => {
    switch (locale) {
        case 'nn':
            return `${item}, fjern val`;
        case 'en':
            return `${item}, remove`;
        default:
            return `${item}, fjern valg`;
    }
};

/**
 * Handlingsetiketten på chippen som oppsummerer utvalget. Bygget på
 * getSelectedLabel, så synlig tekst og aria-label ikke kan divergere.
 */
export const getRemoveAllSelectedLabel = (
    locale: Locale,
    amountSelected: number,
) => {
    const selected = getSelectedLabel(locale, amountSelected);
    switch (locale) {
        case 'en':
            return `${selected}, remove all`;
        default:
            return `${selected}, fjern alle`;
    }
};

export const getSelectAllLabel = (locale: Locale) => {
    switch (locale) {
        case 'nn':
            return 'Vel alle';
        case 'en':
            return 'Select all';
        default:
            return 'Velg alle';
    }
};

export const getRemoveAllLabel = (locale: Locale) => {
    switch (locale) {
        case 'nn':
            return 'Fjern alle';
        case 'en':
            return 'Remove all';
        default:
            return 'Fjern alle';
    }
};

export const getMultipleItemsChangedA11yStatus = (
    locale: Locale,
    countDelta: number,
    totalSelected: number,
) => {
    const amount = Math.abs(countDelta);
    if (countDelta > 0) {
        switch (locale) {
            case 'nn':
                return `${amount} element er valde. ${totalSelected} valde totalt.`;
            case 'en':
                return `${amount} items selected. ${totalSelected} selected in total.`;
            default:
                return `${amount} elementer er valgt. ${totalSelected} valgt totalt.`;
        }
    }
    switch (locale) {
        case 'nn':
            return `${amount} element er fjerna. ${totalSelected} valde totalt.`;
        case 'en':
            return `${amount} items removed. ${totalSelected} selected in total.`;
        default:
            return `${amount} elementer er fjernet. ${totalSelected} valgt totalt.`;
    }
};

export const getNotMatchText = (locale: Locale) => {
    switch (locale) {
        case 'nn':
            return 'Søket gav ingen treff';
        case 'en':
            return 'The search gave no result';
        default:
            return 'Søket ga ingen treff';
    }
};

export const getItemClearedA11yStatus = (locale: Locale) => {
    switch (locale) {
        case 'nn':
            return `Valt element har vorte fjerna.`;
        case 'en':
            return `Selected item has been removed.`;
        default:
            return `Valgt element har blitt fjernet.`;
    }
};

export const getItemSelectedA11yStatus = (locale: Locale, item: string) => {
    switch (locale) {
        case 'nn':
            return `Element ${item} er valt.`;
        case 'en':
            return `Item ${item} has been selected.`;
        default:
            return `Element ${item} er valgt.`;
    }
};

export const getNoResultA11yStatus = (locale: Locale) => {
    switch (locale) {
        case 'nn':
            return 'Ingen resultat er tilgjengelege.';
        case 'en':
            return 'No results are available.';
        default:
            return 'Ingen resultater er tilgjengelige.';
    }
};

export const getResultCountChangedA11yStatus = (
    locale: Locale,
    nrOfItems: number,
) => {
    switch (locale) {
        case 'nn':
            return `${nrOfItems} resultat er tilgjengeleg, bruk opp- og nedpiltastene for å navigera. Trykk Enter for å velja.`;
        case 'en':
            return `${nrOfItems} result${
                nrOfItems === 1 ? ' is' : 's are'
            } available, use up and down arrow keys to navigate. Press Enter key to select.`;
        default:
            return `${nrOfItems} resultat${
                nrOfItems === 1 ? '' : 'er'
            } er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.`;
    }
};

export const getIsLoadingItemsA11yStatus = (locale: Locale) => {
    switch (locale) {
        case 'nn':
            return 'Lastar inn alternativ.';
        case 'en':
            return 'Loading options.';
        default:
            return 'Laster inn alternativer.';
    }
};

export const getBalanceAriaLabel = (locale: Locale, balance: number) => {
    switch (locale) {
        case 'nn':
            return `Saldo: ${balance}`;
        case 'en':
            return `Balance: ${balance}`;
        default:
            return `Saldo: ${balance}`;
    }
};
