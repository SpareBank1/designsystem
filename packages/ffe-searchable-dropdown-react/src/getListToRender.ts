import { SearchMatcher } from './types.js';
const toLowerCase = (value: string) => `${value}`.toLowerCase();

const filterDropdownList = <Item extends Record<string, any>>(
    dropdownList: Item[],
    searchAttributes: Array<keyof Item>,
    inputValue: string,
    searchMatcher?: SearchMatcher<Item>,
) => {
    const filter = searchMatcher
        ? searchMatcher(inputValue, searchAttributes)
        : (item: Item) =>
              searchAttributes
                  .map(searchAttribute => toLowerCase(item[searchAttribute]))
                  .some(cleanItemAttribute =>
                      cleanItemAttribute.includes(toLowerCase(inputValue)),
                  );
    return dropdownList.filter(filter);
};

export const getListToRender = <Item extends Record<string, any>>({
    inputValue,
    searchAttributes,
    maxRenderedDropdownElements,
    dropdownList,
    noMatchDropdownList,
    searchMatcher,
    showAllItemsInDropdown,
}: {
    inputValue: string;
    searchAttributes: Array<keyof Item>;
    maxRenderedDropdownElements: number;
    dropdownList: Item[];
    noMatchDropdownList: Item[] | undefined;
    searchMatcher?: SearchMatcher<Item>;
    showAllItemsInDropdown: boolean;
}): { noMatch: boolean; listToRender: Item[] } => {
    const trimmedInput = inputValue ? String(inputValue).trim() : '';

    const shouldFilter = trimmedInput.length > 0;

    const dropdownListFiltered = shouldFilter
        ? filterDropdownList(
              dropdownList,
              searchAttributes,
              trimmedInput,
              searchMatcher,
          ).slice(0, maxRenderedDropdownElements)
        : dropdownList?.slice(0, maxRenderedDropdownElements);

    const listToRender = () => {
        if (showAllItemsInDropdown) {
            return dropdownList;
        } else if (dropdownListFiltered?.length) {
            return dropdownListFiltered;
        } else if (noMatchDropdownList) {
            return noMatchDropdownList;
        }
        return [];
    };

    return {
        listToRender: listToRender(),
        noMatch: !dropdownListFiltered?.length,
    };
};
