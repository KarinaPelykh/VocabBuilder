import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="bg-[#fff] py-[20px] px-[100px] flex justify-between">
      <Logo />
      <Nav />
    </header>
  );
};
