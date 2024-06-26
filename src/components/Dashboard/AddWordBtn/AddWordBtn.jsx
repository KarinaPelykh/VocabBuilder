"use client";
import Link from "next/link";
import { Button } from "../../Button/Button";
import { Statistics } from "../Statistics/Statistics";
import useToggle from "../../../hooks/useToggle";
import { AddWords } from "../../Modal/AddWord";
import { Modal } from "../../Modal/Modal";
export const AddWordBtn = () => {
  const { open, close, toggle, isOpen } = useToggle();
  console.log(open, close, toggle, isOpen);
  return (
    <div className="flex">
      <Statistics />
      <Button onClick={open} text={"Add word"} svg="hidden">
        <svg
          className="ml-[8px]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4.16669V15.8334"
            stroke="#85AA9F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.16663 10H15.8333"
            stroke="#85AA9F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
      <Link href="recommend" className=" flex ml-[16px]">
        Train oneseif
        <svg
          className="ml-[8px]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33337 10H16.6667M16.6667 10L13.3334 6.66669M16.6667 10L13.3334 13.3334"
            stroke="#85AA9F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <Modal onClick={close} isOpen={isOpen} >
        <AddWords />
      </Modal>
    </div>
  );
};
