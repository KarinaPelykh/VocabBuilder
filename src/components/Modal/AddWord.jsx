"use client";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "../../redux/words/selector";
import { addWord } from "../../redux/words/operations";
import { toast } from "react-toastify";
export const AddWords = ({ close }) => {
  const [wordEng, setWordEng] = useState("");
  const [wordUa, setWordUa] = useState("");
  const [isVerb, setIsVerb] = useState(true);
  const [category, setCategory] = useState("verb");
  const [isIrregular, setIsIrregular] = useState(false);
  const categories = useSelector(categoriesSelector);

  const dispatch = useDispatch();
  const handleVerb = (e) => {
    const option = e.target.value;
    setCategory(e.target.value);
    option === "verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const handleAddWord = () => {
    dispatch(addWord({ en: wordEng, ua: wordUa, category, isIrregular }))
      .unwrap()
      .then(() => {
        toast.success("you add new word");
        setWordEng("");
        setWordUa("");
        setIsIrregular(false);
        close();
      })
      .catch((error) => toast.error(error));
  };
  const handleIsIrregular = (e) => {
    setIsIrregular(e.target.value === "Irregular");
  };
  return (
    <>
      <h1 className="text-white text-[40px] fontWeight-fixelBold leading-[1,02]">
        Add word
      </h1>
      <p className=" text-white text-[20px] leading-[1,05] text-[ #fcfcfccc] fontWeight-fixelRegular">
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <div className="flex flex-col mt-[32px]">
        <select
          onChange={handleVerb}
          defaultValue={"Verb"}
          className="w-[204px] bg-green  border border-[#fff] rounded-[15px] px-[24px] py-[12px] text-[#fff] mb-[8px] outline-none"
        >
          {categories.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        {isVerb && (
          <div className="relative">
            <div className="flex mb-[38px] ">
              <label for="htmlFor" className="text-[#fff]">
                <input
                  className="bg-green outline-none"
                  type="radio"
                  value="Regular"
                  checked={isIrregular === false}
                  onChange={handleIsIrregular}
                />
                Regular
              </label>
              <label for="htmlFor" className="text-[#fff]">
                <input
                  className="bg-green outline-none"
                  type="radio"
                  value="Irregular"
                  checked={isIrregular === true}
                  onChange={handleIsIrregular}
                />
                Irregular
              </label>
            </div>

            {isIrregular && (
              <p className=" text-[#fff] absolute top-[25px] left-0">
                Such data must be entered in the format I form-II form-III form.
              </p>
            )}
          </div>
        )}
      </div>

      <label className="flex">
        <input
          onChange={(e) => setWordUa(e.target.value)}
          value={wordUa}
          pattern="/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u"
          className="outline-none mb-[18px] w-[354px] border border-[#fff]  rounded-[15px] px-[18px] py-[16px]   bg-transparent	 placeholder:text-[white]"
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
          onChange={(e) => setWordEng(e.target.value)}
          value={wordEng}
          pattern="/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/"
          className="outline-none border border-[#fff] rounded-[15px] w-[354px] bg-transparent px-[18px] py-[16px] placeholder:text-[white] "
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
          onClick={handleAddWord}
          type="submit"
          text={"Save"}
          className="bg-white text-black px-[101px] py-[14px] rounded-[30px] !ml-[0px] w-[245px] text-[18px] fontWeight-bold leading-[1,56]"
          svg="hidden"
        />
        <Button
          onClick={close}
          type="button"
          text={"Cancel"}
          svg="hidden"
          className="bg-transparent text-white border border-[#fff] px-[101px] py-[14px] rounded-[30px] !ml-[0px] w-[245px] text-[18px] fontWeight-bold leading-[1,56]"
        />
      </div>
    </>
  );
};
