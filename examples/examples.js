(function() {

	/* Collapsible code snippet */

    var collapseLinks = document.querySelectorAll('.collapse-link');

    for (var i = 0; i < collapseLinks.length; ++i) {
        collapseLinks[i].addEventListener('click', toggleCollapseLink);
    }

    function toggleCollapseLink() {
        this.classList.toggle('collapse-link--open');
        this.innerText = this.classList.contains('collapse-link--open') ? 'Skjul kode' : 'Vis kode';
    }

    /* Content menu toggle */

    var showContentButton = document.querySelector('.sidebar-open__button');
    	showContentButton.addEventListener('click', toggleContentMenu);

    var hideContentButton = document.querySelector('.sidebar__close-btn');
    	hideContentButton.addEventListener('click', toggleContentMenu);

    function toggleContentMenu(){
    	var contentMenu = document.querySelector('.sidebar');
    	contentMenu.classList.toggle('sidebar--open');
    }

    /* Tabs */

    var tabs = document.querySelectorAll('.tabbed-panel__tablink');

    for (var j = 0; j < tabs.length; j++) {
    	tabs[j].addEventListener('click', toggleTabs);
   	}

   	function toggleTabs(e){

   		e.preventDefault();

   		var tabbedPanel = this.parentNode.parentNode.parentNode;

   		for (var k = 0; k < tabs.length; k++) {
   			if (tabs[k].parentNode.parentNode.parentNode === tabbedPanel) {
   				tabs[k].parentNode.classList.remove('tabbed-panel__tab--active');
   			}
   		}

   		var parent = this.parentNode;
   			parent.classList.add('tabbed-panel__tab--active');

   		var rel = this.getAttribute('rel');
   		var panes = document.querySelectorAll('.tabbed-panel__content-pane');
   		
   		var target;

   		for (var i = 0; i < panes.length; i++) {
   			if (panes[i].parentNode.parentNode === tabbedPanel) {
   				if (panes[i].getAttribute('rel') === rel) {
	   				target = panes[i];
	   			}
	   			panes[i].classList.remove('tabbed-panel__content-pane--active');
   			}
   		}

   		if (target) {
   			target.classList.add('tabbed-panel__content-pane--active');
   		}
   	}
   	

})();