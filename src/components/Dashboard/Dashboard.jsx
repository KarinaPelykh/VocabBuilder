import { Filters } from "./Filters/Filters";
import { AddWordBtn } from "./AddWordBtn/AddWordBtn";
export const Dashboard = () => {
  return (
    <div className="mt-[32px] mb-[31px] items-center  md:mb-0  md:mt-[80px] xl:flex  ">
      <Filters />
      <AddWordBtn />
    </div>
  );
};
