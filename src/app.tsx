import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './components/ui/layouts/header';
import { HeaderSimple } from './components/ui/layouts/header-simple';
import CalculatorResultScreen from './modules/calculator/screens/result';
import KYC from './pages/kyc-test';
import Calculator from './routes/calculator';
import CalculatorStepsScreen from './routes/calculator/steps';
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
    children: [
      {
        element: <CalculatorStepsScreen />,
        path: '/calculator/steps',
      },
      {
        element: <CalculatorResultScreen />,
        path: '/calculator/result',
      },
      {
        element: <Calculator />,
        path: '/calculator',
      },
    ],
    element: <HeaderSimple />,
  },
  {
    element: <Root />,
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
