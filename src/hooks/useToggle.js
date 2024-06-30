"use client";
import { useState } from "react";

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);
  return { open, close, toggle, isOpen };
}
