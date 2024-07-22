"use client";
import { useSelector } from "react-redux";
import { userIsLoggedIn } from "../redux/auth/selector";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export const IsAuth = ({ children }) => {
  // const isLoggedIn = useSelector(userIsLoggedIn);
  // if (!isLoggedIn) {
  //   return redirect("/registration");
  // }
  // console.log(isLoggedIn);
  return children;
};
