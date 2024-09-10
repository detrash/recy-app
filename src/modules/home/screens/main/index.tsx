import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import LocaleToggler from '@/components/locale-toggler';
import { Button } from '@/components/ui/button';

export default function HomeScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    navigate('/dashboard');
  }

  return (
    <div className="flex h-lvh flex-1 justify-between">
      <main className="flex h-full flex-1 flex-shrink-0 flex-col justify-center">
        <div className="w-full p-5">
          <nav className="flex items-center justify-between">
            <div>
              <img src="/assets/brand/recy-logo.png" width={64} height={64} alt="Recy Logo" />
            </div>

            <div className="flex justify-center p-5">
              <Suspense>
                <LocaleToggler />
              </Suspense>
            </div>
          </nav>
        </div>

        <div className="flex max-w-xl flex-1 flex-col justify-center gap-8 p-5">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold lg:text-7xl">Welcome to</h1>
            <span className="text-6xl font-bold text-primary lg:text-7xl">Recy App</span>
          </div>
          <p className="text-xl text-gray-500">
            Let's end waste pollution at its source. Let's transform how we think about trash and
            recycling.
          </p>
          <Button onClick={() => loginWithRedirect()} size="lg" className="w-full">
            {t('home.login')}
          </Button>
        </div>
      </main>
      <aside className="relative hidden h-lvh flex-1 flex-shrink basis-1/12 flex-col items-center justify-center xl:flex">
        <img className="w-full object-cover" src="/assets/bg/ocean.jpg" alt="Ocean" />
      </aside>
    </div>
  );
}
