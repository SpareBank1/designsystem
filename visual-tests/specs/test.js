gemini.suite('dist', function (suite) {
    suite.setUrl('/sprite.symbol.html')
        .setCaptureElements('section ul')
        .before(function (actions) {
            actions.wait(1000);
        })
        .capture('plain');
});
