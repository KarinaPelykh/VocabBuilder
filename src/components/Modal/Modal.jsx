"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { Button, Icon } from "@/components/ui";

export const Modal = ({ children, onClick, isOpen, className }) => {
  useEffect(() => {
    const handelKeyEscape = (e) => {
      if (e.code === "Escape") {
        onClick();
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("keydown", handelKeyEscape);
    return () => {
      document.removeEventListener("keydown", handelKeyEscape);
    };
  }, [onClick]);

  const handelCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className=" bg-black1 size-full fixed top-0 left-0 z-10 flex justify-center items-center"
          onClick={handelCloseClick}
        >
          <div
            className={clsx(
              "bg-green absolute rounded-m  py-12 px-8 w-[342px] md:rounded-x  md:w-[628px]    md:p-16",
              className && className
            )}
          >
            <Button
              type="button"
              onClick={onClick}
              className="absolute top-5 right-5 "
            >
              <Icon
                name="close-button"
                width="32"
                height="32"
                className="fill-[#fcfcfc]"
              />
            </Button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
