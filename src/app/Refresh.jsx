"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RefreshUser } from "../redux/auth/operations";
import { refreshSelector } from "../redux/auth/selector";
import Loading from "./Loading";
export const Refresh = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  const refreshUser = useSelector(refreshSelector);

  return refreshUser ? <Loading /> : <>{children}</>;
};
