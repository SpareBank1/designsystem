var fs = require('fs');

var HTML = /\.html$/;

fs.readdirSync('./example')
    .filter(function(f) { return f.match(HTML) &&  f !== 'index.html' })
    .forEach(function(file) {
        gemini.suite(file.replace(HTML, ''), function(suite) {
            suite.setUrl('/' + file)
                .setCaptureElements('body')
                .capture('plain');
        });
    });
