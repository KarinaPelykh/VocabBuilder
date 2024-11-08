"use client";
import clsx from "clsx";
import { Button } from "../Button/Button";
import { Icon } from "../ui/Icon";
import { BurgerMenu } from "./BurgerMenu";
import useToggle from "../../hooks/useToggle";

export const ButtonBurgerMenu = ({ className }) => {
  const { close, isOpen, open } = useToggle();

  return (
    <>
      <Button svg="hidden" onClick={open}>
        <Icon
          name="icon-Nav"
          width="24px"
          height="24px"
          className={clsx(
            "stroke-black ml-[8px] md:ml-[28px] xl:hidden",
            className && className
          )}
        />
      </Button>
      <BurgerMenu isOpen={isOpen} close={close} />
    </>
  );
};
