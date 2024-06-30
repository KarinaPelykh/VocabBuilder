"use client";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../../redux/words/selector";
import { useState } from "react";
import clsx from "clsx";

export const Filters = ({ className }) => {
  const [isVerb, setIsVerb] = useState(false);
  const categories = useSelector(categoriesSelector);
  const handleVerb = (e) => {
    const option = e.target.value;
    option === "verb" ? setIsVerb(true) : setIsVerb(false);
  };
  return (
    <>
      <select onChange={handleVerb}>
        {categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      {isVerb ? (
        <>
          <label
            for="htmlFor"
            className={clsx("text-[#000]", className && className)}
          >
            <input className="bg-green" type="radio" value="Regular" />
            Regular
          </label>
          <label
            for="htmlFor"
            className={clsx("text-[#000]", className && className)}
          >
            <input className="bg-green" type="radio" value="Irregular" />
            Irregular
          </label>
        </>
      ) : null}
    </>
  );
};
