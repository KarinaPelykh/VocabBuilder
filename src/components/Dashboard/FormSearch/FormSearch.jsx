"use client";

import { Icon } from "../../Icon";

export const FormSearch = ({ handleChangeINput }) => {
  return (
    <div className="flex mr-[8px]">
      <form className="mr-[8px] relative">
        <input
          className="  outline-none border border-[#DBDBDB] py-[12px] px-[24px] bg-transparent rounded-[12px]  placeholder:text-[#000]"
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
    </div>
  );
};
