"use client";
import { useSelector } from "react-redux";
import { userIsLoggedIn } from "../redux/auth/selector";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const IsAuth = ({ children }) => {
  const router = useRouter();

  const isLoggedIn = useSelector(userIsLoggedIn);

  console.log("isLoggedIn", isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      // router.push("/login");
    }
  }, [isLoggedIn, router]);

  return children;
};
