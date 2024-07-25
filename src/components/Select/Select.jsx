"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../redux/words/selector";
import clsx from "clsx";

export const Select = ({
  setCategory,
  isIrregular,
  setIsIrregular,
  className,
}) => {
  const categories = useSelector(categoriesSelector);

  const [isVerb, setIsVerb] = useState(true);

  const handleVerb = (e) => {
    const option = e.target.value;
    setCategory(e.target.value);
    option === "verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const handleIsIrregular = (e) => {
    setIsIrregular(e.target.value === "Irregular");
  };

  return (
    <>
      <select
        onChange={handleVerb}
        defaultValue={"Verb"}
        className={clsx(
          "w-[100%] md:w-[204px] bg-green  border border-[#fff] rounded-[15px] px-[24px] py-[12px] text-[#fff] mb-[8px] outline-none",
          className && className
        )}
      >
        {categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>

      {isVerb && (
        <div className="relative">
          <div className="flex mb-[32px] md:mb-[38px] ">
            <label
              for="htmlFor"
              className={clsx(
                "text-[#fff] mr-[16px]",
                className ? "!text-[#000]" : null
              )}
            >
              <input
                className="bg-green outline-none"
                type="radio"
                value="Regular"
                checked={isIrregular === false}
                onChange={handleIsIrregular}
              />
              Regular
            </label>
            <label
              for="htmlFor"
              className={clsx("text-[#fff]", className ? "!text-[#000]" : null)}
            >
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
            <p className=" text-[#fff] absolute top-[25px] left-0 text-[10px] font-fixelRegular leading-[1.2]">
              Such data must be entered in the format I form-II form-III form.
            </p>
          )}
        </div>
      )}
    </>
  );
};
