"use client";
import { useSelector } from "react-redux";
import { PageSelect, totalPageSelect } from "../../redux/words/selector";
import clsx from "clsx";
import ReactPaginate from "react-paginate";
import { usePathname } from "next/navigation";
import { useSizeWindow } from "@/hooks";

export const WordsPagination = ({ currentPage, setCurrentPage }) => {
  const totalPage = useSelector(totalPageSelect);

  const PageAmount = useSelector(PageSelect);

  const pathname = usePathname();

  const route = pathname === "/recommend";

  const { size } = useSizeWindow();

  const pageRange = size <= 767 ? 1 : 3;

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
    <>
      {pageCount === 0 ? null : (
        <div className=" flex justify-center mx-auto mt-7  h-8 mb-12">
          <button
            onClick={() => {
              handelPreviousPage(1);
            }}
            className={clsx(
              currentPage !== 1 ? "text-green" : "text-black",
              "rounded-xs  text-black border border-gray1 w-8 h-8 flex justify-center items-center text-[13px]"
            )}
          >
            {"<<"}
          </button>
          <ReactPaginate
            breakLabel="..."
            className="flex items-center justify-center text-[13px]"
            nextLabel=">"
            previousLabel="<"
            activeClassName="active"
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageRange}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            renderOnZeroPageCount={null}
            pageClassName="page"
            previousClassName={currentPage === 1 ? "page" : "active-button"}
            nextClassName={currentPage >= totalPage ? "page" : "active-button"}
            breakLinkClassName="page"
            forcePage={currentPage - 1}
          />
          <button
            onClick={() => {
              handelNextPage(pages.length);
            }}
            className={clsx(
              totalPage !== currentPage ? "text-green" : "text-black",
              "rounded-xs ml-[10px] text-black border border-gray1 w-8 h-8 flex justify-center items-center text-[13px]"
            )}
          >
            {">>"}
          </button>
        </div>
      )}
    </>
  );
};
