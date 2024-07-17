"use client";
import { useSelector } from "react-redux";
import { PageSelect, totalPageSelect } from "../../redux/words/selector";
import clsx from "clsx";
import ReactPaginate from "react-paginate";
import { usePathname } from "next/navigation";

export const WordsPagination = ({ currentPage, setCurrentPage }) => {
  const totalPage = useSelector(totalPageSelect);
  const PageAmount = useSelector(PageSelect);
  const pathname = usePathname();
  const route = pathname === "/recommend";

  const pages = Array.from(
    { length: route ? PageAmount : totalPage },
    (_, index) => index + 1
  );

  const pageCount = Math.ceil(pages.length);

  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    setCurrentPage(newOffset);
  };

  const handelNextPage = (value) => {
    if (currentPage !== totalPage) {
      setCurrentPage(value);
    }
  };
  const handelPreviousPage = (value) => {
    if (currentPage === 1) return;
    setCurrentPage(value);
  };
  return (
    <div className=" flex justify-center mx-[auto] mt-[28px]  h-[32px]">
      <button
        onClick={() => {
          handelPreviousPage(1);
        }}
        className={clsx(
          currentPage !== 1 ? "text-green" : "text-[#000]",
          "rounded-[8px] ml-[10px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center items-center"
        )}
      >
        {"<<"}
      </button>
      <ReactPaginate
        breakLabel="..."
        className="flex items-center justify-center"
        nextLabel=">"
        activeClassName="active"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        marginPagesDisplayed={1}
        renderOnZeroPageCount={null}
        pageClassName="page"
        previousClassName={currentPage === 1 ? "page" : "activeButton"}
        nextClassName={currentPage >= totalPage ? "page" : "activeButton"}
        breakLinkClassName="page"
        forcePage={currentPage - 1}
      />
      <button
        onClick={() => {
          handelNextPage(pages.length);
        }}
        className={clsx(
          totalPage !== currentPage ? "text-green" : "text-[#000]",
          "rounded-[8px] ml-[10px] text-[#000] border border-[#dbdbdb] w-[32px] h-[32px] flex justify-center items-center"
        )}
      >
        {">>"}
      </button>
    </div>
  );
};