"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = ({ className, list, active }) => {
  const routes = [
    { route: "/dictionary", text: "Dictionary", id: 1 },
    { route: "/recommend", text: "Recommend", id: 2 },
    { route: "/training", text: "Training", id: 3 },
  ];
  const pathname = usePathname();
  return (
    <nav className={clsx("hidden xl:flex", className && className)}>
      <ul className={clsx("flex justify-center ", list && list)}>
        {routes.map(({ route, text, id }) => (
          <li
            key={id}
            className={clsx("mr-[28px] last:mr-0 ", list && "mb-[28px] mr-0")}
          >
            <Link
              className={clsx(
                pathname === route &&
                  (active
                    ? active
                    : "bg-green py-[12px] px-[20px] rounded-m text-[#fff]")
              )}
              href={route}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
