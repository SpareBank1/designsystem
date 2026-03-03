import { getListToRender } from './getListToRender';

interface Item {
    name: string;
    value: string;
}

const items: Item[] = [
    { name: 'Apple', value: 'apple' },
    { name: 'Banana', value: 'banana' },
    { name: 'Cherry', value: 'cherry' },
];

const defaultParams = {
    inputValue: '',
    searchAttributes: ['name'] as Array<keyof Item>,
    maxRenderedDropdownElements: 10,
    dropdownList: items,
    noMatchDropdownList: undefined,
    showAllItemsInDropdown: false,
};

describe('getListToRender', () => {
    it('should return all items when input is empty', () => {
        const result = getListToRender(defaultParams);
        expect(result.listToRender).toEqual(items);
        expect(result.noMatch).toBe(false);
    });

    it('should filter items based on input value', () => {
        const result = getListToRender({
            ...defaultParams,
            inputValue: 'App',
        });
        expect(result.listToRender).toEqual([items[0]]);
        expect(result.noMatch).toBe(false);
    });

    it('should set noMatch to true when no items match', () => {
        const result = getListToRender({
            ...defaultParams,
            inputValue: 'xyz',
        });
        expect(result.listToRender).toEqual([]);
        expect(result.noMatch).toBe(true);
    });

    it('should return noMatchDropdownList when provided and no items match', () => {
        const noMatchItems = [{ name: 'No results', value: 'none' }];
        const result = getListToRender({
            ...defaultParams,
            inputValue: 'xyz',
            noMatchDropdownList: noMatchItems,
        });
        expect(result.listToRender).toEqual(noMatchItems);
        expect(result.noMatch).toBe(true);
    });

    it('should return all items when showAllItemsInDropdown is true', () => {
        const result = getListToRender({
            ...defaultParams,
            inputValue: 'xyz',
            showAllItemsInDropdown: true,
        });
        expect(result.listToRender).toEqual(items);
    });

    it('should set noMatch to false when showAllItemsInDropdown is true even if filter has no matches', () => {
        const result = getListToRender({
            ...defaultParams,
            inputValue: 'xyz',
            showAllItemsInDropdown: true,
        });
        expect(result.noMatch).toBe(false);
    });

    it('should respect maxRenderedDropdownElements', () => {
        const result = getListToRender({
            ...defaultParams,
            maxRenderedDropdownElements: 2,
        });
        expect(result.listToRender).toHaveLength(2);
    });

    it('should trim input value before filtering', () => {
        const result = getListToRender({
            ...defaultParams,
            inputValue: '  App  ',
        });
        expect(result.listToRender).toEqual([items[0]]);
    });

    it('should be case-insensitive when filtering', () => {
        const result = getListToRender({
            ...defaultParams,
            inputValue: 'apple',
        });
        expect(result.listToRender).toEqual([items[0]]);
    });

    it('should use custom searchMatcher when provided', () => {
        const searchMatcher = (inputValue: string) => (item: Item) =>
            item.value === inputValue;

        const result = getListToRender({
            ...defaultParams,
            inputValue: 'banana',
            searchMatcher,
        });
        expect(result.listToRender).toEqual([items[1]]);
    });
});
