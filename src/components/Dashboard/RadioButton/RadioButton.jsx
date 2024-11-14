import clsx from "clsx";

export const RadioButton = ({ handelIsIrregular, irregular, className }) => {
  return (
    <ul
      className={clsx(
        "flex items-center ml-2 ",
        className && "mb-8 md:mb-[38px]"
      )}
    >
      <li className={"text-black mr-4 flex items-center"}>
        <input
          id="specifyColor"
          className="w-[18px] h-[18px] mr-2"
          type="radio"
          value="Regular"
          checked={irregular === false}
          onChange={handelIsIrregular}
        />
        <label for="Regular" className={clsx("text-black", className)}>
          Regular
        </label>
      </li>
      <li className={"text-black flex items-center"}>
        <input
          id="specifyColor"
          className="w-[18px] h-[18px] mr-4"
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
