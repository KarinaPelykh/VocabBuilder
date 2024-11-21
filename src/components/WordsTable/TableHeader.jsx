import { Icon } from "@/components/ui";
export const TableHeader = ({ column, index }) => {
  return (
    <th
      {...column.getHeaderProps()}
      className="border-r border-gray1 font-fixelMedium text-black px-[14px] py-[16px] text-[16px]  md:p-[22px] md:text-[20px]  "
    >
      <div className="flex justify-between">
        <p>{column.render("Header")}</p>
        {index < 2 && (
          <Icon
            width="32"
            height="32"
            name={column.render("name")}
            className="hidden ml-2 md:flex"
          />
        )}
      </div>
    </th>
  );
};
