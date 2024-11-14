"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../redux/words/selector";
import clsx from "clsx";
import { RadioButton } from "../Dashboard/RadioButton/RadioButton";
import Select from "react-select";

export const Selects = ({
  setCategory,
  isIrregular,
  setIsIrregular,
  className,
}) => {
  const categories = useSelector(categoriesSelector);

  const [isVerb, setIsVerb] = useState(false);

  const handleVerb = (e) => {
    const option = e.value.toLowerCase();
    setCategory(e.value.toLowerCase());
    option === "verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const handelIsIrregular = (e) => {
    setIsIrregular(e.target.value === "Irregular");
  };

  const options = [];
  for (const option of categories) {
    const bigLetter = option[0].toUpperCase();
    const remainderWord = option.slice(1, option.length);
    const changeCategories = `${bigLetter}${remainderWord}`;
    const item = { value: changeCategories, label: changeCategories };
    options.push(item);
  }
  return (
    <>
      <Select
        placeholder="Categories"
        onChange={handleVerb}
        options={options}
        classNamePrefix="react-select"
        className={clsx(
          " px-6 outline-none bg-transparent h-12 border border-gray1 rounded-s w-full mb-2  md:w-[204px]  ",
          className && className
        )}
      />

      {isVerb && (
        <div className="relative">
          <RadioButton
            className="!text-white "
            handelIsIrregular={handelIsIrregular}
            irregular={isIrregular}
          />

          {isIrregular && (
            <p className=" text-white absolute top-[25px] left-0 text-[10px] font-fixelRegular leading-[1.2]">
              Such data must be entered in the format I form-II form-III form.
            </p>
          )}
        </div>
      )}
    </>
  );
};
