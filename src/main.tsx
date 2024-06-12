import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Toaster } from '@/components/ui/toaster';
import Dashboard from '@/pages/dashboard';
import Signin from '@/pages/signin';

import { Providers } from './components/providers';

import './index.css';

const router = createBrowserRouter([
  {
    element: <Signin />,
    path: '/',
  },
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
]);

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
      <Toaster />
    </Providers>
  </React.StrictMode>,
);
