import { Outlet } from 'react-router-dom';

export const HeaderSimple = () => {
  return (
    <>
      <header className="sticky top-0 w-full border-b bg-white p-3">
        <div className="container flex justify-center">
          <img
            src="/assets/brand/recy-network-logo.png"
            alt="Recy Network"
            width={120}
            height={120}
          />
        </div>
      </header>
      <Outlet />
    </>
  );
};
