/*eslint-disable no-new*/
import '../../packages/ffe-all.less';
import './style.css';

import './components';
import './pages';
import app from './App';

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname;
});
