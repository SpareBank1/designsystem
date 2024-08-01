const nb = {
    rowsPerPageLabel: ['Vis', 'rader per side'],
    showing: (start: number, end: number, total: number) =>
        `Viser ${start}-${end} av ${total} rader`,
    previous: 'Forrige',
    next: 'Neste',
    goToPage: (page: string) => `Gå til side ${page}`,
    currentPage: (page: string) => `Gjeldende side, side ${page}`,
    page: 'side',
} as const;
const nn = {
    rowsPerPageLabel: ['Vis', 'rader per side'],
    showing: (start: number, end: number, total: number) =>
        `Viser ${start}-${end} av ${total} rader`,
    previous: 'Forrige',
    next: 'Neste',
    goToPage: (page: string) => `Gå til side ${page}`,
    currentPage: (page: string) => `Gjeldande side, side ${page}`,
    page: 'side',
} as const;
const en = {
    rowsPerPageLabel: ['Show', 'rows per page'],

    showing: (start: number, end: number, total: number) =>
        `Showing ${start}-${end} of ${total} rows`,
    previous: 'Previous',
    next: 'Next',
    goToPage: (page: string) => `Go to page ${page}`,
    currentPage: (page: string) => `Current page, Page ${page}`,
    page: 'page',
} as const;

export const txt = { nb, nn, en };
