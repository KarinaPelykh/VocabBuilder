"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Circle } from "rc-progress";

export const ProgressBar = ({
  progress,
  doneTasks = 0,
  generalAmountTasks = 0,
  className,
  variant,
}) => {
  const progressUser = Math.ceil(
    doneTasks >= 0 ? (doneTasks / generalAmountTasks) * 100 : 0
  );

  const rout = usePathname();
  const isTraining = rout !== "/training";
  return (
    <div
      className={clsx(
        "flex relative",
        variant && variant
        // className && className
      )}
    >
      <p
        className={clsx(
          !isTraining &&
            "absolute  right-[25px]   top-[40px] md:top-[82px] md:right-[20px] !flex",
          "hidden md:flex"
        )}
      >
        {isTraining ? `${progress}%` : progressUser}
      </p>
      <Circle
        className={clsx(
          "w-[26px] h-[26px] md:ml-[16px]",
          className && className
        )}
        strokeWidth={isTraining ? 15 : 8}
        percent={isTraining ? progress : progressUser}
        strokeColor={isTraining ? "#2BD627" : "#85AA9F"}
        trailColor={isTraining ? "#D4F8D3" : "#ffffff"}
        trailWidth={isTraining ? 15 : 8}
      />
    </div>
  );
};
