export const RadioButton = ({ handelIsIrregular, irregular }) => {
  return (
    <div className="flex items-center ml-[8px] ">
      <label for="htmlFor" className={"text-[#000] mr-[16px] "}>
        <input
          className="border-green"
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
    </div>
  );
};
