import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import ViewExample from './routes/ViewExample';
import * as designsystem from '../lib/esm';

const { examples } = designsystem;

const exampleGroups = Object.keys(examples)
    .sort()
    .reduce((acc, id) => {
        const { sourceFileName } = examples[id];
        const chunks = sourceFileName.split('/');
        const group = chunks.length > 1 ? chunks[0] : 'ROOT';
        (acc[group] || (acc[group] = [])).push({ id, label: sourceFileName });
        return acc;
    }, {});

const withExampleById = WrappedComponent => ({ match }) => {
    const { exampleId } = match.params;
    const example = examples[exampleId];
    if (!example) {
        return (
            <div>
                Error: No such example <code>{exampleId}</code>.
            </div>
        );
    }

    return <WrappedComponent {...{ exampleId, example }} />;
};

const baseUrl = process.env.PUBLIC_URL || '/';

export default function App() {
    return (
        <Router basename={baseUrl}>
            <Switch>
                <Route path="/:exampleId">{withExampleById(ViewExample)}</Route>
                <Route path="/">
                    <Home exampleGroups={exampleGroups} />
                </Route>
            </Switch>
        </Router>
    );
}
