/*eslint-disable*/
(function () {
    var qs = document.querySelector.bind(document);

    qs('.ffe-header__icon-button--user-nav').onclick = function () {
        toggleModifier('ffe-header__user-nav-list', 'visible');
        toggleModifier('ffe-header__user-chevron', 'expanded');
    };

    qs('.ffe-header__icon-button--site-nav').onclick = function () {
        toggleModifier('ffe-header__site-nav-list', 'visible');
        toggleModifier('ffe-header__site-nav-hamburger', 'expanded');
    };

    var logoutButton = qs('.ffe-header__logout-button');
    var logoutButtonSpinner = qs('.ffe-header__logout-button-spinner');

    logoutButton.onclick = function () {
        var className = logoutButton.className;
        logoutButton.disabled = true;
        logoutButton.className += ' ffe-header__logout-button--loading';
        logoutButton.setAttribute('aria-disabled', true);
        logoutButtonSpinner.setAttribute('aria-hidden', false);

        setTimeout(function () {
            logoutButtonSpinner.setAttribute('aria-hidden', true);
            logoutButton.setAttribute('aria-disabled', false);
            logoutButton.className = className;
            logoutButton.disabled = false;
        }, 2000);
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
