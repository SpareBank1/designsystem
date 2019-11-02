export default (value, dropdownList, dropdownAttributes) => {
    const [searchAttribute] = dropdownAttributes;
    return dropdownList.find(item => item[searchAttribute] === value) || null;
};
