"use client";
import { useSelector } from "react-redux";
import { totalPageSelect } from "../../redux/words/selector";
import clsx from "clsx";

export const WordsPagination = ({ currentPage, setCurrentPage }) => {
  const totalPage = useSelector(totalPageSelect);

  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
  console.log(totalPage, pages);
  const handelNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handelPreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handelSwitchedPage = (index) => {
    console.log(index + 1);
    if (index !== totalPage) {
      setCurrentPage(index + 1);
      return;
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPage <= 3) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPage);
      } else if (currentPage > 3 && currentPage < totalPage - 2) {
        pages.push(
          currentPage - 1,
          "...",
          currentPage,
          currentPage + 1,

          "...",
          totalPage
        );
      } else {
        pages.push(
          totalPage - 4,
          "...",
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
          totalPage
        );
      }
    }
    return pages;
  };
  return (
    <div className=" flex justify-center mx-[auto] mt-[28px]  h-[32px]">
      <button className="items-center  rounded-[8px] mr-[10px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center">
        {"<<"}
      </button>
      <button
        onClick={handelPreviousPage}
        className="items-center rounded-[8px] mr-[10px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center"
      >
        {"<"}
      </button>
      <ul className="flex text-center text-[#fff] ">
        {renderPageNumbers().map((item, index) => {
          return (
            <>
              <li
                className={clsx(
                  item === currentPage && "bg-green text-[#fff]",
                  " flex items-center justify-center rounded-[8px] w-[32px] h-[32px] text-[#000] mr-[10px] border border-[#dbdbdb]"
                )}
                key={index}
              >
                <button type="button" onClick={() => handelSwitchedPage(index)}>
                  {item}
                </button>
              </li>
              ;
            </>
          );
        })}
      </ul>
      <button
        onClick={handelNextPage}
        className="items-center rounded-[8px] mr-[10px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center"
      >
        {">"}
      </button>
      <button
        className={clsx(
          totalPage !== currentPage ? "text-green" : "text-[#000]",
          "rounded-[8px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center items-center"
        )}
      >
        {">>"}
      </button>
    </div>
  );
};
