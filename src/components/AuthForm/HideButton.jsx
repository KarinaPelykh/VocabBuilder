import { Button, Icon } from "@/components/ui";
export const HideButton = ({ isShow, onClick }) => {
  return (
    <Button
      className="absolute top-5 right-[18px]"
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
