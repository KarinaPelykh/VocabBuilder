import clsx from "clsx";

export const RadioButton = ({ handelIsIrregular, irregular, className }) => {
  return (
    <ul
      className={clsx(
        "flex items-center ml-[8px]  ",
        className && "mb-[32px] md:mb-[38px]"
      )}
    >
      <li className={"text-[#000] mr-[16px] flex items-center"}>
        <input
          id="specifyColor"
          className="w-[18px] h-[18px] mr-[8px]"
          type="radio"
          value="Regular"
          checked={irregular === false}
          onChange={handelIsIrregular}
        />
        <label for="Regular" className={clsx("text-black", className)}>
          Regular
        </label>
      </li>
      <li className={"text-[#000] flex items-center"}>
        <input
          id="specifyColor"
          className="w-[18px] h-[18px] mr-[8px]"
          type="radio"
          value="Irregular"
          checked={irregular === true}
          onChange={handelIsIrregular}
        />
        <label for="Irregular" className={clsx("text-black", className)}>
          Irregular
        </label>
      </li>
    </ul>
  );
};
