(function() {
    var qs = document.querySelector.bind(document);

    qs('.sb1ds-top-menu__toggle-button').onclick = function() {
        toggleModifier('sb1ds-top-menu__wrapper', 'visible');
        toggleModifier('sb1ds-top-menu__site-nav-hamburger', 'expanded');
    };

    function toggleModifier(be, m) {
        toggleClass(qs('.' + be), be + '--' + m);
    }

    function toggleClass(el, className) {
        if (el.className.indexOf(className) == -1) {
            el.className += ' ' + className;
        } else {
            el.className = el.className.replace(className, '');
        }
    }
})();

const togglePlay = document.querySelectorAll('.sb1ds-svgcontainer');
[].forEach.call(togglePlay, function(play) {
    play.addEventListener('click', function(evt) {
        play.classList.toggle('sb1ds-svgcontainer--playing');
    });
});

const toggleTooltip = document.querySelectorAll('.sb1ds-tooltip');
[].forEach.call(toggleTooltip, function(tooltipButton) {
    tooltipButton.addEventListener('click', function () {
        var tooltipId = tooltipButton.attributes['aria-controls'].value;
        var tooltip = document.getElementById(tooltipId);
        var displayHeight = tooltip.clientHeight;
        var scrollHeight = tooltip.scrollHeight;
        displayHeight ? tooltipButton.classList.remove('ffe-tooltip__icon--active') : tooltipButton.classList.add('ffe-tooltip__icon--active');
        displayHeight ? tooltip.classList.remove('ffe-tooltip__text--active') : tooltip.classList.add('ffe-tooltip__text--active');
        displayHeight ? tooltip.style = '' : tooltip.style = 'max-height: ' + scrollHeight + 'px;';
    });
});

(function npmInstallBuilder () {
    var bundles = {
        core: [
            '@sb1/ffe-core',
            '@sb1/ffe-webfonts',
        ],
        buttons: [
            '@sb1/ffe-buttons',
            '@sb1/ffe-buttons-react',
        ],
        form: [
            '@sb1/ffe-form',
            '@sb1/ffe-form-react',
            '@sb1/ffe-checkbox-react',
            '@sb1/ffe-dropdown-react',
            '@sb1/ffe-radio-button-react',
        ],
        icons: [
            '@sb1/ffe-icons',
            '@sb1/ffe-icons-react',
        ],
        tables: [
            '@sb1/ffe-tables',
            '@sb1/ffe-tables-react',
        ],
    };

    function updateNpmInstallCommand() {
        var checkedBundles = document.querySelectorAll('#npm-i-builder-packages .ffe-hidden-checkbox:checked');
        var reactAnswer = document.querySelector('#npm-i-builder-react .ffe-radio-input:checked');
        var selectedBundles = [];
        [].forEach.call(checkedBundles, function(checkbox) {
            bundles[checkbox.value].forEach(function (b) {
                selectedBundles.push(b);
            });
        });
        if (reactAnswer.value === 'false') {
            selectedBundles = selectedBundles.filter(function (packageName) {
                return packageName.indexOf('-react') === -1;
            });
        }
        var installString = 'npm install --save ' + selectedBundles.join(' ');
        document.getElementById('sb1ds-npm-i-builder-output').innerHTML = installString;
    }

    var reactQuestionSwitch = document.getElementById('npm-i-builder-react');
    var packagesFieldset = document.getElementById('npm-i-builder-packages');
    if (reactQuestionSwitch && packagesFieldset) {
        reactQuestionSwitch.addEventListener('change', updateNpmInstallCommand);
        packagesFieldset.addEventListener('change', updateNpmInstallCommand);
        updateNpmInstallCommand();
    }
})();
