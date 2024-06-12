import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Button } from '@/components/ui/button';

export default function SigninScreen() {
  // const t = useI18n();
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    navigate('/dashboard');
  }

  return (
    <div className="flex h-lvh flex-1 justify-between">
      <main className="flex h-full flex-1 flex-shrink-0 flex-col justify-center">
        <div className="absolute top-0 z-10 w-full p-5">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img src="/assets/brand/recy-logo.png" width={64} height={64} alt="Recy Logo" />
              </div>

              <div className="flex justify-center p-5">
                <Suspense>
                  {/* <LocaleToggler /> */}
                  Toggle
                </Suspense>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex max-w-xl flex-1 flex-col justify-center gap-5 p-5">
          <h1 className="text-6xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, laborum!
            <br />
            <span className="text-primary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, laborum!
            </span>
          </h1>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, laborum!
          </p>
          <Button onClick={() => loginWithRedirect()} size="lg" className="w-full">
            Login
          </Button>
        </div>
      </main>
      <aside className="relative hidden h-lvh flex-1 flex-shrink basis-1/4 flex-col items-center justify-center xl:flex">
        <img
          className="w-full object-cover sm:h-72 md:h-96"
          src="/assets/bg/ocean.jpg"
          alt="Ocean"
        />
      </aside>
    </div>
  );
}
