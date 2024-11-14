"use client";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../ui/Icon";
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
          className=" outline-none text-white mb-4 h-[56px] border border-white  rounded-m px-6 py-3   bg-transparent	 placeholder:text-white  md:mb-[18px] md:w-[354px] md:px-[18px] md:py-4 "
          placeholder="трошки"
        />
        <p className="w-[114px]  flex items-center justify-start  mb-2 text-white md:mb-0 md:items-center md:justify-center md:ml-8">
          <Icon width="32" height="32" name="icon-ukraine" className="mr-2" />
          Ukrainian
        </p>
      </label>
      <label className="flex flex-col-reverse md:flex-row">
        <input
          onChange={(e) => setWordEN(e.target.value)}
          value={wordEN}
          className="outline-none  h-[56px] text-white border border-white rounded-m px-6 py-3   bg-transparent placeholder:text-white md:w-[354px] md:px-[18px] md:py-4"
          placeholder="a little"
        />
        <p className="flex justify-start items-center mb-2 text-white md:mb-0 md:items-center md:justify-center md:ml-8 ">
          <Icon
            width="32"
            height="32"
            name="icon-united-kingdom"
            className="mr-2"
          />
          English
        </p>
      </label>

      <div className=" flex justify-between mt-8">
        <Button
          type="submit"
          text={"Save"}
          className="bg-white text-black  rounded-x font-bold leading-[1.5] text-[16px] w-[158px] px-[63px] py-3 md:px-[101px] md:py-[14px]  md:!ml-0 md:w-[245px] md:text-[18px]"
          svg="hidden"
        />
        <Button
          onClick={onClick}
          type="button"
          text={"Cancel"}
          svg="hidden"
          className="bg-transparent text-white border border-white  rounded-x  font-bold leading-[1.5] text-[16px] w-[145px]  px-[45px] py-3  md:px-[101px] md:py-[14px] md:!ml-0 md:w-[245px] md:text-[18px]"
        />
      </div>
    </form>
  );
};
