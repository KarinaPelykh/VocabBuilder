import { usePathname } from "next/navigation";
import { TableHeader } from "./TableHeader";
import { useSizeWindow } from "@/hooks";

export const WordsHeaderCell = ({ headerGroup }) => {
  const { size } = useSizeWindow();

  const pathname = usePathname();

  const isRecommendPage = pathname === "/recommend";

  const isRecommendOrMoreThenTablet = isRecommendPage || size >= 767;

  return headerGroup.headers.map((column, i) => {
    const isCategory = column.render("Header") === "Category";

    const isProgress = column.render("Header") === "Progress";

    return isCategory ? (
      isRecommendOrMoreThenTablet && <TableHeader column={column} index={i} />
    ) : isProgress ? (
      !isRecommendPage && <TableHeader column={column} index={i} />
    ) : (
      <TableHeader column={column} index={i} />
    );
  });
};
