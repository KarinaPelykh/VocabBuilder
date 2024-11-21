"use client";
import { useToggle } from "@/hooks/";
import { Button, Icon } from "@/components/ui";
import { Modal } from "./Modal";
import { EditWords } from "../Modal/EditWords";
import { useDispatch } from "react-redux";
import { DeleteWord } from "../../redux/words/operations";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";
export const ActionButton = ({ info, closeModals }) => {
  const { id, word, translation, category, isIrregular } = info;

  const dispatch = useDispatch();

  const { open, close, isOpen } = useToggle();

  const modalRef = useRef(null);

  const handelDelete = () => {
    dispatch(DeleteWord({ id }))
      .unwrap()
      .then(() => {
        toast.success("You delete word");
      });
  };

  const handelClose = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) {
      return;
    }

    closeModals();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handelClose);
    return () => {
      document.removeEventListener("mousedown", handelClose);
    };
  }, []);

  return (
    <>
      <div
        ref={modalRef}
        className="  bg-white py-3 px-6 rounded-m w-[124px] h-[80px] shadow-boxShadowS   absolute top-[60%] right-0    xl:top-[60%] xl:right-[65px] z-10"
      >
        <Button className="flex justify-start items-center mb-2" onClick={open}>
          <Icon
            width="16"
            height="16"
            name="icon-edit-2"
            className="fill-white stroke-green stroke-2 mr-2"
          />
          Edit
        </Button>
        <Button
          type="button"
          className="flex justify-start items-center"
          onClick={handelDelete}
        >
          <Icon
            width="16"
            height="16"
            name="icon-trash-2-1"
            className="stroke-green fill-white mr-2"
          />
          Delete
        </Button>
      </div>
      <Modal onClick={close} isOpen={isOpen}>
        <EditWords
          id={id}
          en={word}
          ua={translation}
          category={category}
          isIrregular={isIrregular}
          onClick={close}
        />
      </Modal>
    </>
  );
};
