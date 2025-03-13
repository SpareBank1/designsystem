import { act, screen } from '@testing-library/react';

async function simulateTyping(element: Element, text: string, delay = 100) {
    return new Promise<void>(resolve => {
        let index = 0;

        function typeCharacter() {
            if (index < text.length) {
                const char = text[index];
                const eventOptions = {
                    key: char,
                    keyCode: char.charCodeAt(0),
                    which: char.charCodeAt(0),
                    bubbles: true,
                };
                act(() => {
                    element.dispatchEvent(
                        new KeyboardEvent('keydown', eventOptions),
                    );
                });

                index++;
                setTimeout(typeCharacter, delay);
            } else {
                resolve(); // Resolve the promise when done
            }
        }

        typeCharacter();
    });
}

function leftPad(str: string, len = 2, ch = '0') {
    let newStr = str;
    while (newStr.length < len) {
        newStr = ch + newStr;
    }
    return newStr;
}

export type DatepickerTestHelper = {
    /**
     * The datepicker element
     */
    element: Element;
    /**
     * Function to get the value of the datepicker
     *
     * @returns string in the format 'dd.mm.yyyy' or null if the datepicker is empty
     */
    getValue: () => string | null;
    /**
     * Function to set the value of the datepicker
     *
     * @param value string in the format 'dd.mm.yyyy'
     * @returns void
     */
    setValue: (value: string) => Promise<void>;
};

/**
 * Get a datepicker with helper functions by label
 *
 * @param label label of the datepicker element you want to get
 * @param index if there are multiple datepicker elements with the same label, you can specify which one you want to get
 * @returns DatepickerTestHelper
 */
export function getDatepickerByLabelText(
    label: string,
    index = 0,
): DatepickerTestHelper {
    const elements = screen
        .getAllByText(label)
        .map(element => element.parentElement?.querySelector('.ffe-datepicker'))
        .filter(element => element !== null && element !== undefined);

    function getValue(element: Element): string | null {
        const [dayElement, monthElement, yearElement] = Array.from(
            element.querySelectorAll('[role="spinbutton"]'),
        );

        const day = dayElement.getAttribute('aria-valuenow') || '';
        const month = monthElement.getAttribute('aria-valuenow') || '';
        const year = yearElement.getAttribute('aria-valuenow') || '';
        return year !== '' && month !== '' && day !== ''
            ? `${leftPad(day)}.${leftPad(month)}.${year}`
            : null;
    }

    async function setValue(element: Element, value: string) {
        const [dayElement, monthElement, yearElement] = Array.from(
            element.querySelectorAll('[role="spinbutton"]'),
        );
        // eslint-disable-next-line prefer-const
        let [dayValue, monthValue, yearValue] = value.split('.');
        dayValue = dayValue.length === 1 ? `0${dayValue}` : dayValue;
        monthValue = monthValue.length === 1 ? `0${monthValue}` : monthValue;

        await simulateTyping(dayElement, dayValue);
        await simulateTyping(monthElement, monthValue);
        await simulateTyping(yearElement, yearValue);
    }

    return {
        element: elements[index],
        getValue: () => getValue(elements[index]),
        setValue: (value: string) => setValue(elements[index], value),
    };
}
