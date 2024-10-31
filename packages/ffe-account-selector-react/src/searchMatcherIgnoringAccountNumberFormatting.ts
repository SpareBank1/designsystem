import { Account } from './types';

/**
 * This matcher function closely resembles the default one of SearchableDropdown,
 * but it ignores all spaces and periods so that account number formatting won't mess with the search.
 */
export const searchMatcherIgnoringAccountNumberFormatting =
    <T extends Account>(searchString: string, searchAttributes: (keyof T)[]) =>
    (item: T) => {
        const cleanString = (value: unknown) =>
            `${value}`
                .replace(/(\s|\.)/g, '') // Remove all spaces and periods
                .toLowerCase();
        const cleanedSearchString = cleanString(searchString);
        return searchAttributes.some(searchAttribute =>
            cleanString(item[searchAttribute as keyof T]).includes(
                cleanedSearchString,
            ),
        );
    };
