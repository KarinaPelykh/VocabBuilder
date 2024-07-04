"use client";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "../../../redux/words/selector";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { FormSearch } from "../FormSearch/FormSearch";
import {
  addFilter,
  addFilterCategories,
} from "../../../redux/words/filterSlice";
import { GetOwnWords } from "../../../redux/words/operations";
export const Filters = () => {
  const [word, setWord] = useState("");
  const [shearCategories, setShearCategories] = useState("");
  const [isVerb, setIsVerb] = useState(true);
  const [irregular, setIrregular] = useState(null);
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();

  const debounced = useDebouncedCallback((word) => {
    setWord(word);
  }, 300);

  const handleChangeINput = (e) => {
    const value = e.target.value.trim();
    debounced(value);
    dispatch(addFilter({ value }));
  };

  useEffect(() => {
    dispatch(addFilterCategories({ shearCategories, irregular }));
    if (shearCategories !== "" && irregular !== null) {
      dispatch(GetOwnWords({ shearCategories, irregular }));
    }
    dispatch(GetOwnWords({ shearCategories }));
    dispatch(GetOwnWords({ word }));
  }, [dispatch, word, shearCategories, irregular]);

  const handleVerb = (e) => {
    const option = e.target.value;
    setShearCategories(e.target.value);
    option === "verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const handelIsIrregular = (e) => {
    setIrregular(e.target.value === "Irregular");
  };
  return (
    <div className="flex mr-[auto]">
      <FormSearch handleChangeINput={handleChangeINput} />

      <select
        onChange={handleVerb}
        className="py-[12px] px-[24px] w-[164px] outline-none bg-[transparent] h-[48px] border border-[#dbdbdb] rounded-[12px]"
      >
        {categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      {isVerb ? (
        <>
          <label for="htmlFor" className={"text-[#000]"}>
            <input
              className="bg-green"
              type="radio"
              value="Regular"
              checked={irregular === false}
              onChange={handelIsIrregular}
            />
            Regular
          </label>
          <label for="htmlFor" className={"text-[#000]"}>
            <input
              className="bg-green"
              type="radio"
              value="Irregular"
              checked={irregular === true}
              onChange={handelIsIrregular}
            />
            Irregular
          </label>
        </>
      ) : null}
    </div>
  );
};
