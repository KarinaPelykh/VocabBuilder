"use client";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";
import { useDispatch } from "react-redux";
import { EditWord } from "../../redux/words/operations";
import { toast } from "react-toastify";
export const EditWords = ({ id, en, ua, category, isIrregular, onClick }) => {
  const [wordUA, setWordUA] = useState(ua);
  const [wordEN, setWordEN] = useState(en);
  const dispatch = useDispatch();
  const handelEditWord = (e) => {
    e.preventDefault();
    dispatch(EditWord({ en: wordEN, ua: wordUA, category, isIrregular, id }))
      .unwrap()
      .then(() => {
        toast.success("you changed new word");
        setWordUA("");
        setWordEN("");
        onClick();
      })
      .catch((error) => toast.error(error));
  };
  return (
    <form onSubmit={handelEditWord}>
      <label className="flex flex-col-reverse md:flex-row">
        <input
          onChange={(e) => setWordUA(e.target.value)}
          value={wordUA}
          className=" outline-none text-[#fff] mb-[16px]  border border-[#fff]  rounded-[15px] px-[24px] py-[12px]   bg-transparent	 placeholder:text-[white]  md:mb-[18px] md:w-[354px] md:px-[18px] md:py-[16px] "
          placeholder="трошки"
        />
        <p className="flex items-center justify-start  mb-[8px] text-[#fff] md:mb-0 md:items-center md:justify-center md:ml-[32px]">
          <Icon
            width="32"
            height="32"
            name="icon-ukraine"
            className="mr-[8px]"
          />
          Ukrainian
        </p>
      </label>
      <label className="flex flex-col-reverse md:flex-row">
        <input
          onChange={(e) => setWordEN(e.target.value)}
          value={wordEN}
          className="outline-none text-[#fff] border border-[#fff] rounded-[15px] px-[24px] py-[12px]   bg-transparent placeholder:text-[white] md:w-[354px] md:px-[18px] md:py-[16px]"
          placeholder="a littel"
        />
        <p className="flex justify-start items-center mb-[8px] text-[#fff] md:mb-0 md:items-center md:justify-center md:ml-[32px]">
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
          type="submit"
          text={"Save"}
          className="bg-white text-black  rounded-[30px] font-bold leading-[1.5] text-[16px] w-[158px] px-[63px] py-[12px] md:px-[101px] md:py-[14px]  md:!ml-[0px] md:w-[245px] md:text-[18px]"
          svg="hidden"
        />
        <Button
          onClick={onClick}
          type="button"
          text={"Cancel"}
          svg="hidden"
          className="bg-transparent text-white border border-[#fff]  rounded-[30px]  font-bold leading-[1.5] text-[16px] w-[145px]  px-[45px] py-[12px]  md:px-[101px] md:py-[14px] md:!ml-[0px] md:w-[245px] md:text-[18px]"
        />
      </div>
    </form>
  );
};
