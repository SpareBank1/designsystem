const nb = 'nb';
const nn = 'nn';
const en = 'en';

export const locales = { nb, nn, en };

export const getButtonLabel = locale => {
    switch (locale) {
        case nn:
            return 'tøm feltet';
        case en:
            return 'clear the field';
        default:
            return 'tøm feltet';
    }
};
