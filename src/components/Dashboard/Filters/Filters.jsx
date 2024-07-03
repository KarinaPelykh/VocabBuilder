"use client";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "../../../redux/words/selector";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { FormSearch } from "../FormSearch/FormSearch";
import { GetOwnWords } from "../../../redux/words/operations";
export const Filters = () => {
  const [word, setWord] = useState("");
  const [isVerb, setIsVerb] = useState(false);
  const [regular, setRegular] = useState(false);
  const [irregular, setIrregular] = useState(false);
  const [shearCategories, setShearCategories] = useState("");
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();

  const handleVerb = (e) => {
    const option = e.target.value;
    setShearCategories(e.target.value);
    option === "verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const debounced = useDebouncedCallback((word) => {
    setWord(word);
  }, 300);

  const handleChangeINput = (e) => {
    const value = e.target.value.trim();
    debounced(value);
    console.log(word, shearCategories);
    dispatch(addFilter({ word, shearCategories }));
  };

  return (
    <div className="flex mr-[auto]">
      <FormSearch handleChangeINput={handleChangeINput} />

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
            <input
              className="bg-green"
              type="radio"
              value="Regular"
              checked={regular}
            />
            Regular
          </label>
          <label
            for="htmlFor"
            className={clsx("text-[#000]", className && className)}
          >
            <input
              className="bg-green"
              type="radio"
              value="Irregular"
              checked={irregular}
            />
            Irregular
          </label>
        </>
      ) : null}
    </div>
  );
};
