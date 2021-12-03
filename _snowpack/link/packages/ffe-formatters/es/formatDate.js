var ensureTwoDigits = function ensureTwoDigits(d) {
  return "00".concat(d).slice(-2);
};

export default function formatDate(timestamp) {
  if (!(Number.isInteger(timestamp) || timestamp instanceof Date)) {
    return null;
  }

  var date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  var dd = ensureTwoDigits(date.getDate());
  var mm = ensureTwoDigits(date.getMonth() + 1);
  var yyyy = date.getFullYear();
  return "".concat(dd, ".").concat(mm, ".").concat(yyyy);
}