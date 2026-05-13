import { act } from 'react';

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
     * @returns string in the format 'dd.mm.yyyy' or empty string if the datepicker is empty
     */
    getValue: () => string;
    /**
     * Function to set the value of the datepicker
     *
     * @param value string in the format 'dd.mm.yyyy'
     * @returns void
     */
    setValue: (value: string) => Promise<void>;
};

function findDatepickerElement(
    label: string,
    index: number,
): HTMLElement | undefined {
    const labelElements = Array.from(
        document.querySelectorAll<HTMLLabelElement>('label'),
    ).filter(el => el.textContent?.trim() === label);

    const elements = labelElements
        .map(el => {
            const forAttr = el.htmlFor;
            if (forAttr) {
                const labeled = document.getElementById(forAttr);
                if (labeled) {
                    if (labeled.classList.contains('ffe-datepicker')) {
                        return labeled;
                    }
                    return labeled.querySelector<HTMLElement>('.ffe-datepicker');
                }
            }
            return (
                el.parentElement?.querySelector<HTMLElement>(
                    '.ffe-datepicker',
                ) ??
                el.parentElement?.parentElement?.querySelector<HTMLElement>(
                    '.ffe-datepicker',
                ) ??
                null
            );
        })
        .filter((el): el is HTMLElement => el !== null && el !== undefined);

    return elements[index];
}

/**
 * Get a datepicker with helper functions by label
 *
 * @param label label of the datepicker element you want to get
 * @param index if there are multiple datepicker elements with the same label, you can specify which one you want to get
 * @param timeout how long to wait for the element to appear (ms), default 3000
 * @returns DatepickerTestHelper
 */
export async function getDatepickerByLabelText(
    label: string,
    index = 0,
    timeout = 3000,
): Promise<DatepickerTestHelper> {
    const deadline = Date.now() + timeout;
    let datepickerElement: HTMLElement | undefined;

    while (true) {
        datepickerElement = findDatepickerElement(label, index);
        if (datepickerElement) break;
        if (Date.now() >= deadline) {
            throw new Error(
                `getDatepickerByLabelText: datepicker with label "${label}" (index ${index}) not found within ${timeout}ms`,
            );
        }
        await new Promise<void>(resolve => setTimeout(resolve, 50));
    }

    const element = datepickerElement;

    function getValue(element: Element): string {
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
            : '';
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
        element,
        getValue: () => getValue(element),
        setValue: (value: string) => setValue(element, value),
    };
}
