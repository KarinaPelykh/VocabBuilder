"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOwnWords,
  getCategories,
  getWordsAll,
} from "../../redux/words/operations";
import { Icon } from "../Icon";
import { WordsPagination } from "../WordsPagination/WordsPagination";
import { selectFilter, selectFilterWords } from "../../redux/words/selector";
import { Item } from "./Item/Item";
import { usePathname } from "next/navigation";
import useSizeWindow from "../../hooks/useSizeWindow";
export const WordsTable = () => {
  const [limit] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const route = pathname === "/recommend";
  const word = useSelector(selectFilter);
  const allWords = useSelector(selectFilterWords);
  const dispatch = useDispatch();
  const { size } = useSizeWindow();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetOwnWords({ page: currentPage, limit }));
  }, [dispatch, limit, currentPage]);

  useEffect(() => {
    dispatch(getWordsAll({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  return (
    <>
      <div className="flex justify-center md:bg-[#fcfcfc] md:p-[18px] md:mt-[28px] md:rounded-[15px] ">
        <table className=" w-[100%]   md:h-max-[640px] ">
          <thead>
            <tr className=" bg-[#8bb0a519] ">
              <th className="border-r border-[#DBDBDB]  rounded-tl-[15px] font-fixelMedium text-black px-[14px] py-[16px] text-[16px]  md:p-[22px] md:text-[20px]  ">
                <div className="flex justify-between">
                  <p> Word</p>
                  <Icon
                    width="32"
                    height="32"
                    name="icon-united-kingdom"
                    className="hidden ml-[8px] md:flex"
                  />
                </div>
              </th>
              <th className=" border-r border-[#DBDBDB] font-fixelMedium text-black px-[14px] py-[16px] text-[16px]  md:p-[22px] md:text-[20px]">
                <div className="flex justify-between">
                  <p> Translation</p>
                  <Icon
                    width="32"
                    height="32"
                    name="icon-ukraine"
                    className="hidden md:flex ml-[8px]"
                  />
                </div>
              </th>

              {route || size >= 767 ? (
                <th className="border-r border-[#DBDBDB] font-fixelMedium text-black  px-[14px] py-[16px] text-[16px] text-start md:p-[22px] md:text-[20px] ">
                  Category
                </th>
              ) : null}

              {route ? null : (
                <th className="border-r border-[#DBDBDB] font-fixelMedium text-black px-[14px] py-[16px] text-[16px]  md:p-[22px] md:text-[20px]  ">
                  Progress
                </th>
              )}

              <th className="w-[50px] rounded-tr-[15px]"></th>
            </tr>
          </thead>
          <tbody className="bg-[#fcfcf]">
            {(route ? allWords : word).flatMap(
              ({ en, ua, category, progress, _id, isIrregular }) => {
                return (
                  <Item
                    key={_id}
                    _id={_id}
                    en={en}
                    ua={ua}
                    category={category}
                    progress={progress}
                    isIrregular={isIrregular}
                    route={route}
                  />
                );
              }
            )}
          </tbody>
        </table>
      </div>

      <WordsPagination
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
