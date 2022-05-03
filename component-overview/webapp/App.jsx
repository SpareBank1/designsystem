import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, ViewExample } from './routes';
import { NavProvider, ThemeProvider } from './context';
import { withExampleById } from './util';

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
