import Link from "next/link";
import { Icon } from "../Icon";
import clsx from "clsx";

export const Logo = () => {
  return (
    <Link
      href="/dictionary"
      className="flex items-center text-black font-fixelBold text-[18px] leading-[1,3] px-[16px]  md:px-0   md:text-[22px] md:leading-[1,45]"
    >
      <Icon
        name="logo"
        className="w-[36px] h-[36px] mr-[6px] md:w-[40px] md:h-[40px] md:mr-[16px]"
      />
      VocabBuilder
    </Link>
  );
};
