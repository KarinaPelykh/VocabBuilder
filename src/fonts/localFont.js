import localFont from "next/font/local";
export const MacPawFixelDisplay = localFont({
  src: [
    {
      path: "./MacPawFixelDisplay-Bold.otf",
      weight: "600",
      style: "Bold",
    },
    {
      path: "./MacPawFixelDisplay-Medium.otf",
      weight: "500",
      style: "Medium",
    },
    {
      path: "./MacPawFixelDisplay-Regular.otf",
      weight: "400",
      style: "Regular",
    },
    {
      path: "./MacPawFixelDisplay-SemiBold.otf",
      weight: "600",
      style: "SemiBold",
    },
  ],
});
