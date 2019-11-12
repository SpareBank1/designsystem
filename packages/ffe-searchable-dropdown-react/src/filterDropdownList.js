export default (dropdownList, searchAttributes, inputValue) => {
    const inputValueLowerCase = inputValue.toLowerCase();
    return dropdownList.filter(item =>
        searchAttributes
            .map(searchAttribute => item[searchAttribute].toLowerCase())
            .some(itemAttribute => itemAttribute.includes(inputValueLowerCase)),
    );
};
