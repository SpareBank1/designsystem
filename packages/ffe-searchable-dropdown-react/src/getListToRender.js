const toLowerCase = value => `${value}`.toLowerCase();

const filterDropdownList = (
    dropdownList,
    searchAttributes,
    inputValue,
    searchMatcher,
) => {
    const filter = searchMatcher
        ? searchMatcher(inputValue, searchAttributes)
        : item =>
              searchAttributes
                  .map(searchAttribute => toLowerCase(item[searchAttribute]))
                  .some(cleanItemAttribute =>
                      cleanItemAttribute.includes(toLowerCase(inputValue)),
                  );
    return dropdownList.filter(filter);
};

export const getListToRender = ({
    inputValue,
    searchAttributes,
    maxRenderedDropdownElements,
    dropdownList,
    noMatchDropdownList,
    searchMatcher,
    showAllItemsInDropdown,
}) => {
    const trimmedInput = inputValue ? inputValue.trim() : '';

    const shouldFilter = trimmedInput.length > 0;

    const dropdownListFiltered = shouldFilter
        ? filterDropdownList(
              dropdownList,
              searchAttributes,
              trimmedInput,
              searchMatcher,
          ).slice(0, maxRenderedDropdownElements)
        : dropdownList.slice(0, maxRenderedDropdownElements);

    const listToRender = () => {
        if (showAllItemsInDropdown) {
            return dropdownList;
        } else if (dropdownListFiltered.length) {
            return dropdownListFiltered;
        } else if (noMatchDropdownList) {
            return noMatchDropdownList;
        }
        return [];
    };

    return {
        listToRender: listToRender(),
        noMatch: !dropdownListFiltered.length,
    };
};
