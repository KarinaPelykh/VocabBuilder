"use client";
import { useState } from "react";
import { Filters } from "../Filters/Filters";
import { useDebouncedCallback } from "use-debounce";
import { Icon } from "../../Icon";

export const FormSearch = () => {
  const [word, setWord] = useState("");
  const debounced = useDebouncedCallback((word) => {
    setWord(word);
  }, 300);

  const handleChangeINput = (e) => {
    const value = e.target.value.trim();
    debounced(value);
  };
  return (
    <div className="flex mr-[8px]">
      <form className="mr-[8px] relative">
        <input
          className="border border-[#DBDBDB] py-[12px] px-[24px] bg-transparent rounded-[12px]  placeholder:text-[#000]"
          type="text"
          name="text"
          placeholder="Find the word"
          onChange={handleChangeINput}
        />
        <Icon
          width="20"
          height="20"
          name="search"
          className="fill-[#fff] stroke-black absolute top-[15px] right-[15px]"
        />
      </form>
      <Filters />
    </div>
  );
};
