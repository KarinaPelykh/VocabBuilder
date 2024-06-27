import { Filters } from "../Filters/Filters";

export const FormSearch = () => {
  return (
    <div className="flex mr-[8px]">
      <form className="mr-[8px]">
        <input type="text" name="text" placeholder="Find the word" />
        <button></button>
      </form>{" "}
      <Filters />
    </div>
  );
};
