export const RadioButton = ({ handelIsIrregular, irregular }) => {
  return (
    <ul className="flex items-center ml-[8px] ">
      <li className={"text-[#000] mr-[16px] flex items-center"}>
        <input
          className="w-[18px] h-[18px] mr-[8px]"
          type="radio"
          value="Regular"
          checked={irregular === false}
          onChange={handelIsIrregular}
        />
        <label for="Regular">Regular</label>
      </li>
      <li className={"text-[#000] flex items-center"}>
        <input
          className="w-[18px] h-[18px] mr-[8px]"
          type="radio"
          value="Irregular"
          checked={irregular === true}
          onChange={handelIsIrregular}
        />
        <label for="Irregular">Irregular</label>
      </li>
    </ul>
  );
};
