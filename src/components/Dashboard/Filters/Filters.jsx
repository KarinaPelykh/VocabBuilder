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
import { RadioButton } from "../RadioButton/RadioButton";
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
    <div className="mb-[38px]  md:flex  md:mb-[28px] xl:mr-[auto]">
      <FormSearch handleChangeINput={handleChangeINput} />

      <select
        onChange={handleVerb}
        className="py-[12px] px-[24px] outline-none bg-[transparent] h-[48px] border border-[#dbdbdb] rounded-[12px] w-[100%]  md:w-[164px] "
      >
        <option>Categiries</option>
        {categories.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      {isVerb ? (
        <RadioButton
          handelIsIrregular={handelIsIrregular}
          irregular={irregular}
        />
      ) : null}
    </div>
  );
};
