"use client";
import Image from "next/image";

import childrenDesk from "../../images/children_desk.png";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export const Hero = ({ className }) => {
  const route = usePathname();
  const isRegisterPage = route === "/registration";

  return (
    <div
      className={clsx(
        "flex flex-col justify-center relative z-10  xl:mt-[39px] ",
        isRegisterPage && "mb-[8px] flex-col",
        className && className
      )}
    >
      <Image
        className="md:hidden xl:flex xl:w-[498px] xl:h-[435px] xl:mb-[16px]"
        src={childrenDesk}
        alt="children"
        width={498}
        height={435}
      />
      <p
        className={clsx(
          "text-[16px] font-fixelRegular leading-[1,05] text-center text-text1 hidden",
          isRegisterPage &&
            "md:flex md:mt-[98px] md:mb-[106px] xl:m-0 xl:justify-center",
          !isRegisterPage && "!flex  justify-center mb-[43px] md:mb-[106px]"
        )}
      >
        Word · Translation · Grammar · Progress
      </p>
    </div>
  );
};
