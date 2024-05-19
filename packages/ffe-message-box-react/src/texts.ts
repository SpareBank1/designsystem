const nb = {
    error: {
        ariaLabel: 'Feilmelding',
    },
    info: {
        ariaLabel: 'Infomelding',
    },
    success: {
        ariaLabel: 'Suksessmelding',
    },
    tip: {
        ariaLabel: 'Tipsmelding',
    },
} as const;
const nn = {
    error: {
        ariaLabel: 'Feilmelding',
    },
    info: {
        ariaLabel: 'Infomelding',
    },
    success: {
        ariaLabel: 'Suksessmelding',
    },
    tip: {
        ariaLabel: 'Tipsmelding',
    },
} as const;
const en = {
    error: {
        ariaLabel: 'Error message',
    },
    info: {
        ariaLabel: 'Info message',
    },
    success: {
        ariaLabel: 'Success message',
    },
    tip: {
        ariaLabel: 'Tip message',
    },
} as const;

export const texts = { nb, nn, en };
