/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { useState, useEffect } from 'react';

const storageKey = 'sb1ds.prefered-color-scheme';
const getStoredPreference = () => localStorage.getItem(storageKey);
const storePreference = pref => localStorage.setItem(storageKey, pref);

const probeMediaQueryPreference = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

const getInitialState = () => {
    if (typeof window === 'undefined') {
        // Must be server side rendering, so localStorage and window.matchMedia
        // are not available and it is better to bail out with a sensible
        // default of `false`.
        return false;
    }

    let pref = getStoredPreference();

    if (!pref) {
        pref = probeMediaQueryPreference() ? 'dark' : 'light';
        storePreference(pref);
    }

    return pref === 'dark';
};

const changeMediaQueryCondition = (fromCondition, toCondition) => () =>
    Array.from(document.styleSheets).forEach(styleSheet => {
        try {
            // Some browser addons inject css into the document.
            // Programmatically accessing rules from any of these style sheets
            // cause a security exception. Therefor a surrounding try-catch.

            Array.from(styleSheet.cssRules || styleSheet.rules)
                .filter(
                    rule =>
                        rule.media &&
                        [rule.conditionText, rule.media.mediaText].includes(
                            fromCondition,
                        ),
                )
                .forEach(rule => (rule.media.mediaText = toCondition));
        } catch (err) {
            // never mind
        }
    });
const turnOnDarkMode = changeMediaQueryCondition(
    '(prefers-color-scheme: dark)',
    'only screen',
);
const turnOffDarkMode = changeMediaQueryCondition(
    'only screen',
    '(prefers-color-scheme: dark)',
);

export default () => {
    const [state, setState] = useState(getInitialState);

    const toggleDarkMode = () => setState(prevState => setState(!prevState));

    useEffect(() => {
        // Fun fact: useEffect is not triggered by SSR.

        if (state) {
            turnOnDarkMode();
            storePreference('dark');
        } else {
            turnOffDarkMode();
            storePreference('light');
        }
    }, [state]);

    return {
        prefersDarkMode: state,
        toggleDarkMode,
    };
};
