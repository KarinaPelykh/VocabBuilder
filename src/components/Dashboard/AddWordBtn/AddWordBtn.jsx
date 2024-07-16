"use client";
import Link from "next/link";
import { Button } from "../../Button/Button";
import { Statistics } from "../Statistics/Statistics";
import useToggle from "../../../hooks/useToggle";
import { AddWords } from "../../Modal/AddWord";
import { Modal } from "../../Modal/Modal";
import { usePathname } from "next/navigation";
import { Icon } from "../../Icon";
export const AddWordBtn = () => {
  const { open, close, isOpen } = useToggle();
  const pathname = usePathname();
  const route = pathname === "/recommend";
  return (
    <div className="flex">
      <Statistics />
      {route ? null : (
        <Button onClick={open} text={"Add word"} svg="hidden">
          <Icon name="icon-plus" width={20} height={20} />
        </Button>
      )}

      <Link href="training" className=" flex ml-[16px]">
        Train oneseif
        <Icon name="icon-switch-horizontal-01-1" width={20} height={20} />
      </Link>

      <Modal onClick={close} isOpen={isOpen}>
        <AddWords close={close} />
      </Modal>
    </div>
  );
};
