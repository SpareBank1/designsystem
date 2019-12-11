var darkModeEnabled = false;

function isDarkModeSupported() {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        return true;
    }

    return false;
}

/*
Loop through all loaded style sheets, and alter the media query condition text that matches `fromText` with `toText`
Used to change dark mode media query to be applied by changing it from `(prefers-color-scheme: dark)` to `only screen`
 */
function swapMediaQueryConditionText(fromText, toText) {
    var sheets, sheetIndex, ruleIndex, sheet, rules, rule;

    sheets = document.styleSheets;
    for (sheetIndex = 0; sheetIndex < sheets.length; ++sheetIndex) {
        sheet = sheets[sheetIndex];
        rules = sheet.cssRules || sheet.rules;
        for (ruleIndex = 0; ruleIndex < rules.length; ++ruleIndex) {
            rule = rules[ruleIndex];
            if (rule.media && rule.conditionText === fromText) {
                rule.media.mediaText = toText;
            }
        }
    }
}

function onDarkModeSelected() {
    swapMediaQueryConditionText('(prefers-color-scheme: dark)', 'only screen');

    document.body.classList.add('native');
    document.querySelectorAll('.darkmode-switch-icon').forEach(icon => {
        icon.style.filter = 'invert(100%)';
    });
}

function onLightModeSelected() {
    swapMediaQueryConditionText('only screen', '(prefers-color-scheme: dark)');

    document.body.classList.remove('native');
    document.querySelectorAll('.darkmode-switch-icon').forEach(icon => {
        icon.style.filter = '';
    });
}

function setCookie(darkmodeEnabled) {
    var date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = `sb1design-darkmode=${darkmodeEnabled}; expires=${date.toGMTString()}; path=/`;
}

var checkbox = document.getElementById('darkmode-switch');

let animateCssTransition = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
};

checkbox.addEventListener('click', function(event) {
    if (!isDarkModeSupported()) {
        alert('Sorry! Darkmode is not supported with this browser.');
        event.preventDefault();
        return;
    }
});

checkbox.addEventListener('change', function() {
    if (this.checked) {
        darkModeEnabled = true;
        animateCssTransition();
        onDarkModeSelected();
        setCookie(true);
    } else {
        darkModeEnabled = false;
        animateCssTransition();
        onLightModeSelected();
        setCookie(false);
    }
});

document.addEventListener('DOMContentLoaded', function(event) {
    if (
        document.cookie.split(';').filter(function(c) {
            return c.startsWith('sb1design-darkmode=true');
        }).length > 0
    ) {
        checkbox.click();
    }
});

var dmButton = document.querySelector('button.darkmode-button');

dmButton.addEventListener('keydown', function(e) {
    if (e.keyCode === 32 || e.keyCode === 13) {
        checkbox.click();
    }
});

var mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
mediaQueryList.addEventListener('change', () => {
    var darkModeEndabledByOS = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;
    var labelEl = document.getElementById('switch-label');

    // disable manual swith if dark mode is enabled OS-wide
    checkbox.checked = darkModeEndabledByOS;
    darkModeEndabledByOS
        ? labelEl.classList.add('inputDisabled')
        : labelEl.classList.remove('inputDisabled');
    darkModeEndabledByOS
        ? (checkbox.disabled = true)
        : (checkbox.disabled = false);
    darkModeEndabledByOS ? onDarkModeSelected() : onLightModeSelected();
});
