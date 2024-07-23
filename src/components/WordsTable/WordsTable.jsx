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
export const WordsTable = () => {
  const [limit, setLimit] = useState(7);
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

  return (
    <>
      <div className="bg-[#fcfcfc] p-[18px] mt-[28px] rounded-[15px] ">
        <table className="w-[100%] md:h-max-[640px]">
          <thead>
            <tr className=" bg-[#8bb0a519]  ">
              <th className="  border-r border-[#DBDBDB]  rounded-tl-[15px] p-[22px] text-[20px] font-fixelMedium text-black ">
                <div className="flex justify-between">
                  <p> Word</p>
                  <Icon
                    width="32"
                    height="32"
                    name="icon-united-kingdom"
                    className=" mr-[8px]"
                  />
                </div>
              </th>
              <th className=" border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
                <div className="flex justify-between">
                  <p> Translation</p>
                  <Icon
                    width="32"
                    height="32"
                    name="icon-ukraine"
                    className="mr-[8px]"
                  />
                </div>
              </th>
              <th className="border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
                Category
              </th>
              {route ? null : (
                <th className="border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
                  Progress
                </th>
              )}

              <th className=" rounded-tr-[15px]"></th>
            </tr>
          </thead>
          <tbody className="bg-[#fcfcf] ">
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
