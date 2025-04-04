import { act, screen } from '@testing-library/react';

async function simulateTyping(element: HTMLElement, text: string, delay = 100) {
    let _text = text;
    if (text.length === 0) {
        _text = '0';
    }
    return new Promise<void>(resolve => {
        let index = 0;

        function typeCharacter() {
            if (index < _text.length) {
                const char = _text[index];
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
    element: HTMLElement;
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
        .filter(
            element => element !== null && element !== undefined,
        ) as HTMLElement[];

    function getValue(element: Element): string | null {
        const [dayElement, monthElement, yearElement] = Array.from(
            element.querySelectorAll('[role="spinbutton"]'),
        );

        const day = dayElement.getAttribute('aria-valuenow') || '';
        const month = monthElement.getAttribute('aria-valuenow') || '';
        const year = yearElement.getAttribute('aria-valuenow') || '';
        return year !== '' &&
            year !== '0' &&
            month !== '' &&
            month !== '0' &&
            day !== '' &&
            day !== '0'
            ? `${leftPad(day)}.${leftPad(month)}.${year}`
            : null;
    }

    async function setValue(element: HTMLElement, value: string) {
        const [dayElement, monthElement, yearElement] = Array.from(
            element.querySelectorAll('[role="spinbutton"]'),
        ) as HTMLElement[];
        // eslint-disable-next-line prefer-const
        let [dayValue, monthValue, yearValue] = value
            ? value.split('.')
            : ['0', '0', '0'];
        dayValue = dayValue.length === 1 ? `0${dayValue}` : dayValue;
        monthValue = monthValue.length === 1 ? `0${monthValue}` : monthValue;

        await simulateTyping(dayElement, dayValue);
        await simulateTyping(monthElement, monthValue);
        await simulateTyping(yearElement, yearValue);
        act(() => yearElement.blur());
    }

    return {
        element: elements[index],
        getValue: () => getValue(elements[index]),
        setValue: (value: string) => setValue(elements[index], value),
    };
}
