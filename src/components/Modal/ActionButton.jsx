import useToggle from "../../hooks/useToggle";
import { Icon } from "../Icon";
import { Modal } from "./Modal";
import { EditWords } from "../Modal/EditWords";
export const ActionButton = ({ id, en, ua, category,isIrregular }) => {
  const { open, close, isOpen } = useToggle();
  return (
    <>
      <div className="  bg-[#fff] py-[12px] px-[24px]  rounded-[15px] w-[124px] h-[80px] boxShadow-custom absolute top-[480px] right-[200px]">
        <button className="flex justify-start items-center" onClick={open}>
          <Icon
            width="16"
            height="16"
            name="icon-edit-2"
            className="fill-[#fff] stroke-[#85aa9f] stroke-[2px]"
          />
          Edit
        </button>
        <button className="flex justify-start items-center">
          <Icon
            width="16"
            height="16"
            name="icon-trash-2-1"
            className="stroke-[#85aa9f] fill-white"
          />
          Delete
        </button>
      </div>
      <Modal onClick={close} isOpen={isOpen}>
        <EditWords
          id={id}
          en={en}
          ua={ua}
          category={category}
          isIrregular={isIrregular}
        />
      </Modal>
    </>
  );
};
