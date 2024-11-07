"use client";
import { Button } from "../Button/Button";
import { Icon } from "../ui/Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWord } from "../../redux/words/operations";
import { toast } from "react-toastify";
import { Selects } from "../Select/Select";
export const AddWords = ({ close }) => {
  const [wordEng, setWordEng] = useState("");
  const [wordUa, setWordUa] = useState("");
  const [category, setCategory] = useState("verb");
  const [isIrregular, setIsIrregular] = useState(null);

  const dispatch = useDispatch();

  const handleAddWord = (e) => {
    e.preventDefault();
    dispatch(
      addWord(
        category === "verb"
          ? { en: wordEng, ua: wordUa, category, isIrregular }
          : { en: wordEng, ua: wordUa, category }
      )
    )
      .unwrap()
      .then(() => {
        toast.success("you add new word");
        setWordEng("");
        setWordUa("");
        setIsIrregular(false);
        close();
      })
      .catch((error) => {
        toast.error(error);
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleAddWord}>
      <h1 className="text-white font-fixelBold  text-[24px] leading-[1.17] mb-[16px] md:mb-[20px] md:leading-[1.2] md:text-[40px] ">
        Add word
      </h1>
      <p className="leading-[1.5] text-[#fcfcfc] font-fixelRegular  text-[16px] mb-[16px] md:mb-[32px] md:text-[20px]">
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <div className="flex flex-col ">
        <Selects
          setCategory={setCategory}
          setIsIrregular={setIsIrregular}
          isIrregular={isIrregular}
          className="react-select-modal"
        />
      </div>

      <label className="flex flex-col-reverse md:flex-row">
        <input
          onChange={(e) => setWordUa(e.target.value)}
          value={wordUa}
          // pattern="^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u"
          className="outline-none  text-[#fff] mb-[18px] border border-[#fff]  rounded-[15px]  px-[24px] py-[12px]   bg-transparent	 placeholder:text-[white] md:w-[354px] md:px-[18px] md:py-[16px] "
          placeholder="трошки"
        />
        <p className=" flex items-center text-[#fff]  justify-start text-[14px]     mb-[8px]  md:mb-0 md:items-center md:justify-center md:ml-[32px]">
          <Icon
            width="32"
            height="32"
            name="icon-ukraine"
            className="mr-[8px]"
          />
          Ukrainian
        </p>
      </label>
      <label className="flex  flex-col-reverse  md:flex-row mb-[32px]">
        <input
          onChange={(e) => setWordEng(e.target.value)}
          value={wordEng}
          // pattern="\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/"
          className="outline-none text-[#fff] border border-[#fff] rounded-[15px] px-[24px] py-[12px]  bg-transparent  placeholder:text-[white] md:w-[354px]  md:px-[18px] md:py-[16px]"
          placeholder="a littel"
        />
        <p className="flex items-center text-[#fff] justify-start  text-[14px]  mb-[8px] md:mb-0 md:items-center md:justify-center md:ml-[32px]">
          <Icon
            width="32"
            height="32"
            name="icon-united-kingdom"
            className="mr-[8px]"
          />
          English
        </p>
      </label>

      <div className="flex justify-between ">
        <Button
          type="submit"
          text={"Add"}
          className="bg-white text-black  rounded-[30px] !font-bold leading-[1.5]  text-[16px] px-[63px] py-[12px] w-[159px] h-[48px]    md:px-[101px] md:py-[14px] md:!ml-[0px] md:w-[245px] md:text-[18px]"
          svg="hidden"
        />
        <Button
          onClick={close}
          type="button"
          text={"Cancel"}
          svg="hidden"
          className="bg-transparent text-white border border-[#fff] rounded-[30px]   !font-bold leading-[1.5] text-[16px]  px-[45px] py-[12px] w-[145px] h-[48px] md:px-[101px] md:py-[14px] md:w-[245px] md:text-[18px] md:!ml-[0px]"
        />
      </div>
    </form>
  );
};
