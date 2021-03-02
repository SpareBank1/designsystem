import React from 'react';
import ReactDOM from 'react-dom';
import '@designsystem/style.css';
import * as ds from '@designsystem/esm';
//import App from './App.jsx';
import { Heading1 } from '@sb1/ffe-core-react';

ReactDOM.render(
    <React.StrictMode>
        <Heading1>it works</Heading1>
        <pre>{JSON.stringify(Object.keys(ds.examples), null, 2)}</pre>
    </React.StrictMode>,
    document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
