"use client";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";
import { User } from "../User/User";
import { Nav } from "../Nav/Nav";
import children from "../../images/img-2@/children_burger_menu@2x.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { LogOut } from "../../redux/auth/operations";
import { useRouter } from "next/navigation";
export const BurgerMenu = ({ isOpen, close }) => {
  const dispatch = useDispatch();
  const route = useRouter();
  const handelLogOut = () => {
    dispatch(LogOut())
      .unwrap()
      .then(() => route.push("/registration"));
  };
  return (
    isOpen && (
      <div className="w-[100%] h-[100%] fixed top-0 left-0 flex justify-end z-10">
        <div className="p-[16px] w-[185px] h-screen relative bg-green">
          <div className=" flex justify-between mb-[100px]">
            <User className="flex !text-[#fff]" />
            <button onClick={close}>
              <Icon
                name="close"
                width="24px"
                height="24px"
                className="fill-[#fff] stroke-white "
              />
            </button>
          </div>
          <Nav
            className="!flex "
            list="flex-wrap text-[#fff] !justify-start"
            active="text-[#000] bg-white py-[12px] px-[20px] rounded-m"
          />
          <Button
            text="Log out"
            onClick={handelLogOut}
            className="flex text-[#fff]"
            svg="flex"
          />
          <Image
            src={children}
            alt="children"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    )
  );
};
