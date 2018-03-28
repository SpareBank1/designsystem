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