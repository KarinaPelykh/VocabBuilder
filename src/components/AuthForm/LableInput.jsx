import clsx from "clsx";

export const LabelInput = (data) => {
  const {
    register,
    name,
    type,
    placeholder,
    error,
    onChange,
    className,
    children,
  } = data;

  return (
    <label className="relative">
      <input
        {...register}
        className={clsx(
          "w-full h-[56px] py-4 px-[18px] border border-[#12141719] border-solid rounded-m text-black mb-[15px] placeholder:text-black placeholder:text-[16px] outline-none bg-[#85aa9f19]",
          className
        )}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className=" text-[12px] leading-[1,05] font-fixelRegular  absolute top-[55px]">
        {error}
      </p>
      {children}
    </label>
  );
};
