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
    <div className=" flex items-center">
      <p className="mr-[10px] text-[20px] font-fixelMedium text-black">
        {user?.name}
      </p>

      <div className="rounded-radii bg-green w-[48px] h-[48px] flex justify-center items-center">
        <Icon width="16" height="16" name="user" />
      </div>
      <Button text="Log out" onClick={handelLogOut} />
    </div>
  );
};
