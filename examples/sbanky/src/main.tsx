import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { AccountOverview } from './pages/AccountOverview';
import { PaymentForm } from './pages/PaymentForm';
import { InvestmentDashboard } from './pages/InvestmentDashboard';
import './styles/main.less';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AccountOverview />,
      },
      {
        path: '/accounts',
        element: <AccountOverview />,
      },
      {
        path: '/payments',
        element: <PaymentForm />,
      },
      {
        path: '/investments',
        element: <InvestmentDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
