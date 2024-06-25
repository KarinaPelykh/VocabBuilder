"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const routes = [
    { route: "/dictionary", text: "Dictionary", id: 1 },
    { route: "/recommend", text: "Recommend", id: 2 },
    { route: "/training", text: "Training", id: 3 },
  ];
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <ul className="flex justify-center ">
        {routes.map(({ route, text, id }) => (
          <li key={id} className="mr-[28px] last:mr-0">
            <Link
              className={clsx(
                pathname === route
                  ? "bg-green px-[12px] py-[20px] rounded-m text-[#fff]"
                  : "bg-white px-[12px] py-[20px]"
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
