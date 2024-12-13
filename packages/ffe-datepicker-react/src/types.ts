type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const isMonth = (thing: any): thing is Month => {
    return typeof thing === 'number' && thing >= 1 && thing <= 12;
};
