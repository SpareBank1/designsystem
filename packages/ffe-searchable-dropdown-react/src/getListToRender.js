const filterDropdownList = (dropdownList, searchAttributes, inputValue) => {
    const inputValueLowerCase = inputValue.toLowerCase();
    return dropdownList.filter(item =>
        searchAttributes
            .map(searchAttribute => item[searchAttribute].toLowerCase())
            .some(itemAttribute => itemAttribute.includes(inputValueLowerCase)),
    );
};

export const getListToRender = ({
    inputValue,
    searchAttributes,
    maxRenderedDropdownElements,
    dropdownList,
    noMatchDropdownList,
}) => {
    const trimmedInput = inputValue ? inputValue.trim() : '';

    const shouldFilter = trimmedInput.length > 0;

    const dropdownListFiltered = shouldFilter
        ? filterDropdownList(
              dropdownList,
              searchAttributes,
              trimmedInput,
          ).slice(0, maxRenderedDropdownElements)
        : dropdownList.slice(0, maxRenderedDropdownElements);

    return {
        listToRender: dropdownListFiltered.length
            ? dropdownListFiltered
            : noMatchDropdownList || [],
        noMatch: !dropdownListFiltered.length,
    };
};
