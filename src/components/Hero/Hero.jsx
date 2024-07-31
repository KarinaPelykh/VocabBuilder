"use client";
import { getImageProps } from "next/image";
import childrenDesk1 from "../../images/img-1@/children_desk@1x.png";
import childrenDesk2 from "../../images/img-2@/children_desk@2x.png";
import childrenDeskWebp from "../../images/Img-webp/children_desk.webp";
import children_mob1 from "../../images/img-1@/children_mob@1x.png";
import children_mob2x from "../../images/img-2@/children_mob@2x.png";
import children_mobWebp from "../../images/Img-webp/children_mob.webp";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export const Hero = ({ className }) => {
  const route = usePathname();
  const isRegisterPage = route === "/registration";

  const common = { alt: "children" };
  const {
    props: { srcSet: desktopx1 },
  } = getImageProps({
    ...common,
    width: 498,
    height: 435,
    src: childrenDesk1,
  });
  const {
    props: { srcSet: desktopx2, ...restDesktop },
  } = getImageProps({
    ...common,
    width: 498,
    height: 435,
    src: childrenDesk2,
  });
  const {
    props: { srcSet: desktopxWebp, ...restDesktopWebp },
  } = getImageProps({
    ...common,
    width: 498,
    height: 435,
    src: childrenDeskWebp,
  });
  const {
    props: { srcSet: mob1, ...restMobile1 },
  } = getImageProps({
    ...common,
    width: 247,
    height: 191,
    src: children_mob1,
  });
  const {
    props: { srcSet: mob2, ...restMobile2 },
  } = getImageProps({
    ...common,
    width: 247,
    height: 191,
    src: children_mob2x,
  });
  const {
    props: { srcSet: mobwebp, ...restMobileWebp },
  } = getImageProps({
    ...common,
    width: 247,
    height: 191,
    src: children_mobWebp,
  });
  return (
    <div
      className={clsx(
        "flex flex-col justify-center relative z-10  xl:mt-[39px] ",
        isRegisterPage && "mb-[8px] flex-col",
        className && className
      )}
    >
      <picture
        className={clsx(
          "md:hidden xl:flex xl:w-[498px] xl:h-[435px] xl:mb-[16px]"
        )}
      >
        <source media="(min-width: 1440px)" srcSet={desktopx1} />
        <source media="(min-width: 1440px)" srcSet={desktopx2} />
        <source media="(min-width: 1440px)" srcSet={desktopxWebp} />
        <source media="(max-width: 768px)" srcSet={mob1} />
        <source media="(max-width: 375px)" srcSet={mob2} />
        <source media="(max-width: 768px)" srcSet={mobwebp} />
        <img {...restDesktop} alt="children" />
      </picture>

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
