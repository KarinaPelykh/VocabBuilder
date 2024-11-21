import { usePathname } from "next/navigation";
import { useSizeWindow } from "@/hooks";
import { columns } from "../columns";
import { useTable } from "react-table";
import { TableHeader } from "../TableHeader";
import { WordsTableRow } from "../WordsTableRow";

export const Table = ({ handelIronArray }) => {
  const data = handelIronArray();

  const { size } = useSizeWindow();

  const pathname = usePathname();

  const route = pathname === "/recommend";

  const tablet = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tablet;

  return (
    <div className="flex justify-center md:bg-white md:p-[18px] md:mt-7 md:rounded-m md:w-[704px] xl:w-full">
      <table
        {...getTableProps()}
        className=" w-full  md:max-h-[640px] md:w[668px]  xl:w-full "
      >
        <thead className="">
          {headerGroups.map((headerGroup, i) => (
            <tr
              className="bg-green1  "
              key={i}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, i) =>
                column.render("Header") === "Category" ? (
                  route || size >= 767 ? (
                    <TableHeader key={i} column={column} index={i} />
                  ) : null
                ) : column.render("Header") === "Progress" ? (
                  route ? null : (
                    <TableHeader key={i} column={column} index={i} />
                  )
                ) : (
                  <TableHeader key={i} column={column} index={i} />
                )
              )}
            </tr>
          ))}
        </thead>
        <tbody className="  bg-white " {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);

            return (
              <tr className=" xl:h-[72px]  " key={i} {...row.getRowProps()}>
                <WordsTableRow row={row} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// {
//   (route ? allWords : word).flatMap(
//     ({ en, ua, category, progress, _id, isIrregular }) => {
//       return (
//         <Item
//           key={_id}
//           _id={_id}
//           en={en}
//           ua={ua}
//           category={category}
//           progress={progress}
//           isIrregular={isIrregular}
//           route={route}
//         />
//       );
//     }
//   );
// }

//  <tr className=" xl:h-[72px]  " {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   console.log(cell);

//                   return (
//                     // eslint-disable-next-line react/jsx-key
//                     <td
//                       {...cell.getCellProps()}
//                       className="break-all   px-[14px] py-[16px] text-[14px] border border-[#DBDBDB] border-l-0  font-fixelMedium md:text-[18px] md:p-[22px] xl:text-[20px]"
//                     >
//                       {cell.render("Cell")}{" "}
//                     </td>
//                   );
//                 })}
//               </tr>
{
  /* <tbody className="bg-white" {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr className="xl:h-[72px]" {...row.getRowProps()} key={index}>
                {row.cells.map((cell) => {
                  const columnHeader = cell.column.Header;

                  return columnHeader === "Category" ? (
                    (route || size >= 767) && (
                      <td
                        {...cell.getCellProps()}
                        className="break-all px-[14px] py-[16px] text-[14px] border border-[#DBDBDB] border-l-0 font-fixelMedium md:text-[18px] md:p-[22px] xl:text-[20px]"
                      >
                        {cell.render("Cell")}
                      </td>
                    )
                  ) : columnHeader === "Progress" ? (
                    !route && (
                      <td
                        {...cell.getCellProps()}
                        className="break-all px-[14px] py-[16px] text-[14px] border border-[#DBDBDB] border-l-0 font-fixelMedium md:text-[18px] md:p-[22px] xl:text-[20px]"
                      >
                        {cell.render("Cell")}
                      </td>
                    )
                  ) : (
                    <td
                      {...cell.getCellProps()}
                      className="break-all px-[14px] py-[16px] text-[14px] border border-[#DBDBDB] border-l-0 font-fixelMedium md:text-[18px] md:p-[22px] xl:text-[20px]"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody> */
}
