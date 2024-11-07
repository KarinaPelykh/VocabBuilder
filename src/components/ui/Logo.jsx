import clsx from "clsx";
import { Icon } from "./Icon";
import { ReusableLink } from "./ReusableLink";
export const Logo = ({ className }) => {
  return (
    <ReusableLink
      href="/dictionary"
      className={clsx(
        "flex items-center text-black font-fixelBold text-[18px] leading-[1.3] pt-4  pl-4 sm:pl-0 md:px-0  md:pt-[24px]  md:text-[22px] md:leading-[1.45]",
        className && className
      )}
    >
      <Icon name="logo" className="w-9 h-9 mr-1.5 md:w-10 md:h-10 md:mr-4" />
      VocabBuilder
    </ReusableLink>
  );
};
