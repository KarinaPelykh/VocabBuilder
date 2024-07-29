"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RefreshUser } from "../redux/auth/operations";
import { refreshSelector } from "../redux/auth/selector";
export const Refresh = ({ children }) => {
  const refershUser = useSelector(refreshSelector);
  console.log("refershUser", refershUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);
  return refershUser ? <p className="bg-green">Loader</p> : <>{children}</>;
};
