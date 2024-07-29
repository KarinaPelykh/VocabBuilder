"use client";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { User } from "../User/User";
import { ButtonBurgerMenu } from "../ButtonBurgerMenu/ButtonBurgerMenu";
import useToggle from "../../hooks/useToggle";
import useSizeWindow from "../../hooks/useSizeWindow";
export const Header = () => {
  const { close, isOpen, open } = useToggle();
  const { size } = useSizeWindow();
  return (
    <>
      <header className="bg-[#fff] ">
        <Container>
          <div className="flex justify-between items-center py-[16px] md:py-[24] md:px-[32] xl:py-[20] ">
            <Logo className="!p-0" />
            <Nav />
            <User svg="flex" />
            {size <= 1439 ? (
              <ButtonBurgerMenu
                // className=" flex xl:hidden"
                open={open}
                close={close}
                isOpen={isOpen}
              />
            ) : null}
          </div>
        </Container>
      </header>
    </>
  );
};
