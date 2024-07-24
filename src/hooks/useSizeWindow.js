"use client";

import { useEffect, useState } from "react";

export default function useSizeWindow() {
  const [size, setSize] = useState(window.innerWidth);
  const handelChangeSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handelChangeSize);
    return () => {
      window.removeEventListener("resize", handelChangeSize);
    };
  }, []);
  return { size };
}
