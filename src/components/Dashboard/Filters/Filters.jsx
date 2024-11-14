"use client";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "../../../redux/words/selector";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { FormSearch } from "./FormSearch";
import {
  addFilter,
  addFilterCategories,
} from "../../../redux/words/filterSlice";
import { GetOwnWords } from "../../../redux/words/operations";
import { RadioButton } from "../RadioButton/RadioButton";
import Select from "react-select";
export const Filters = () => {
  const [word, setWord] = useState("");

  const [shearCategories, setShearCategories] = useState("");

  const [isVerb, setIsVerb] = useState(false);

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
    if (shearCategories && irregular !== null) {
      dispatch(GetOwnWords({ shearCategories, irregular }));
    }
    dispatch(GetOwnWords({ shearCategories }));

    dispatch(GetOwnWords({ word }));
  }, [dispatch, word, shearCategories, irregular]);

  const handleVerb = (e) => {
    const option = e.value;
    setShearCategories(e.value);

    option === "Verb" ? setIsVerb(true) : setIsVerb(false);
  };

  const handelIsIrregular = (e) => {
    setIrregular(e.target.value === "Irregular");
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
    <div className="mb-[38px]  md:flex  md:mb-8 xl:mr-auto">
      <FormSearch handleChangeINput={handleChangeINput} />
      <Select
        placeholder="Categories"
        onChange={handleVerb}
        options={options}
        classNamePrefix="react-select"
        className="px-6 outline-none bg-transparent h-12 border border-gray1 rounded-m w-full  md:w-[164px]"
      />

      {isVerb && (
        <RadioButton
          handelIsIrregular={handelIsIrregular}
          irregular={irregular}
        />
      )}
    </div>
  );
};
