"use client";

import { Statistics } from "../Statistics/Statistics";
import useToggle from "../../../hooks/useToggle";
import { AddWords } from "../../Modal/AddWord";
import { Modal } from "../../Modal/Modal";
import { usePathname } from "next/navigation";

import { Icon, Button, ReusableLink } from "@/components/ui";
import clsx from "clsx";

export const AddWordBtn = () => {
  const { open, close, isOpen } = useToggle();

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
            className="text-[16px] font-fixelMedium leading-[1,05] text-black "
          >
            <Icon name="icon-plus" width={20} height={20} className="ml-2" />
          </Button>
        )}
        <ReusableLink
          href="training"
          className={clsx(
            "text-[16px] font-fixelMedium leading-[1,05] text-black   flex ml-8",
            route && "!ml-0"
          )}
        >
          Train oneseif
          <Icon
            name="icon-switch-horizontal-01-1"
            width={20}
            height={20}
            className="ml-2 stroke-green"
          />
        </ReusableLink>
      </div>
      <Modal onClick={close} isOpen={isOpen}>
        <AddWords close={close} />
      </Modal>
    </section>
  );
};
