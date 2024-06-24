"use client";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const Nav = () => {
  const routes = [
    { route: "dictionary", text: "Dictionary", id: 1 },
    { route: "recommend", text: "Recommend", id: 2 },
    { route: "training", text: "Training", id: 3 },
  ];
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        {routes.map(({ route, text, id }) => (
          <Link
            className={clsx(
              pathname === route && "bg-green px-[12px] py-[20px]"
            )}
            key={id}
            href={route}
          >
            {text}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
