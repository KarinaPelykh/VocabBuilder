"use client";
// import { Button } from "../Button/Button";
import { Icon, Button } from "@/components/ui";
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
      <h1 className="text-white font-fixelBold  text-[24px] leading-[1.17] mb-4 md:mb-5 md:leading-[1.2] md:text-[40px] ">
        Add word
      </h1>
      <p className="leading-[1.5] text-white-light font-fixelRegular  text-[16px] mb-4 md:mb-8 md:text-[20px]">
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
          className="outline-none  text-white mb-[18px] border border-white  rounded-m  px-6 py-3   bg-transparent	 placeholder:text-white md:w-[354px] md:px-[18px] md:py-4 "
          placeholder="трошки"
        />
        <p className=" flex items-center text-white  justify-start text-[14px]  mb-2  md:mb-0 md:items-center md:justify-center md:ml-8">
          <Icon width="32" height="32" name="icon-ukraine" className="mr-2" />
          Ukrainian
        </p>
      </label>
      <label className="flex  flex-col-reverse  md:flex-row mb-8">
        <input
          onChange={(e) => setWordEng(e.target.value)}
          value={wordEng}
          className="outline-none text-white border border-white rounded-m px-6 py-3  bg-transparent  placeholder:text-white md:w-[354px]  md:px-[18px] md:py-4"
          placeholder="a littel"
        />
        <p className="flex items-center text-white  justify-start  text-[14px]  mb-2 md:mb-0 md:items-center md:justify-center md:ml-8">
          <Icon
            width="32"
            height="32"
            name="icon-united-kingdom"
            className="mr-4"
          />
          English
        </p>
      </label>

      <div className="flex justify-between ">
        <Button
          type="submit"
          className="bg-white text-black  rounded-x !font-bold leading-[1.5]  text-[16px] px-[63px] py-3 w-[159px] h-12    md:px-[101px] md:py-[14px] md:!ml-0 md:w-[245px] md:text-[18px]"
        >
          Add
        </Button>
        <Button
          onClick={close}
          type="button"
          className="bg-transparent text-white border border-white rounded-x !font-bold leading-[1.5] text-[16px]  px-[45px] py-3 w-[145px] h-12 md:px-[101px] md:py-[14px] md:w-[245px] md:text-[18px] md:!ml-0"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
