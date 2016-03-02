var fs = require('fs');
var gemini = require('gemini');



var HTML_PATTERN = /\.html$/

fs.readdirSync('./examples')
  .filter(function(f) { return f.match(HTML_PATTERN) &&  f !== 'index.html' })
  .forEach(function(f) {
    gemini.suite(f.replace(HTML_PATTERN, ""), function(suite) {
      suite.setUrl('/' + f)
           .setCaptureElements('body')
           .before(function(actions, find) {
                actions.executeJS(function(window) {
                  Array.prototype.forEach.call(document.querySelectorAll(".ffe-loading-spinner,  .ffe-action-button__label-spinner, .ffe-primary-button__label-spinner, .ffe-secondary-button__label-spinner"), function(el) {
                     // Removes spinning/animation elements that impair test stability
                     el && el.parentNode.removeChild(el);
                  });
                })
                .wait(500);  // for checkbox animations to reach steady state

           })
           .capture('plain');
    })
  });

