import clsx from "clsx";
import { Button } from "../Button/Button";
import { Icon } from "../ui/Icon";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
export const ButtonBurgerMenu = ({ className, open, close, isOpen }) => {
  return (
    <>
      <Button svg="hidden" onClick={open}>
        <Icon
          name="icon-Nav"
          width="24px"
          height="24px"
          className={clsx(
            "stroke-black ml-[8px] md:ml-[28px]",
            className && className
          )}
        />
      </Button>

      <BurgerMenu isOpen={isOpen} close={close} />
    </>
  );
};
