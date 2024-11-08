"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { userSelector } from "../../redux/auth/selector";
import { LogOut } from "../../redux/auth/operations";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui";
import clsx from "clsx";

export const User = ({ className }) => {
  const route = useRouter();

  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  const handelLogOut = () => {
    dispatch(LogOut())
      .unwrap()
      .then(() => route.push("/"));
  };

  return (
    <div className=" flex items-center">
      <p
        className={clsx(
          "font-fixelMedium text-black  text-[16px]   mr-[8px] md:mr-[10px] md:text-[20px]",
          className && className
        )}
      >
        {user?.name}
      </p>

      <div
        className={clsx(
          "rounded-radii bg-green w-[36px] h-[36px] md:w-[48px] md:h-[48px] flex justify-center items-center ",
          className && "bg-white1"
        )}
      >
        <Icon
          name="user"
          className={clsx(
            "w-[13px] h-[13px] md:w-[16px] md:h-[16px]",
            className ? "fill-green" : "fill-[#fcfcfcc2]"
          )}
        />
      </div>
      <Button
        text="Log out"
        onClick={handelLogOut}
        className="hidden xl:flex"
        svg="hidden md:flex stroke-[#000]"
      />
    </div>
  );
};
