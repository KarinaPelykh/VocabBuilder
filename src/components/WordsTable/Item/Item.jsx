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
  const { close, isOpen, open } = useToggle();
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
    <tr className=" xl:h-[72px]  ">
      <td className="break-all   px-[14px] py-[16px] text-[14px] border border-[#DBDBDB] border-l-0  font-fixelMedium md:text-[18px] md:p-[22px] xl:text-[20px]">
        {en}
      </td>
      <td className="break-all  px-[14px] py-[16px] text-[14px] border border-[#DBDBDB]  font-fixelMedium  md:text-[18px]   md:p-[22px] xl:text-[20px]">
        {ua}
      </td>
      {route || (size >= 767 && !route) ? (
        <td
          className={clsx(
            "break-all px-[14px] py-[16px] text-[14px] border border-[#DBDBDB]  font-fixelMedium   md:text-[18px] md:p-[22px]  xl:text-[20px]"
          )}
        >
          {category}
        </td>
      ) : null}
      {route ? null : (
        <td className="  px-[14px] py-[16px] text-[14px] border    border-[#DBDBDB] md:text-[18px]     md:p-[22px]  ">
          <ProgressBar
            progress={progress}
            className=" justify-center  md:justify-start "
          />
        </td>
      )}
      <td className=" relative px-[14px] py-[16px] text-[14px]  font-fixelMedium   border border-[#DBDBDB] border-r-0 md:text-[18px] md:p-[22px]">
        <Button
          onClick={route ? handelAddDictionary : open}
          text={route ? `${size <= 767 ? "" : "Add to dictionary"}` : "..."}
          svg={route ? "flex stroke-green" : "hidden"}
          className={clsx(
            " text-[14px] md:text-[16px] !ml-[0px] ",
            route && "block xl:w-[208px]",
            !route && "block xl:w-[135px]"
          )}
        />
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
      </td>
    </tr>
  );
};
