"use client";
import clsx from "clsx";

import { ItemLink } from "./ItemLink";

export const Nav = ({ className, list, active }) => {
  const routes = [
    { route: "/dictionary", text: "Dictionary", id: 1 },
    { route: "/recommend", text: "Recommend", id: 2 },
    { route: "/training", text: "Training", id: 3 },
  ];
  return (
    <nav className={clsx("hidden xl:flex", className && className)}>
      <ul className={clsx("flex justify-center ", list && list)}>
        {routes.map(({ route, text, id }) => (
          <ItemLink
            key={id}
            list={list}
            active={active}
            href={route}
            text={text}
          />
        ))}
      </ul>
    </nav>
  );
};
