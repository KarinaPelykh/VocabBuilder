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
    <p className="text-[14px] font-fixelMedium text-gray mb-[11px]   flex items-center md:mb-0 md:text-[16px] md:mr-4">
      To study:
      <span className="text-[20px]  font-fixelMedium text-black ml-2">
        {statistic?.totalCount}
      </span>
    </p>
  );
};
