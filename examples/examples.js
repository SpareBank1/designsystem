(function() {
    var qs = document.querySelector.bind(document);

    qs('.ffe-header__user-button').onclick = function() {
        toggleModifier('ffe-header__user-nav-list', 'visible');
        toggleModifier('ffe-header__user-chevron', 'expanded');
    };

    qs('.ffe-header__site-nav-button').onclick = function() {
        toggleModifier('ffe-header__site-nav-list', 'visible');
        toggleModifier('ffe-header__site-nav-hamburger', 'expanded');
    };

    qs('.ffe-header__search-button').onclick = function() {
        toggleModifier('ffe-header__search', 'visible');
    };

    function toggleModifier(be, m) {
        toggleClass(qs('.'+be), be+'--'+m);
    }

    function toggleClass(el, className) {
        if (el.className.indexOf(className) == -1) {
            el.className += ' '+className;
        } else {
            el.className = el.className.replace(className, '');
        }
    }
}());
