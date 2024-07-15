import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// Hot Module Replacement (HMR)
if (import.meta.hot) {
    import.meta.hot.accept();
}
