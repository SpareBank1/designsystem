var nb = 'nb';
var nn = 'nn';
var en = 'en';
export var locales = {
  nb: nb,
  nn: nn,
  en: en
};
export var getButtonLabelClear = function getButtonLabelClear(locale) {
  switch (locale) {
    case nn:
      return 'fjern valgt';

    case en:
      return 'clear the field';

    default:
      return 'fjern valgt';
  }
};
export var getButtonLabelClose = function getButtonLabelClose(locale) {
  switch (locale) {
    case nn:
      return 'lukk alternativer';

    case en:
      return 'close alternatives';

    default:
      return 'lukk alternativer';
  }
};
export var getButtonLabelOpen = function getButtonLabelOpen(locale) {
  switch (locale) {
    case nn:
      return 'åpne alternativer';

    case en:
      return 'open alternatives';

    default:
      return 'åpne alternativer';
  }
};
export var getNotMatchText = function getNotMatchText(locale) {
  switch (locale) {
    case nn:
      return 'Søket gav ingen treff';

    case en:
      return 'The search gave no result';

    default:
      return 'Søket ga ingen treff';
  }
};
export var getItemClearedA11yStatus = function getItemClearedA11yStatus(locale) {
  switch (locale) {
    case nn:
      return "Valt element har vorte fjerna.";

    case en:
      return "Selected item has been removed.";

    default:
      return "Valgt element har blitt fjernet.";
  }
};
export var getItemSelectedA11yStatus = function getItemSelectedA11yStatus(locale, item) {
  switch (locale) {
    case nn:
      return "Element ".concat(item, " er valgt.");

    case en:
      return "Item ".concat(item, " has been selected.");

    default:
      return "Element ".concat(item, " er valgt.");
  }
};
export var getNoResultA11yStatus = function getNoResultA11yStatus(locale) {
  switch (locale) {
    case nn:
      return 'Ingen resultat er tilgjengelege.';

    case en:
      return 'No results are available.';

    default:
      return 'Ingen resultater er tilgjengelige.';
  }
};
export var getResultCountChangedA11yStatus = function getResultCountChangedA11yStatus(locale, nrOfItems) {
  switch (locale) {
    case nn:
      return "".concat(nrOfItems, " resultat er tilgjengeleg, bruk opp- og nedpiltastene for \xE5 navigera. Trykk Enter for \xE5 velja.");

    case en:
      return "".concat(nrOfItems, " result").concat(nrOfItems === 1 ? ' is' : 's are', " available, use up and down arrow keys to navigate. Press Enter key to select.");

    default:
      return "".concat(nrOfItems, " resultat").concat(nrOfItems === 1 ? '' : 'er', " er tilgjengelig, bruk opp- og nedpiltastene for \xE5 navigere. Trykk Enter for \xE5 velge.");
  }
};
export var getIsLoadingItemsA11yStatus = function getIsLoadingItemsA11yStatus(locale) {
  switch (locale) {
    case nn:
      return 'Lastar inn alternativ.';

    case en:
      return 'Loading options.';

    default:
      return 'Laster inn alternativer.';
  }
};