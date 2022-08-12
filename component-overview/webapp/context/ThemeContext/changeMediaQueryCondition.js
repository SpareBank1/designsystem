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
                        [rule.conditionText, rule.media.mediaText]
                            .join(' ')
                            .includes(fromCondition),
                )
                .forEach(rule => {
                    /* eslint-disable-next-line no-param-reassign */
                    rule.media.mediaText = rule.media.mediaText.replaceAll(
                        fromCondition,
                        toCondition,
                    );
                });
        } catch (err) {
            // never mind
        }
    });

export const turnOnDarkMode = changeMediaQueryCondition(
    '(prefers-color-scheme: dark)',
    '(prefers-color-scheme: light)',
);

export const turnOffDarkMode = changeMediaQueryCondition(
    '(prefers-color-scheme: light)',
    '(prefers-color-scheme: dark)',
);
