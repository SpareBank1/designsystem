export const toNumber = (numbers: (number | undefined)[]) => {
    const validNumbers = numbers.filter(it => typeof it === 'number');
    return validNumbers
        .map(
            (it, index) =>
                (it ?? 1) * Math.pow(10, validNumbers.length - index - 1),
        )
        .reduce((acc, curr) => acc + curr, 0);
};
