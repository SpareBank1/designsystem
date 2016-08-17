var fs = require('fs');



var HTML_PATTERN = /\.html$/

fs.readdirSync('./dist/symbol')
  .filter(function(f) { return f.match(HTML_PATTERN) })
  .forEach(function(f) {
    gemini.suite(f.replace(HTML_PATTERN, ""), function(suite) {
      suite.setUrl('/' + f)
           .setCaptureElements('section ul')
           .before(function(actions, find) {
                actions.wait(1000);

           })
           .capture('plain');
    })
  });

