const nb = {
    show: 'Vis',
    rows: 'rader',
    showRows: 'Vis rader',
    rowsPerPage: 'rader per side',
    showing: (start: string, end: string, total: string) =>
        `Viser ${start}-${end} av ${total} rader`,
    previous: 'Forrige',
    next: 'Neste',
    paginationNavigation: 'Paginering',
    goToPage: (page: string) => `Gå til side ${page}`,
    currentPage: (page: string) => `Gjeldende side, side ${page}`,
    page: 'side',
} as const;
const nn = {
    show: 'Vis',
    rows: 'rader',
    showRows: 'Vis rader',
    rowsPerPage: 'rader per side',
    showing: (start: string, end: string, total: string) =>
        `Viser ${start}-${end} av ${total} rader`,
    previous: 'Forrige',
    next: 'Neste',
    paginationNavigation: 'Paginering',
    goToPage: (page: string) => `Gå til side ${page}`,
    currentPage: (page: string) => `Gjeldande side, side ${page}`,
    page: 'side',
} as const;
const en = {
    show: 'Show',
    rows: 'rows',
    showRows: 'Show rows',
    rowsPerPage: 'rows per page',
    showing: (start: string, end: string, total: string) =>
        `Showing ${start}-${end} of ${total} rows`,
    previous: 'Previous',
    next: 'Next',
    paginationNavigation: 'Pagination navigation',
    goToPage: (page: string) => `Go to page ${page}`,
    currentPage: (page: string) => `Current page, Page ${page}`,
    page: 'page',
} as const;

export const txt = { nb, nn, en };
