var fs = require('fs');

var HTML = /\.html$/;

fs.readdirSync('./example')
    .filter(function(f) {
        return f.match(HTML) &&  f !== 'index.html'
    })
    .forEach(function(file) {
        gemini.suite(file.replace(HTML, ''), function(suite) {
            suite.setUrl('/' + file)
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
                                el.className += ' ffe-loading-spinner--stop-animation'
                            }
                        );
                    });
                })
                .capture('plain');
        })
    });
