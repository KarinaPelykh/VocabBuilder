import "./globals.css";
import { MacPawFixelDisplay } from "../fonts/localFont";
export const metadata = {
  title: "VocabBuilder",
};

export default function RootLayout({ children }) {
  return (
    <html className={MacPawFixelDisplay.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
