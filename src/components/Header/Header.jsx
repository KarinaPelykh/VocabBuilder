import { Logo } from "@/components/ui";
import { Nav } from "./Nav";
import { User, ButtonBurgerMenu } from "@/components";

export const Header = () => {
  return (
    <header className="bg-[#fff]">
      <div className="container flex items-center py-4 md:py-6 md:px-8 xl:py-5  xl:justify-between">
        <Logo className="!p-0 mr-auto xl:mr-0" />
        <Nav />
        <User svg="flex" />
        <ButtonBurgerMenu />
      </div>
    </header>
  );
};
