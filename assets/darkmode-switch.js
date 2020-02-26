/*eslint no-var:0,no-param-reassign:0,no-use-before-define:["error",{"functions":false}] */
(function() {
    var userControls = initUserControls();

    document.addEventListener('DOMContentLoaded', userControls.restoreDarkMode);

    if (getDarkModeEnabledByOS()) {
        userControls.disableUserInput();
        turnOnDarkMode();
    }

    listenToOsDarkModeChanges();

    function listenToOsDarkModeChanges() {
        var mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

        if (mediaQueryList.addListener) {
            mediaQueryList.addListener(onOsDarkModeSelected);
        } else {
            mediaQueryList.addEventListener('change', onOsDarkModeSelected);
        }

        function onOsDarkModeSelected() {
            if (getDarkModeEnabledByOS()) {
                userControls.disableUserInput();
                turnOnDarkMode();
            } else {
                userControls.allowUserInput();
                turnOffDarkMode();
            }
        }
    }

    function initUserControls() {
        var label = document.querySelector('.darkmode-button__label');
        var button = document.querySelector('.darkmode-button');
        var checkbox = document.querySelector('.darkmode-button__switch');

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
            setDarkModeCookie(checked);
        });

        return {
            restoreDarkMode: function() {
                if (getDarkModeCookieValue()) {
                    if (checkbox.checked) {
                        turnOnDarkMode();
                    } else {
                        checkbox.click();
                    }
                }
            },
            disableUserInput: function() {
                checkbox.checked = true;
                checkbox.disabled = true;
                label.classList.add('darkmode-button__switch--input-disabled');
            },
            allowUserInput: function() {
                label.classList.remove(
                    'darkmode-button__switch--input-disabled',
                );
                checkbox.checked = false;
                checkbox.disabled = false;
            },
        };
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

    function getDarkModeEnabledByOS() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function setDarkModeCookie(darkmodeEnabled) {
        var date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
        document.cookie = `sb1design-darkmode=${
            darkmodeEnabled ? 'true' : 'false'
        }; expires=${date.toGMTString()}; path=/`;
    }

    function getDarkModeCookieValue() {
        return document.cookie.indexOf('sb1design-darkmode=true') !== -1;
    }

    function animateCssTransition() {
        document.documentElement.classList.add('transition');
        window.setTimeout(function() {
            document.documentElement.classList.remove('transition');
        }, 1000);
    }
})();
