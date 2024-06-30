import { Button } from "../Button/Button";
import { Icon } from "../Icon";
import { Filters } from "../Dashboard/Filters/Filters";
export const AddWords = () => {
  return (
    <>
      <h1 className="text-white text-[40px] fontWeight-fixelBold leading-[1,02]">
        Add word
      </h1>
      <p className=" text-white text-[20px] leading-[1,05] text-[ #fcfcfccc] fontWeight-fixelRegular">
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <Filters className="text-white" />
      <label className="flex">
        <input
          className=" mb-[18px] w-[354px] border border-[#fff]  rounded-[15px] px-[18px] py-[16px]   bg-transparent	 placeholder:text-[white]"
          placeholder="трошки"
        />
        <p className="flex text-[#fff] items-center justify-center ml-[32px]">
          <Icon
            width="32"
            height="32"
            name="icon-ukraine"
            className="mr-[8px]"
          />
          Ukrainian
        </p>
      </label>
      <label className="flex">
        <input
          className="border border-[#fff] rounded-[15px] w-[354px] bg-transparent px-[18px] py-[16px] placeholder:text-[white] "
          placeholder="a littel"
        />
        <p className="flex text-[#fff] items-center justify-center ml-[32px]">
          <Icon
            width="32"
            height="32"
            name="icon-united-kingdom"
            className="mr-[8px]"
          />
          English
        </p>
      </label>

      <div className=" flex justify-between mt-[32px]">
        <Button
          text={"Save"}
          className="bg-white text-black px-[101px] py-[14px] rounded-[30px] !ml-[0px] w-[245px] text-[18px] fontWeight-bold leading-[1,56]"
          svg="hidden"
        />
        <Button
          text={"Cancel"}
          svg="hidden"
          className="bg-transparent text-white border border-[#fff] px-[101px] py-[14px] rounded-[30px] !ml-[0px] w-[245px] text-[18px] fontWeight-bold leading-[1,56]"
        />
      </div>
    </>
  );
};
