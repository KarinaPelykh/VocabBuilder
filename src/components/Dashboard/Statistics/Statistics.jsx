"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatistics } from "../../../redux/words/operations";
import { statisticsSelector } from "../../../redux/words/selector";

export const Statistics = () => {
  const dispatch = useDispatch();
  const statistic = useSelector(statisticsSelector);
  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);
  return (
    <p className="mr-[16px]">
      To study: <span>{statistic?.totalCount}</span>
    </p>
  );
};
