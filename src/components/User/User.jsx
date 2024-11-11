"use client";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/auth/selector";
import { LogOut } from "../../redux/auth/operations";
import { useRouter } from "next/navigation";
import { Icon, Button } from "@/components/ui";
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
    <div className="flex items-center">
      <p
        className={clsx(
          "font-fixelMedium text-black  text-[16px]   mr-2 md:mr-[10px] md:text-[20px]",
          className && className
        )}
      >
        {user?.name}
      </p>

      <div
        className={clsx(
          "rounded-radii bg-green w-9 h-9 md:w-12 md:h-12 flex justify-center items-center md:mr-4",
          className && "bg-white1"
        )}
      >
        <Icon
          name="user"
          className={clsx(
            "w-[13px] h-[13px] md:w-4 md:h-4",
            className ? "fill-green" : "fill-[#fcfcfcc2]"
          )}
        />
      </div>
      <Button type={"button"} onClick={handelLogOut} className="hidden xl:flex">
        Log out
        <Icon
          name={"icon-switch-horizontal-01-1"}
          className="hidden md:flex stroke-black"
        />
      </Button>
    </div>
  );
};
