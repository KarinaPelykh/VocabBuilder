"use client";

import clsx from "clsx";
import { useEffect } from "react";

export const Modal = ({ children, onClick, isOpen, close, className }) => {
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
          className=" bg-[#12141733] w-[100%] h-[100%] fixed top-0 left-0 z-10 flex justify-center items-center"
          onClick={handelCloseClick}
        >
          <div
            className={clsx(
              "bg-green w-[628px]   absolute rounded-[30px] p-[64px]",
              className && className
            )}
          >
            <button
              onClick={onClick}
              className="absolute top-[20px] right-[20px] "
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="#FCFCFC"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="#FCFCFC"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
