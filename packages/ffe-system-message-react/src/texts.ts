const nb = {
    close: 'Lukk',
    error: {
        ariaLabel: 'Feilmelding',
    },
    info: {
        ariaLabel: 'Infomelding',
    },
    success: {
        ariaLabel: 'Suksessmelding',
    },
    news: {
        ariaLabel: 'Nyhetsmelding',
    },
} as const;
const nn = {
    close: 'Lukk',
    error: {
        ariaLabel: 'Feilmelding',
    },
    info: {
        ariaLabel: 'Infomelding',
    },
    success: {
        ariaLabel: 'Suksessmelding',
    },
    news: {
        ariaLabel: 'Nyheitsmelding',
    },
} as const;
const en = {
    close: 'Close',
    error: {
        ariaLabel: 'Error message',
    },
    info: {
        ariaLabel: 'Info message',
    },
    success: {
        ariaLabel: 'Success message',
    },
    news: {
        ariaLabel: 'News message',
    },
} as const;

export const texts = { nb, nn, en };
