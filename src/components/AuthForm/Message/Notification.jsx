import { Icon } from "@/components/ui";
import clsx from "clsx";
export const Notification = ({ name, colorText, prop }) => {
  console.log(name);

  return (
    <div className="flex">
      <Icon name={name} width="16" height="16" />
      <p
        className={clsx(
          "ml-1 text-[12px] leading-[1,05] font-fixelRegular",
          colorText
        )}
      >
        {prop ? "Enter valid password" : prop || "Success password"}
      </p>
    </div>
  );
};
