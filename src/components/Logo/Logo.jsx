export const Logo = () => {
  return (
    <div className="flex">
      <svg className="w-[40px] h-[40px] mr-[16px]">
        <use href="../../images/sprite.svg#logo"></use>
      </svg>
      <p className=" text-[#000] text-[22px] font-semibold leading-[1.45]">
        VocabBuilder
      </p>
    </div>
  );
};
