"use client";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { userSelector } from "../../redux/auth/selector";
import { LogOut } from "../../redux/auth/operations";
import { useRouter } from "next/navigation";

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
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93914 12 4C12 5.06087 11.5786 6.07829 10.8284 6.82843C10.0783 7.57858 9.06087 8 8 8C6.93914 8 5.92172 7.57858 5.17158 6.82843C4.42143 6.07829 4 5.06087 4 4C4 2.93914 4.42143 1.92172 5.17158 1.17157C5.92172 0.421427 6.93914 0 8 0ZM8 16C8 16 16 16 16 14C16 11.6 12.1 9.00001 8 9.00001C3.9 9.00001 0 11.6 0 14C0 16 8 16 8 16Z"
            fill="#FCFCFC"
            fill-opacity="0.7"
          />
        </svg>
      </div>
      <Button text="Log out" onClick={handelLogOut} />
    </div>
  );
};
