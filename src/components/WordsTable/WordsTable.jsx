"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "./columns";
import {
  GetOwnWords,
  getCategories,
  getWordsAll,
} from "../../redux/words/operations";
import { useTable } from "react-table";
import { WordsPagination } from "../WordsPagination/WordsPagination";
import { selectFilter, selectFilterWords } from "../../redux/words/selector";
import { usePathname } from "next/navigation";
import { Invitation } from "../ui";
import { WordsHeaderCell } from "./WordsHeaderCell";
import { WordsTableRow } from "./WordsTableRow";

export const WordsTable = () => {
  const [limit] = useState(7);

  const [currentPage, setCurrentPage] = useState(1);

  const pathname = usePathname();

  const route = pathname === "/recommend";

  const word = useSelector(selectFilter);

  const allWords = useSelector(selectFilterWords);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetOwnWords({ page: currentPage, limit }));
  }, [dispatch, limit, currentPage]);

  useEffect(() => {
    dispatch(getWordsAll({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  const handelIronArray = () => {
    return (route ? allWords : word).flatMap(
      ({ en, ua, category, progress, _id, isIrregular }) => {
        return {
          word: en,
          translation: ua,
          category,
          progress,
          id: _id,
          isIrregular,
        };
      }
    );
  };

  const data = handelIronArray();

  const tablet = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tablet;

  return (
    <>
      {!route && !word.length ? (
        <Invitation />
      ) : (
        <div className="flex justify-center md:bg-white md:p-[18px] md:mt-7 md:rounded-m md:w-[704px] xl:w-full">
          <table
            {...getTableProps()}
            className=" w-full  md:max-h-[640px] md:w[668px]  xl:w-full "
          >
            <thead className="">
              {headerGroups.map((headerGroup, i) => (
                <tr
                  className="bg-green1  "
                  key={i}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  <WordsHeaderCell headerGroup={headerGroup} />
                </tr>
              ))}
            </thead>
            <tbody className="  bg-white " {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);

                return (
                  <tr className=" xl:h-[72px]  " key={i} {...row.getRowProps()}>
                    <WordsTableRow row={row} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <WordsPagination
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
