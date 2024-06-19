import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './components/ui/layouts/header';
import Calculator from './routes/calculator';
import Dashboard from './routes/dashboard';
import Onboarding from './routes/onboarding';
import Profile from './routes/profile';
import Root from './routes/root';
import Submit from './routes/submit';

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
        element: <Submit />,
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
    element: <Calculator />,
    path: '/calculator',
  },
  {
    element: <Root />,
    path: '/',
  },
]);

export function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
