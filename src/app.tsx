import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './components/ui/layouts/header';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

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
    ],
    element: <Header />,
  },
  {
    element: <Home />,
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
