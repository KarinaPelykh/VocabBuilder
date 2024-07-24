"use client";
import { useDispatch } from "react-redux";
import useToggle from "../../../hooks/useToggle";
import { Button } from "../../Button/Button";
import { ActionButton } from "../../Modal/ActionButton";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { AddNewWord } from "../../../redux/words/operations";
import { toast } from "react-toastify";
import clsx from "clsx";
import useSizeWindow from "../../../hooks/useSizeWindow";
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
  const { size } = useSizeWindow();

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
    <tr className="relative ">
      <td className="px-[14px] py-[16px] text-[14px] border border-[#DBDBDB] border-l-0  font-fixelMedium md:text-[18px] md:p-[22px]">
        {en}
      </td>
      <td className="px-[14px] py-[16px] text-[14px] border border-[#DBDBDB]  font-fixelMedium  md:text-[18px]   md:p-[22px] ">
        {ua}
      </td>
      <td
        className={clsx(
          " border border-[#DBDBDB]   font-fixelMedium hidden md:text-[18px] md:p-[22px]  md:flex",
          route && "!flex px-[14px] py-[16px] text-[14px] "
        )}
      >
        {category}
      </td>
      {route ? null : (
        <td className="px-[14px] py-[16px] text-[14px] border border-[#DBDBDB] md:text-[18px]    md:p-[22px]  ">
          <ProgressBar progress={progress} />
        </td>
      )}
      <td className="px-[14px] py-[16px] text-[14px]  font-fixelMedium   border border-[#DBDBDB] border-r-0 md:text-[18px] md:p-[22px]  ">
        <Button
          onClick={route ? handelAddDictionary : toggle}
          text={route ? `${size <= 767 ? "" : "Add to dictionary"}` : "..."}
          svg={route ? "flex stroke-green" : "hidden"}
          className={clsx("text-[16px] ")}
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
