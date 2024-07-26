"use client";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { User } from "../User/User";
import { ButtonBurgerMenu } from "../ButtonBurgerMenu/ButtonBurgerMenu";
// import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import useToggle from "../../hooks/useToggle";
export const Header = () => {
  const { close, isOpen, open } = useToggle();
  return (
    <>
      <header className="bg-[#fff] ">
        <Container>
          <div className="flex justify-between items-center py-[16px] md:py-[24] md:px-[32] xl:py-[20] ">
            <Logo />
            <Nav />
            <User />

            <ButtonBurgerMenu
              className=" flex xl:hidden"
              open={open}
              close={close}
              isOpen={isOpen}
            />
          </div>
        </Container>
      </header>
    </>
  );
};
