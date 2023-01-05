import { locales } from './translations';
import {
    arrayOf,
    bool,
    func,
    number,
    object,
    oneOf,
    oneOfType,
    shape,
    string,
    element,
} from 'prop-types';

export const propTypes = {
    /** Id of drop down */
    id: string.isRequired,

    /** Id of element that labels input field */
    labelledById: string,

    /** Extra class */
    className: string,

    /** List of objects to be displayed in dropdown */
    dropdownList: arrayOf(object).isRequired,

    /** The selected item to be displayed in the input field. If not specified, uses internal state to decide. */
    selectedItem: object,

    /** Array of attributes to be displayed in list */
    dropdownAttributes: arrayOf(string).isRequired,

    /** Array of attributes used when filtering search */
    searchAttributes: arrayOf(string).isRequired,

    /** Props used on input field */
    inputProps: shape({
        onFocus: func,
    }),

    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements: number,

    /** Called when a value is selected */
    onChange: func,

    /** Custom element to use for each item in dropDownList */
    listElementBody: func,

    /** Message and a dropdownList to use when no match */
    noMatch: shape({
        text: string,
        dropdownList: arrayOf(object),
    }),

    /** Locale to use for translations */
    locale: oneOf(Object.values(locales)),

    /** aria-invalid attribute  */
    ariaInvalid: oneOfType([string, bool]),

    /** Function used to format the input field value */
    formatter: func,

    /**
     * Function used to decide if an item matches the input field value
     * (inputValue: string, searchAttributes: string[]) => (item) => boolean
     */
    searchMatcher: func,

    /**
     * For situations where the dropdownList prop will be updated at a later point in time.
     * That is, if the consumer first sends down an initial value before sending down data
     * that has loaded.
     */
    isLoading: bool,

    /** Function used when dropdown opens */
    onOpen: func,

    /**  Function used when dropdown closes */
    onClose: func,

    /**  For internal usage */
    results: element,
};
