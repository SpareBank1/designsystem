gemini.suite('example', function(suite) {
    suite.setUrl('/example.html')
        .setCaptureElements('body')
        .before(function(actions) {
            actions.executeJS(function() {
                // Removes spinning/animation elements that impair test stability
                Array.prototype.forEach.call(
                    document.querySelectorAll(
                        '.ffe-loading-spinner, ' +
                        '.ffe-action-button__label-spinner, ' +
                        '.ffe-primary-button__label-spinner, ' +
                        '.ffe-secondary-button__label-spinner'
                    ),
                    function(el) {
                        el && el.parentNode.removeChild(el);
                    }
                );
            })
            .wait(500);
        })
        .capture('plain');
});
