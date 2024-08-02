"use client";
import { useSelector } from "react-redux";
import { token } from "../redux/auth/selector";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const IsAuth = ({ children }) => {
  const router = useRouter();

  const isLoggedIn = useSelector(token);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  return children;
};
