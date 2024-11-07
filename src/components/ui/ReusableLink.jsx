import clsx from "clsx";
import Link from "next/link";

export const ReusableLink = ({ href, className, children }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};
