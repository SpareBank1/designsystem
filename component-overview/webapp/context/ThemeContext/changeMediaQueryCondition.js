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
                .forEach(rule => {
                    /* eslint-disable-next-line no-param-reassign */
                    rule.media.mediaText = toCondition;
                });
        } catch (err) {
            // never mind
        }
    });

export const turnOnDarkMode = changeMediaQueryCondition(
    '(prefers-color-scheme: dark)',
    'only screen',
);

export const turnOffDarkMode = changeMediaQueryCondition(
    'only screen',
    '(prefers-color-scheme: dark)',
);
