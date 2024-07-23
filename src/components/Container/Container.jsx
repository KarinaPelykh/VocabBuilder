export const Container = ({ children }) => {
  return (
    <div className="mx-[auto] h-screen  sm:w-[375px]    md:px-[27px] md:h-[auto]  md:w-[768px]   xl:w-[1280px] xl:py-[24px] xl:px-[20px]">
      {children}
    </div>
  );
};
