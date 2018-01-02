var fs = require('fs');

var HTML = /\.html$/;

fs.readdirSync('./examples')
    .filter(function(f) { return f.match(HTML) })
    .forEach(function(file) {
        gemini.suite(file.replace(HTML, ''), function(suite) {
            suite.setUrl('/' + file)
                .setCaptureElements('body')
                .before(function(actions) {
                    actions.executeJS(function() {
                        Array.prototype.forEach.call(
                            document.querySelectorAll('.visual-test-hidden'),
                            function(el) {
                                el && el.parentNode.removeChild(el);
                            }
                        );
                    })
                })
                .capture('plain');
        })
    });