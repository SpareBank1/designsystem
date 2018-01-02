var fs = require('fs');



var HTML_PATTERN = /\.html$/

fs.readdirSync('./examples')
  .filter(function(f) { return f.match(HTML_PATTERN) })
  .forEach(function(f) {
    gemini.suite(f.replace(HTML_PATTERN, ""), function(suite) {
      suite.setUrl('/' + f)
           .setCaptureElements('body')
           .before(function(actions, find) {
                actions.wait(1000);  // for card animations to reach steady state

           })
           .capture('plain');
    })
  });

