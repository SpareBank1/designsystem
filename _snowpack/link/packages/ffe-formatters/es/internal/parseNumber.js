export default function parseNumber(number) {
  if (!number || typeof number === 'number') {
    return number;
  }

  var parsed = number;

  if (typeof number === 'string') {
    parsed = parseFloat(number.replace(/[^\d,.-]/g, '').replace(/,/g, '.'));
  }

  if (Number.isNaN(parsed) || typeof parsed !== 'number') {
    return null;
  }

  return parsed;
}