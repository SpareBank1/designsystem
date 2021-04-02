const nb = 'nb';
const nn = 'nn';
const en = 'en';

export const locales = { nb, nn, en };

export const getButtonLabelClear = locale => {
    switch (locale) {
        case nn:
            return 'fjern valgt';
        case en:
            return 'clear the field';
        default:
            return 'fjern valgt';
    }
};

export const getButtonLabelClose = locale => {
    switch (locale) {
        case nn:
            return 'lukk alternativer';
        case en:
            return 'close alternatives';
        default:
            return 'lukk alternativer';
    }
};

export const getButtonLabelOpen = locale => {
    switch (locale) {
        case nn:
            return 'åpne alternativer';
        case en:
            return 'open alternatives';
        default:
            return 'åpne alternativer';
    }
};

export const getNotMatchText = locale => {
    switch (locale) {
        case nn:
            return 'Søket gav ingen treff';
        case en:
            return 'The search gave no result';
        default:
            return 'Søket ga ingen treff';
    }
};

export const getItemClearedA11yStatus = locale => {
    switch (locale) {
        case nn:
            return `Valt element har vorte fjerna.`;
        case en:
            return `Selected item has been removed.`;
        default:
            return `Valgt element har blitt fjernet.`;
    }
};

export const getItemSelectedA11yStatus = (locale, item) => {
    switch (locale) {
        case nn:
            return `Element ${item} er valgt.`;
        case en:
            return `Item ${item} has been selected.`;
        default:
            return `Element ${item} er valgt.`;
    }
};

export const getNoResultA11yStatus = locale => {
    switch (locale) {
        case nn:
            return 'Ingen resultat er tilgjengelege.';
        case en:
            return 'No results are available.';
        default:
            return 'Ingen resultater er tilgjengelige.';
    }
};

export const getResultCountChangedA11yStatus = (locale, nrOfItems) => {
    switch (locale) {
        case nn:
            return `${nrOfItems} resultat er tilgjengeleg, bruk opp- og nedpiltastene for å navigera. Trykk Enter for å velja.`;
        case en:
            return `${nrOfItems} result${
                nrOfItems === 1 ? ' is' : 's are'
            } available, use up and down arrow keys to navigate. Press Enter key to select.`;
        default:
            return `${nrOfItems} resultat${
                nrOfItems === 1 ? '' : 'er'
            } er tilgjengelig, bruk opp- og nedpiltastene for å navigere. Trykk Enter for å velge.`;
    }
};
