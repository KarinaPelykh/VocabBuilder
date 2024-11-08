import { Icon } from "../../ui/Icon";

export const Success = () => {
  return (
    <div className="flex">
      <Icon name="checkbox-succsus" width="16" height="16" />
      <p className=" ml-8 text-[12px] leading-[1,05] font-fixelRegular text-[#00ff00]">
        Success password
      </p>
    </div>
  );
};
