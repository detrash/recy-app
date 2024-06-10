import { Menu } from "./menu";

export const Header = () => {
  return (
    <header className="sticky top-0 mx-auto mb-8 flex w-full items-center justify-between border-b bg-white p-4">
      <div className="container">
        <Menu />
      </div>
    </header>
  );
};
