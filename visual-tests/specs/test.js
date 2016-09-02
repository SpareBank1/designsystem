gemini.suite('example', function(suite) {
  suite.setUrl('/example.html')
    .setCaptureElements('body')
    .capture('plain');
});
