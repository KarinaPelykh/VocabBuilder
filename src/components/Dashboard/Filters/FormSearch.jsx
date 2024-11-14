"use client";

import { Icon } from "../../ui/Icon";

export const FormSearch = ({ handleChangeINput }) => {
  return (
    <div className=" flex mb-2 md:mb-0  md:mr-2">
      <form className=" w-full relative  md:mr-4 ">
        <input
          className="w-full outline-none border border-gray1 py-3 px-6 bg-transparent rounded-m  placeholder:text-black placeholder:font-fixelMedium md:w-[274px]"
          type="text"
          name="text"
          placeholder="Find the word"
          onChange={handleChangeINput}
        />
        <Icon
          width="20"
          height="20"
          name="search"
          className="fill-white stroke-black absolute top-[15px] right-[15px]"
        />
      </form>
    </div>
  );
};
