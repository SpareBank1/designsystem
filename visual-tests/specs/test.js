var fs = require('fs');



var HTML_PATTERN = /\.html$/

fs.readdirSync('./examples')
  .filter(function(f) { return f.match(HTML_PATTERN) })
  .forEach(function(f) {
    gemini.suite(f.replace(HTML_PATTERN, ""), function(suite) {
      suite.setUrl('/' + f)
           .setCaptureElements('body')
           .capture('plain');
    });
  });

