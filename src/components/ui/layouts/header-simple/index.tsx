import { Outlet } from 'react-router-dom';

import LocaleToggler from '@/components/common/locale-toggler';

export const HeaderSimple = () => {
  return (
    <>
      <header className="f sticky top-0 w-full border-b bg-white p-3">
        <div className="container flex items-center justify-between gap-4">
          <img
            src="/assets/brand/recy-network-logo.png"
            alt="Recy Network"
            width={120}
            height={120}
          />

          <LocaleToggler />
        </div>
      </header>
      <Outlet />
    </>
  );
};
