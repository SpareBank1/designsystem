import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, ViewExample } from './routes';
import { NavProvider, ThemeProvider } from './context';
import { Layout } from './components';
import { WithExampleById } from './util';

const baseUrl = process.env.PUBLIC_URL || '/';

export default function App() {
    return (
        <ThemeProvider>
            <Layout>
                <NavProvider>
                    <BrowserRouter basename={baseUrl}>
                        <Routes>
                            <Route path="/">
                                <Route index={true} element={<Home />} />
                                <Route
                                    path=":exampleId"
                                    element={
                                        <WithExampleById
                                            component={ViewExample}
                                        />
                                    }
                                />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </NavProvider>
            </Layout>
        </ThemeProvider>
    );
}
