import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ReusableLink } from "../ui";

export const ItemLink = ({ list, active, href, text }) => {
  const pathname = usePathname();

  return (
    <li className={clsx("mr-7 last:mr-0 ", list && "mb-7 !mr-0")}>
      <ReusableLink
        className={clsx(
          pathname === href &&
            (active ? active : "bg-green py-3 px-5 rounded-m text-white")
        )}
        href={href}
      >
        {text}
      </ReusableLink>
    </li>
  );
};
