export const WordsTableCell = ({ cell, children }) => {
  return (
    <td
      {...cell.getCellProps()}
      className="break-all relative   px-[14px] py-[16px] text-[14px] border border-[#DBDBDB] border-l-0  font-fixelMedium md:text-[18px] md:p-[22px] xl:text-[20px]"
    >
      {cell.render("Header") === "Progress" ? null : cell.render("Cell")}
      {children}
    </td>
  );
};
