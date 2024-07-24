import clsx from "clsx";
import { Icon } from "../Icon";

export const Button = ({ text, onClick, children, className, svg, type }) => {
  return (
    <button
      type={type}
      className={clsx(
        "xl:ml-[16px] text-[16px] font-fixelMedium leading-[1,05] flex justify-center items-center",
        className
      )}
      onClick={onClick}
    >
      {text}
      <Icon
        name="icon-switch-horizontal-01-1"
        width="16"
        height="16"
        className={clsx(" ml-[6px] flex", className, svg)}
      />

      {children}
    </button>
  );
};
