import { useSizeWindow, useToggle } from "@/hooks";

import { usePathname } from "next/navigation";
import { AddNewWord } from "@/redux/words/operations";
import { useDispatch } from "react-redux";

import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Button } from "../Button/Button";
import { ActionButton } from "../Modal/ActionButton";

import clsx from "clsx";

import { toast } from "react-toastify";
import { WordsTableCell } from "./WordsTableCell";
import { Icon } from "../ui";

export const WordsTableRow = ({ row }) => {
  const { size } = useSizeWindow();

  const pathname = usePathname();

  const isRecommendPage = pathname === "/recommend";

  const { close, isOpen, open } = useToggle();

  const dispatch = useDispatch();

  const handelAddDictionary = (id) => {
    dispatch(AddNewWord({ id }))
      .then(() => {
        toast.success("You added word in your dictionary");
      })
      .catch(() => {
        toast.error(error);
      });
  };

  return (
    <>
      {row.cells.map((cell, i) => {
        const isCategory = cell.render("Header") === "Category";

        const isProgress = cell.render("Header") === "Progress";

        const isRecommendOrMoreThenTablet = isRecommendPage || size >= 767;

        return isCategory ? (
          isRecommendOrMoreThenTablet && <WordsTableCell cell={cell} />
        ) : isProgress ? (
          !isRecommendPage && (
            <WordsTableCell key={i} cell={cell}>
              <ProgressBar
                progress={cell.value}
                className=" justify-center  md:justify-start "
              />
            </WordsTableCell>
          )
        ) : cell.render("Header") === " " ? (
          <WordsTableCell key={i} cell={cell}>
            <Button
              onClick={
                isRecommendPage
                  ? () => handelAddDictionary(cell.row.original.id)
                  : open
              }
            >
              {isRecommendPage
                ? `${size <= 767 ? "" : "Add to dictionary"}`
                : "..."}
              <Icon
                name="icon-switch-horizontal-01-1"
                className={clsx(
                  isRecommendPage ? "flex stroke-green" : "hidden"
                )}
              />
            </Button>
            {isOpen && (
              <ActionButton info={cell.row.original} closeModals={close} />
            )}
          </WordsTableCell>
        ) : (
          <WordsTableCell key={i} cell={cell} />
        );
      })}
    </>
  );
};
