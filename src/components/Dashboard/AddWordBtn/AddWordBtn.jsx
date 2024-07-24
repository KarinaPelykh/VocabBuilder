"use client";
import Link from "next/link";
import { Button } from "../../Button/Button";
import { Statistics } from "../Statistics/Statistics";
import useToggle from "../../../hooks/useToggle";
import { AddWords } from "../../Modal/AddWord";
import { Modal } from "../../Modal/Modal";
import { usePathname } from "next/navigation";
import { Icon } from "../../Icon";
import clsx from "clsx";
export const AddWordBtn = () => {
  const { open, close, isOpen } = useToggle();
  console.log("AddWordBtn", isOpen);
  const pathname = usePathname();
  const route = pathname === "/recommend";
  return (
    <section className="md:flex md:items-center">
      <Statistics />

      <div className="flex">
        {route ? null : (
          <Button
            onClick={open}
            text={"Add word"}
            svg="hidden"
            className="text-[16px] font-fixelMedium leading-[1,05] text-[#121417] "
          >
            <Icon
              name="icon-plus"
              width={20}
              height={20}
              className="ml-[8px]"
            />
          </Button>
        )}
        <Link
          href="training"
          className={clsx(
            "text-[16px] font-fixelMedium leading-[1,05] text-[#121417]   flex ml-[16px]",
            "text-[16px] font-fixelMedium leading-[1,05] text-[#121417]   flex ml-[16px]",
            route && "ml-0"
          )}
        >
          Train oneseif
          <Icon
            name="icon-switch-horizontal-01-1"
            width={20}
            height={20}
            className="ml-[8px]"
          />
        </Link>
      </div>
      <Modal onClick={close} isOpen={isOpen}>
        <AddWords close={close} />
      </Modal>
    </section>
  );
};
