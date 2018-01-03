import { writeFileSync } from 'fs';
import { join } from 'path';

import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import ChartDonut from '../src/ChartDonut';

function App() {
    return (
        <div id="ffedoc">
            <div className="ffe-content-container">
                <h2 className="ffe-h2">Donut 0% full</h2>
                <ChartDonut
                    firstLabel="Tomt"
                    lastLabel="Fullt"
                    name="Prosent"
                    percentage={0}
                />
            </div>
            <div className="ffe-content-container">
                <h2 className="ffe-h2">Donut 25% full</h2>
                <ChartDonut
                    firstLabel="Tomt"
                    lastLabel="Fullt"
                    name="Prosent"
                    percentage={25}
                />
            </div>
            <div className="ffe-content-container">
                <h2 className="ffe-h2">Donut 50% full</h2>
                <ChartDonut
                    firstLabel="Tomt"
                    lastLabel="Fullt"
                    name="Prosent"
                    percentage={50}
                />
            </div>
            <div className="ffe-content-container">
                <h2 className="ffe-h2">Donut 100% full</h2>
                <ChartDonut
                    firstLabel="Tomt"
                    lastLabel="Fullt"
                    name="Prosent"
                    percentage={100}
                />
            </div>
        </div>
    )
}

const markup = `
    <!DOCTYPE html>
    <html>
    <head lang="en">
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,height=device-height,user-scalable=no" />
        <title>ffe-chart-donut-react</title>
        <link href="example.css" rel="stylesheet" type="text/css">
    </head>

    <body class="ffe-body-text">
        <div class="ffe-section-wrapper">
            <div class="ffe-content-container">
                <h1 class="ffe-h1">Donuts</h1>
            </div>
            ${renderToStaticMarkup(<App />)}
            </div>
        </div>
    </body>
    </html>
`.trim();

writeFileSync(join('.', 'example', 'example.html'), markup);
