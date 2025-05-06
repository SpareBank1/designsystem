import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
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
        index: true,
        element: <Navigate to="/oversikt" replace />
      },
      {
        path: '/oversikt',
        element: <AccountOverview />,
      },
      {
        path: '/kontoer',
        element: <AccountOverview />,
      },
      {
        path: '/betaling',
        element: <PaymentForm />,
      },
      {
        path: '/sparing',
        element: <div>Spareinnhold</div>,
      },
      {
        path: '/investering',
        element: <InvestmentDashboard />,
      },
      {
        path: '/innstillinger',
        element: <div>Innstillinger</div>,
      },
      {
        path: '*',
        element: <Navigate to="/oversikt" replace />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
