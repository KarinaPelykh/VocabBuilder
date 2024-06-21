export const Container = ({ children }) => {
  return (
    <div className="mx-[auto]  sm:w-[375px]   md:px-[32px] xl:w-[1280px] xl:py-[24px] xl:px-[20px]">
      {children}
    </div>
  );
};

