function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

export default (function (columns, data, sortBy, descending) {
  var sortedData = _toConsumableArray(data);

  var compare = function compare(data1, data2) {
    if (!isNaN(data1[sortBy])) {
      return data1[sortBy] - data2[sortBy];
    }

    if (!data1[sortBy]) {
      return data2[sortBy] ? 1 : 0;
    }

    return data1[sortBy].localeCompare(data2[sortBy]);
  };

  var column = columns.find(function (col) {
    return col.key === sortBy;
  });
  var customCompare = column && typeof column.compare === 'function' ? column.compare : null;

  if (customCompare) {
    compare = function compare(data1, data2) {
      return customCompare(data1[sortBy], data2[sortBy]);
    };
  }

  sortedData.sort(compare);

  if (descending) {
    sortedData.reverse();
  }

  return sortedData;
});