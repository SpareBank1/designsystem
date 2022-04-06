import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import ViewExample from './routes/ViewExample';
import withExampleById from './util/withExampleById';

const baseUrl = process.env.PUBLIC_URL || '/';

export default function App() {
    return (
        <Router basename={baseUrl}>
            <Switch>
                <Route path="/:exampleId">{withExampleById(ViewExample)}</Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
