"use client";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../../redux/words/selector";
import { useState } from "react";

export const Filters = () => {
  const [isVerb, setIsVerb] = useState(false);
  const categories = useSelector(categoriesSelector);
  const handleVerb = (e) => {
    const option = e.target.value;
    option === "verb" ? setIsVerb(true) : setIsVerb(false);
  };
  return (
    <>
      <select onChange={handleVerb}>
        <option>Categories</option>
        {categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      {isVerb ? (
        <>
          <label for="html">
            <input className="bg-green" type="radio" value="Regular" />
            Regular
          </label>
          <label for="html">
            <input className="bg-green" type="radio" value="Irregular" />
            Irregular
          </label>
        </>
      ) : null}
    </>
  );
};
