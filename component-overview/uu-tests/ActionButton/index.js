const fs = require('fs');

const testingReport = {
    komponentnavn: 'ActionButton',
    id: 'ActionButton-test-report',
};

const allTests = [];
fs.readdir('./', function(err, files) {
    if (err) return console.log(`Unable to scan directory: ${err}`);

    files.forEach(file => {
        if (file === 'index.js') return; // Do not include index.js

        const data = fs.readFileSync(file, {
            encoding: 'utf-8',
        });
        if (file === 'ikke-relevante-krav.json') {
            testingReport.ikkeRelevanteKrav = JSON.parse(data);
            return;
        }

        return allTests.push(JSON.parse(data));
    });
    testingReport.krav = allTests;
    return JSON.stringify(testingReport);
});
