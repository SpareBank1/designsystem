/*eslint no-var:0,no-param-reassign:0,no-use-before-define:["error",{"functions":false}] */
(function() {
    return main();

    function main() {
        var button = document.querySelector('.darkmode-button');
        var checkbox = document.querySelector('.darkmode-button__switch');

        checkbox.checked = getInitialDarkModeChoice();
        if (checkbox.checked) {
            turnOnDarkMode();
        }

        button.addEventListener('click', function(event) {
            if (!isDarkModeSupported()) {
                // TODO: Shouldn't this be more like 'Sorry, cannot simulate dark mode with this browser'?
                event.preventDefault();
                alert('Sorry! Darkmode is not supported with this browser.');
            }

            function isDarkModeSupported() {
                return (
                    window.matchMedia('(prefers-color-scheme)').media !==
                    'not all'
                );
            }
        });

        button.addEventListener('keydown', function(event) {
            if (event.keyCode === 32 || event.keyCode === 13) {
                checkbox.click();
            }
        });

        checkbox.addEventListener('change', function(evt) {
            var checked = this.checked;

            animateCssTransition();
            if (checked) {
                turnOnDarkMode();
            } else {
                turnOffDarkMode();
            }
            storeDarkModeChoice(checked);
        });
    }

    function getInitialDarkModeChoice() {
        if (getStoredDarkModeChoice() === null) {
            storeDarkModeChoice(
                window.matchMedia('(prefers-color-scheme: dark)').matches,
            );
        }

        return getStoredDarkModeChoice();
    }

    function storeDarkModeChoice(choice) {
        localStorage.setItem('wantsDarkmode', choice);
    }

    function getStoredDarkModeChoice() {
        switch (localStorage.getItem('wantsDarkmode')) {
            case 'true':
                return true;
            case 'false':
                return false;
            default:
                // not set
                return null;
        }
    }

    function turnOnDarkMode() {
        swapMediaQueryConditionText(
            '(prefers-color-scheme: dark)',
            'only screen',
        );

        document.body.classList.add('native');
    }

    function turnOffDarkMode() {
        swapMediaQueryConditionText(
            'only screen',
            '(prefers-color-scheme: dark)',
        );

        document.body.classList.remove('native');
    }

    /** Loop through all loaded style sheets, and alter the media query
     * condition text that matches `fromText` with `toText` Used to change dark
     * mode media query to be applied by changing it from
     * `(prefers-color-scheme: dark)` to `only screen`.
     */
    function swapMediaQueryConditionText(fromText, toText) {
        var sheetIndex, sheet;
        var rules, ruleIndex, rule;
        var sheets = document.styleSheets;

        for (sheetIndex = 0; sheetIndex < sheets.length; ++sheetIndex) {
            sheet = sheets[sheetIndex];
            try {
                // Some Firefox addons inject css into the page.
                // Programmatically accessing rules from any of these style
                // sheets cause a security exception. Therefor a surrounding
                // try-catch.
                rules = sheet.cssRules || sheet.rules;

                for (ruleIndex = 0; ruleIndex < rules.length; ++ruleIndex) {
                    rule = rules[ruleIndex];
                    if (
                        rule.media &&
                        (rule.conditionText === fromText ||
                            rule.media.mediaText === fromText)
                    ) {
                        rule.media.mediaText = toText;
                    }
                }
            } catch (err) {
                // never mind
            }
        }
    }

    function animateCssTransition() {
        document.documentElement.classList.add('transition');
        window.setTimeout(function() {
            document.documentElement.classList.remove('transition');
        }, 1000);
    }
})();
