"use client";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";
import { useDispatch } from "react-redux";
import { EditWord } from "../../redux/words/operations";
export const EditWords = ({ id, en, ua, category, isIrregular }) => {
  const [wordUA, setWordUA] = useState(ua);
  const [wordEN, setWordEN] = useState(en);
  const dispatch = useDispatch();
  const handelEditWord = () => {
    dispatch(EditWord({ en: wordEN, ua: wordUA, category, isIrregular, id }))
      .unwrap()
      .then(() => {
        toast.success("you add new word");
        setWordUA("");
        setWordEN("");

        close();
      })
      .catch((error) => toast.error(error));
  };
  return (
    <div>
      <label className="flex">
        <input
          onChange={(e) => setWordUA(e.target.value)}
          value={wordUA}
          className=" mb-[18px] w-[354px] border border-[#fff]  rounded-[15px] px-[18px] py-[16px]   bg-transparent	 placeholder:text-[white]"
          placeholder="трошки"
        />
        <p className="flex text-[#fff] items-center justify-center ml-[32px]">
          <Icon
            width="32"
            height="32"
            name="icon-ukraine"
            className="mr-[8px]"
          />
          Ukrainian
        </p>
      </label>
      <label className="flex">
        <input
          onChange={(e) => setWordEN(e.target.value)}
          value={wordEN}
          className="border border-[#fff] rounded-[15px] w-[354px] bg-transparent px-[18px] py-[16px] placeholder:text-[white] "
          placeholder="a littel"
        />
        <p className="flex text-[#fff] items-center justify-center ml-[32px]">
          <Icon
            width="32"
            height="32"
            name="icon-united-kingdom"
            className="mr-[8px]"
          />
          English
        </p>
      </label>

      <div className=" flex justify-between mt-[32px]">
        <Button
          onClick={handelEditWord}
          type="submit"
          text={"Save"}
          className="bg-white text-black px-[101px] py-[14px] rounded-[30px] !ml-[0px] w-[245px] text-[18px] fontWeight-bold leading-[1,56]"
          svg="hidden"
        />
        <Button
          type="button"
          text={"Cancel"}
          svg="hidden"
          className="bg-transparent text-white border border-[#fff] px-[101px] py-[14px] rounded-[30px] !ml-[0px] w-[245px] text-[18px] fontWeight-bold leading-[1,56]"
        />
      </div>
    </div>
  );
};
