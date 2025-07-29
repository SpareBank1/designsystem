import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import { AccountOverview } from './pages/AccountOverview';
import { InvestmentDashboard } from './pages/InvestmentDashboard';
import { PaymentForm } from './pages/PaymentForm';
import SavingDashboard from './pages/SavingDashboard';
import SettingsDashboard from './pages/SettingsDashboard';
import './styles/tailwind.css';
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
        element: <SavingDashboard/>
      },
      {
        path: '/investering',
        element: <InvestmentDashboard />,
      },
      {
        path: '/innstillinger',
        element: <SettingsDashboard />,
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
