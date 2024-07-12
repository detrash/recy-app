import { Outlet } from 'react-router-dom';

import LocaleToggler from '@/components/common/locale-toggler';

export const HeaderSimple = () => {
  return (
    <>
      <header className="f sticky top-0 w-full border-b bg-white p-3">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="/calculator">
              <img
                src="/assets/brand/recy-certificate-logo.png"
                alt="Recy Network"
                width={72}
                height={72}
              />
            </a>

            <a href="https://site.recy.life">
              <img
                src="/assets/brand/recy-network-logo.png"
                alt="Recy Network"
                width={132}
                height={132}
              />
            </a>
          </div>

          <LocaleToggler />
        </div>
      </header>
      <Outlet />
    </>
  );
};
