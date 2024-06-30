import { FormSearch } from "./FormSearch/FormSearch";
import { AddWordBtn } from "./AddWordBtn/AddWordBtn";
export const Dashboard = () => {
  return (
    <div className="mt-[80px] flex justify-between items-center">
      <FormSearch />
      <AddWordBtn />
    </div>
  );
};
