"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOwnWords,
  getCategories,
  getWordsAll,
} from "../../redux/words/operations";
import { Table } from "./Table/Tablet";
import { WordsPagination } from "../WordsPagination/WordsPagination";
import { selectFilter, selectFilterWords } from "../../redux/words/selector";
import { usePathname } from "next/navigation";
import { Invitation } from "../ui";

export const WordsTable = () => {
  const [limit] = useState(7);

  const [currentPage, setCurrentPage] = useState(1);

  const pathname = usePathname();

  const route = pathname === "/recommend";

  const word = useSelector(selectFilter);

  const allWords = useSelector(selectFilterWords);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetOwnWords({ page: currentPage, limit }));
  }, [dispatch, limit, currentPage]);

  useEffect(() => {
    dispatch(getWordsAll({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  const handelIronArray = () => {
    return (route ? allWords : word).flatMap(
      ({ en, ua, category, progress, _id, isIrregular }) => {
        return {
          word: en,
          translation: ua,
          category,
          progress,
          id: _id,
          isIrregular,
        };
      }
    );
  };

  return (
    <>
      {!route && !word.length ? (
        <Invitation />
      ) : (
        <Table handelIronArray={handelIronArray} />
      )}

      <WordsPagination
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
