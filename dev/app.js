import React, { Component } from 'react';
import { render } from 'react-dom';

import ChartDonut from '../src/ChartDonut';

import './app.less';

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

render(
    <App />,
    document.getElementById('root'),
);
