import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import ViewExample from './routes/ViewExample';
import withExampleById from './util/withExampleById';
import { NavProvider } from './context/NavContext';
import { ThemeProvider } from './context/ThemeContext';

const baseUrl = process.env.PUBLIC_URL || '/';

export default function App() {
    return (
        <ThemeProvider>
            <NavProvider>
                <Router basename={baseUrl}>
                    <Switch>
                        <Route path="/:exampleId">
                            {withExampleById(ViewExample)}
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </NavProvider>
        </ThemeProvider>
    );
}
