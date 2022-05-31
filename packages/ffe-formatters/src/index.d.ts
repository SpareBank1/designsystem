declare module '@sb1/ffe-formatters' {
    export function formatAccountNumber(accountNumber: string): string;

    export function formatCurrency(
        amount: number | string,
        opts?: { prefix?: string; postfix?: string },
    ): string;

    export function formatDate(timestamp: number | Date): string;

    export function formatDistance(
        distance: number | string,
        opts?: { unit?: string },
    ): string;

    export function formatNumber(
        number: number | string,
        opts?: {
            decimals?: number;
            thousandSeparator?: string;
            decimalMark?: string;
        },
    ): string;

    export function formatPercentage(
        amount: number,
        opts?: { minDecimals?: number; maxDecimals?: number },
    ): string;

    export function formatFodselsnummer(ssn: string): string;
}
