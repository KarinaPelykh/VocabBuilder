import { Icon } from "../ui/Icon";
import { Button } from "@/components/ui";
export const HideButton = ({ isShow, onClick }) => {
  return (
    <Button
      className="absolute bottom-[15px] right-[18px]"
      type="button"
      onClick={onClick}
    >
      <Icon
        width="20"
        height="20"
        name={!isShow ? "icon-eye-off" : "icon-eye"}
        className="fill-[#85aa9f19] stroke-black"
      />
    </Button>
  );
};
