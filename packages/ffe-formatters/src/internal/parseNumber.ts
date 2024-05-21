export const parseNumber = (number: number | string | null | undefined) => {
    if (!number || typeof number === 'number') {
        return number;
    }

    const parsed = parseFloat(
        number.replace(/[^\d,.-]/g, '').replace(/,/g, '.'),
    );
    if (Number.isNaN(parsed)) {
        return null;
    }

    return parsed;
};
