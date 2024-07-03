import { Filters } from "./Filters/Filters";
import { AddWordBtn } from "./AddWordBtn/AddWordBtn";
export const Dashboard = () => {
  return (
    <div className="mt-[80px] flex  items-center">
      <Filters />
      <AddWordBtn />
    </div>
  );
};
