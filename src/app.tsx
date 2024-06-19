import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './components/ui/layouts/header';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import KYC from './pages/kyc-test';
import Onboarding from './pages/onboarding';
import Profile from './pages/profile';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Dashboard />,
        path: '/dashboard',
      },
      {
        element: <Dashboard />,
        path: '/settings',
      },
      {
        element: <Dashboard />,
        path: '/submit',
      },
      {
        element: <Onboarding />,
        path: '/onboarding',
      },
      {
        element: <Dashboard />,
        path: '/admin',
      },
      {
        children: [
          {
            element: <Profile />,
            path: '/settings/profile',
          },
        ],
        path: '/settings',
      },
    ],
    element: <Header />,
  },
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <KYC />,
    path: '/kyc',
  },
]);

export function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
