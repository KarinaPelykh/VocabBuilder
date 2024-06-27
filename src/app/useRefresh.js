"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RefreshUser } from "../redux/auth/operations";
import { refreshSelector } from "../redux/auth/selector";
export const useRefresh = () => {
  const refershUser = useSelector(refreshSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  return refershUser;
};
