const toggleUserNav = document.querySelector('.ffe-header__user-button');
toggleUserNav.onclick = function() {
    const userNav = document.querySelector('.ffe-header__user-nav-list');
    const userNavChevron = document.querySelector('.ffe-header__user-chevron');
    userNav.classList.toggle('ffe-header__user-nav-list--visible');
    userNavChevron.classList.toggle('ffe-header__user-chevron--expanded');
};

const toggleSiteNav = document.querySelector('.ffe-header__site-nav-button');
toggleSiteNav.onclick = function() {
    const siteNav = document.querySelector('.ffe-header__site-nav-list');
    const siteNavBurger = document.querySelector('.ffe-header__site-nav-hamburger');
    siteNav.classList.toggle('ffe-header__site-nav-list--visible');
    siteNavBurger.classList.toggle('ffe-header__site-nav-hamburger--expanded');
};

const toggleSearch = document.querySelector('.ffe-header__search-button');
toggleSearch.onclick = function() {
    const searchContainer = document.querySelector('.ffe-header__search');
    searchContainer.classList.toggle('ffe-header__search--visible');
};