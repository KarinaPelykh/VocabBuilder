"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/words/operations";
import { Icon } from "../Icon";
import { Button } from "../Button/Button";
import { ActionButton } from "../Modal/ActionButton";
import useToggle from "../../hooks/useToggle";
export const WordsTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const { open, close, toggle, isOpen } = useToggle();
  return (
    <div className="bg-[#fcfcfc] p-[18px] mt-[28px] rounded-[15px]">
      <table className="w-[100%]">
        <thead>
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
        <tbody className="bg-[#fcfcf] relative">
          <tr>
            <td className="p-[22px] border border-[#DBDBDB] border-l-0 ">
              vzvcvzcz
            </td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB] border-r-0">
              <Button onClick={toggle} text="..." svg="hidden" />
            </td>
          </tr>
          <tr>
            <td className="p-[22px] border border-[#DBDBDB] border-l-0  ">
              vzvcvzcz
            </td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]">vzvcvzcz</td>
            <td className="p-[22px] border border-[#DBDBDB]  border-r-0">
              <Button onClick={toggle} text="..." svg="hidden" />
            </td>
          </tr>
        </tbody>
      </table>
      {isOpen && <ActionButton />}
    </div>
  );
};
