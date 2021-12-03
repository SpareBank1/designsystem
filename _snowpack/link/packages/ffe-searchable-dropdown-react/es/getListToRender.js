var toLowerCase = function toLowerCase(value) {
  return "".concat(value).toLowerCase();
};

var filterDropdownList = function filterDropdownList(dropdownList, searchAttributes, inputValue, searchMatcher) {
  var filter = searchMatcher ? searchMatcher(inputValue, searchAttributes) : function (item) {
    return searchAttributes.map(function (searchAttribute) {
      return toLowerCase(item[searchAttribute]);
    }).some(function (cleanItemAttribute) {
      return cleanItemAttribute.includes(toLowerCase(inputValue));
    });
  };
  return dropdownList.filter(filter);
};

export var getListToRender = function getListToRender(_ref) {
  var inputValue = _ref.inputValue,
      searchAttributes = _ref.searchAttributes,
      maxRenderedDropdownElements = _ref.maxRenderedDropdownElements,
      dropdownList = _ref.dropdownList,
      noMatchDropdownList = _ref.noMatchDropdownList,
      searchMatcher = _ref.searchMatcher,
      showAllItemsInDropdown = _ref.showAllItemsInDropdown;
  var trimmedInput = inputValue ? inputValue.trim() : '';
  var shouldFilter = trimmedInput.length > 0;
  var dropdownListFiltered = shouldFilter ? filterDropdownList(dropdownList, searchAttributes, trimmedInput, searchMatcher).slice(0, maxRenderedDropdownElements) : dropdownList.slice(0, maxRenderedDropdownElements);

  var listToRender = function listToRender() {
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
    noMatch: !dropdownListFiltered.length
  };
};