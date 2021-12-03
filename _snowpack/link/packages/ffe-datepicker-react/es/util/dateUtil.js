var dateRegex = /^(\d{1,2})(\.| |-|\/)?(\d{0,2})\2?(\d{0,2}(\d{2})?)$/;
export function validateDate(string) {
  return dateRegex.exec(string);
}