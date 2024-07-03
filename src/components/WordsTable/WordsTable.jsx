"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOwnWords, getCategories } from "../../redux/words/operations";
import { Icon } from "../Icon";

import { newWordSelector } from "../../redux/words/selector";
import { Item } from "./Item/Item";
export const WordsTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetOwnWords());
  }, [dispatch]);

  const word = useSelector(newWordSelector);
  console.log("word", word);
  return (
    <div className="bg-[#fcfcfc] p-[18px] mt-[28px] rounded-[15px] ">
      <table className="w-[100%] ">
        <thead className="">
          <tr className=" bg-[#8bb0a519]  ">
            <th className=" border-r border-[#DBDBDB]  rounded-tl-[15px] p-[22px] text-[20px] font-fixelMedium text-black ">
              Word
              <Icon
                width="32"
                height="32"
                name="icon-united-kingdom"
                className="mr-[8px]"
              />
            </th>
            <th className="border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
              Translation
              <Icon
                width="32"
                height="32"
                name="icon-ukraine"
                className="mr-[8px]"
              />
            </th>
            <th className="border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
              Category
            </th>
            <th className="border-r border-[#DBDBDB] p-[22px] text-[20px] font-fixelMedium text-black ">
              Progress
            </th>
            <th className=" rounded-tr-[15px]"></th>
          </tr>
        </thead>
        <tbody className="bg-[#fcfcf] ">
          {word.flatMap(({ en, ua, category, progress, _id, isIrregular }) => {
            return (
              <Item
                key={_id}
                _id={_id}
                en={en}
                ua={ua}
                category={category}
                progress={progress}
                isIrregular={isIrregular}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
