"use client";
import { useDispatch } from "react-redux";
import useToggle from "../../../hooks/useToggle";
import { Button } from "../../Button/Button";
import { ActionButton } from "../../Modal/ActionButton";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { AddNewWord } from "../../../redux/words/operations";
import { toast } from "react-toastify";
export const Item = ({
  en,
  ua,
  category,
  progress,
  _id,
  isIrregular,
  route,
}) => {
  const { toggle, close, isOpen } = useToggle();

  const dispatch = useDispatch();
  const handelAddDictionary = () => {
    dispatch(AddNewWord({ id: _id }))
      .then(() => {
        toast.success("You added word in your dictionary");
      })
      .catch(() => {
        toast.error(error);
      });
  };
  return (
    <tr className="relative h-[72px]">
      <td className="p-[22px] border border-[#DBDBDB] border-l-0 ">{en}</td>
      <td className="p-[22px] border border-[#DBDBDB]">{ua}</td>
      <td className="p-[22px] border border-[#DBDBDB]">{category}</td>
      {route ? null : (
        <td className="p-[22px] border border-[#DBDBDB]">
          <ProgressBar progress={progress} />
        </td>
      )}
      <td className="p-[22px] border border-[#DBDBDB] border-r-0 w-fit">
        <Button
          onClick={route ? handelAddDictionary : toggle}
          text={route ? "Add to dictionary" : "..."}
          svg={route ? "flex stroke-green" : "hidden"}
          className="text-[16px]"
        />
      </td>
      {isOpen && (
        <ActionButton
          id={_id}
          en={en}
          ua={ua}
          isIrregular={isIrregular}
          category={category}
          closeModals={close}
        />
      )}
    </tr>
  );
};
