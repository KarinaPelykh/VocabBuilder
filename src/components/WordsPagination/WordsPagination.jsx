"use client";
import { useSelector } from "react-redux";
import { totalPageSelect } from "../../redux/words/selector";
import clsx from "clsx";

export const WordsPagination = ({ currentPage, setCurrentPage }) => {
  const totalPage = useSelector(totalPageSelect);
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
  const handelNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handelPreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className=" flex justify-center mt-[28px] ">
      <button className="rounded-[8px] mr-[10px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center">
        {"<<"}
      </button>
      <button
        onClick={handelPreviousPage}
        className="rounded-[8px] mr-[10px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center"
      >
        {"<"}
      </button>
      <ul className="flex text-center text-[#fff] ">
        {pages.map((item, index) => {
          console.log(item === currentPage);
          return (
            <li
              className={clsx(
                item === currentPage && "bg-green text-[#fff]",
                " flex items-center justify-center rounded-[8px] w-[32px] h-[32px] text-[#000] mr-[10px] border border-[#dbdbdb]"
              )}
              key={index}
            >
              <button> {item}</button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={handelNextPage}
        className="rounded-[8px] mr-[10px]text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center"
      >
        {">"}
      </button>
      <button className="rounded-[8px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center">
        {">>"}
      </button>
    </div>
  );
};
