"use client";
import { Button, Icon } from "@/components/ui";
import { User } from "../User/User";
import { Nav } from "../Header/Nav";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { LogOut } from "../../redux/auth/operations";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export const BurgerMenu = ({ isOpen, close }) => {
  const dispatch = useDispatch();

  const route = useRouter();

  const handelLogOut = () => {
    dispatch(LogOut())
      .unwrap()
      .then(() => route.push("/"));
  };

  const handelCloseMenu = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  }
  document.body.style.overflow = "auto";

  return (
    <div
      onClick={handelCloseMenu}
      className={clsx(
        "size-full fixed top-0 left-0 flex justify-end z-10  ",
        isOpen ? "translate-x-0" : "translate-x-full transition-all"
      )}
    >
      <div className="p-4 w-[185px]  h-screen relative bg-green">
        <div className=" flex justify-between mb-[100px]">
          <User className="flex !text-white" />
          <Button onClick={close}>
            <Icon
              name="close"
              width="24px"
              height="24px"
              className="fill-white stroke-white "
            />
          </Button>
        </div>
        <Nav
          className="!flex"
          list="flex-wrap text-white !justify-start"
          active="text-black bg-white py-3 px-5 rounded-m"
        />

        <Button
          type="button"
          onClick={handelLogOut}
          className="flex text-white"
        >
          Log out
          <Icon
            name="icon-switch-horizontal-01-1"
            width="16"
            height="16"
            className="ml-[6px] flex stroke-white"
          />
        </Button>

        <Image
          src={"/hero/children_burger_menu@2x.png"}
          alt="children"
          width={300}
          height={435}
          objectFit="contain"
          className="absolute bottom-0 right-0 "
        />
      </div>
    </div>
  );
};
