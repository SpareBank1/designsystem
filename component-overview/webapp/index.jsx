import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import '../lib/style.css';
import '@sb1/ffe-core/css/colors.css';
import '@sb1/ffe-core/css/dimensions.css';
import '@sb1/ffe-webfonts/sb1-fonts.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
