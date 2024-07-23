"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { userSelector } from "../../redux/auth/selector";
import { LogOut } from "../../redux/auth/operations";
import { useRouter } from "next/navigation";
import { Icon } from "../Icon";

export const User = () => {
  const route = useRouter();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const handelLogOut = () => {
    dispatch(LogOut())
      .unwrap()
      .then(() => route.push("/registration"));
  };
  return (
    <>
      <div className=" flex items-center">
        <p className="  font-fixelMedium text-black  text-[16px]   mr-[8px] md:mr-[10px] md:text-[20px]">
          {user?.name}
        </p>

        <div className="rounded-radii bg-green w-[36px] h-[36px] md:w-[48px] md:h-[48px] flex justify-center items-center">
          <Icon width="16" height="16" name="user" />
        </div>
        <Button text="Log out" onClick={handelLogOut} />
      </div>
    </>
  );
};
