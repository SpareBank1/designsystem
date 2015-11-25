(function() {

    var collapseLinks = document.querySelectorAll('.collapse-link');

    for (var i = 0; i < collapseLinks.length; ++i) {
        collapseLinks[i].addEventListener('click', toggleCollapseLink);
    }

    function toggleCollapseLink() {
        this.classList.toggle('collapse-link--open');
        this.innerText = this.classList.contains('collapse-link--open') ? 'Skjul kode' : 'Vis kode';
    }

})();