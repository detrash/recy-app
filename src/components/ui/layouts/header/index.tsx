import { Menu } from "./menu";

export const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between w-full p-4 mx-auto mb-8 bg-white border-b">
      <div className="container">
        <Menu />
      </div>
    </header>
  );
};
