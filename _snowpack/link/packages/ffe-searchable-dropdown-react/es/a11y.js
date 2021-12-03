import { useEffect, useRef } from '../../../../pkg/react.js';
import { getIsLoadingItemsA11yStatus, getItemClearedA11yStatus, getItemSelectedA11yStatus, getNoResultA11yStatus, getResultCountChangedA11yStatus } from './translations.js';

var debounce = function debounce(fn, time) {
  var timeoutId;

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }

  wrapper.cancel = cancel;
  return wrapper;
};

var getStatusDiv = function getStatusDiv() {
  var id = 'a11y-status-message';
  var statusDiv = window.document.getElementById(id);

  if (statusDiv) {
    return statusDiv;
  }

  statusDiv = window.document.createElement('div');
  statusDiv.setAttribute('id', id);
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'polite');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  window.document.body.appendChild(statusDiv);
  return statusDiv;
};

var cleanupStatus = debounce(function () {
  getStatusDiv().textContent = '';
}, 500);

var setStatus = function setStatus(status) {
  var div = getStatusDiv();

  if (!status) {
    return;
  }

  div.textContent = status;
  cleanupStatus();
};

var updateA11yStatus = debounce(function (getA11yMessage) {
  setStatus(getA11yMessage());
}, 200);

var getItemSelectedMessage = function getItemSelectedMessage(_ref) {
  var selectedItem = _ref.selectedItem,
      searchAttributes = _ref.searchAttributes,
      locale = _ref.locale;

  if (!selectedItem) {
    return getItemClearedA11yStatus(locale);
  }

  return getItemSelectedA11yStatus(locale, selectedItem[searchAttributes[0]]);
};

var getStateChangeMessage = function getStateChangeMessage(_ref2) {
  var isExpanded = _ref2.isExpanded,
      resultCount = _ref2.resultCount,
      previousResultCount = _ref2.previousResultCount,
      locale = _ref2.locale;

  if (!isExpanded) {
    return '';
  }

  if (!resultCount) {
    return getNoResultA11yStatus(locale);
  }

  if (resultCount !== previousResultCount) {
    return getResultCountChangedA11yStatus(locale, resultCount);
  }

  return '';
};

var getIsLoadingItemsMessage = function getIsLoadingItemsMessage(locale) {
  return getIsLoadingItemsA11yStatus(locale);
};

export var useSetAllyMessageItemSelection = function useSetAllyMessageItemSelection(_ref3) {
  var isInitialMount = _ref3.isInitialMount,
      selectedItem = _ref3.selectedItem,
      prevSelectedItem = _ref3.prevSelectedItem,
      searchAttributes = _ref3.searchAttributes,
      locale = _ref3.locale,
      resultCount = _ref3.resultCount,
      previousResultCount = _ref3.previousResultCount,
      isExpanded = _ref3.isExpanded,
      isLoading = _ref3.isLoading,
      hasFocus = _ref3.hasFocus;
  var selectedItemRef = useRef(null);
  var prevSelectedItemRef = useRef(null);
  useEffect(function () {
    if (isLoading && hasFocus) {
      updateA11yStatus(function () {
        return getIsLoadingItemsMessage(locale);
      });
      return;
    }

    if (isInitialMount) {
      return;
    }

    var selectedItemValue = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem[searchAttributes[0]];
    var prevSelectedItemValue = prevSelectedItem === null || prevSelectedItem === void 0 ? void 0 : prevSelectedItem[searchAttributes[0]];
    var selectedItemHasChanged = selectedItemRef.current !== selectedItemValue && prevSelectedItemRef.current !== prevSelectedItemValue;

    if (selectedItemValue !== prevSelectedItemValue && selectedItemHasChanged) {
      selectedItemRef.current = selectedItemValue;
      prevSelectedItemRef.current = prevSelectedItemValue;
      updateA11yStatus(function () {
        return getItemSelectedMessage({
          selectedItem: selectedItem,
          searchAttributes: searchAttributes,
          isExpanded: isExpanded,
          locale: locale
        });
      });
    } else {
      updateA11yStatus(function () {
        return getStateChangeMessage({
          isExpanded: isExpanded,
          resultCount: resultCount,
          previousResultCount: previousResultCount,
          locale: locale
        });
      });
    }
  }, [selectedItem, prevSelectedItem, searchAttributes, isInitialMount, locale, isExpanded, resultCount, previousResultCount, hasFocus, isLoading]);
};