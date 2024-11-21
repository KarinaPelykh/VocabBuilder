"use client";
import clsx from "clsx";
import { Icon, Button } from "@/components/ui";
import { BurgerMenu } from "./BurgerMenu";
import { useToggle } from "@/hooks";

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
            "stroke-black ml-2 md:ml-7 xl:hidden",
            className && className
          )}
        />
      </Button>
      <BurgerMenu isOpen={isOpen} close={close} />
    </>
  );
};
