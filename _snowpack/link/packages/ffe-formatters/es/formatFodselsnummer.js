import { NON_BREAKING_SPACE } from './internal/unicode.js';
export default function formatFodselsnummer(ssn) {
  if (!ssn || ssn.length !== 11) {
    return ssn;
  }

  return "".concat(ssn.substring(0, 6)).concat(NON_BREAKING_SPACE).concat(ssn.substring(6, 11));
}