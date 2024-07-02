"use client";
import useToggle from "../../hooks/useToggle";
import { Icon } from "../Icon";
import { Modal } from "./Modal";
import { EditWords } from "../Modal/EditWords";
import { useDispatch } from "react-redux";
import { DeleteWord } from "../../redux/words/operations";
import { toast } from "react-toastify";
export const ActionButton = ({
  id,
  en,
  ua,
  category,
  isIrregular,
  closeModals,
}) => {
  const dispatch = useDispatch();
  const { open, close, isOpen } = useToggle();
  const handelDelete = () => {
    dispatch(DeleteWord({ id }))
      .unwrap()
      .then(() => {
        toast.success("You delete word");
      });
  };
  const handelClose = (e) => {
    if (e.target === e.currentTarget) {
      console.log(e.target === e.currentTarget);
      closeModals();
    }
  };

  return (
    <>
      <div
        onClick={handelClose}
        className="  bg-[#fff] py-[12px] px-[24px]  rounded-[15px] w-[124px] h-[80px] boxShadow-boxShadowS absolute top-[50px] right-[65px] z-10"
      >
        <button className="flex justify-start items-center" onClick={open}>
          <Icon
            width="16"
            height="16"
            name="icon-edit-2"
            className="fill-[#fff] stroke-[#85aa9f] stroke-[2px]"
          />
          Edit
        </button>
        <button
          type="button"
          className="flex justify-start items-center"
          onClick={handelDelete}
        >
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
          onClick={close}
        />
      </Modal>
    </>
  );
};
