const nb = {
    rowsPerPageLabel: ['Vis', 'rader per side'],
    showing: (start: number, end: number, total: number) =>
        `Viser ${start}-${end} av ${total} rader`,
    previous: 'Forrige',
    next: 'Neste',
    goToPage: (page: number) => `Gå til side ${page}`,
    currentPage: (page: number) => `Gjeldende side, side ${page}`,
} as const;
const nn = {
    rowsPerPageLabel: ['Vis', 'rader per side'],
    showing: (start: number, end: number, total: number) =>
        `Viser ${start}-${end} av ${total} rader`,
    previous: 'Forrige',
    next: 'Neste',
    goToPage: (page: number) => `Gå til side ${page}`,
    currentPage: (page: number) => `Gjeldande side, side ${page}`,
} as const;
const en = {
    rowsPerPageLabel: ['Show', 'rows per page'],

    showing: (start: number, end: number, total: number) =>
        `Showing ${start}-${end} of ${total} rows`,
    previous: 'Previous',
    next: 'Next',
    goToPage: (page: number) => `Go to page ${page}`,
    currentPage: (page: number) => `Current page, Page ${page}`,
} as const;

export const txt = { nb, nn, en };
