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
            return 'lukk meny';
        case en:
            return 'close menu';
        default:
            return 'lukk meny';
    }
};

export const getButtonLabelOpen = locale => {
    switch (locale) {
        case nn:
            return 'åpne meny';
        case en:
            return 'open menu';
        default:
            return 'åpne meny';
    }
};
