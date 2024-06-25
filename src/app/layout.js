import "./globals.css";
import { MacPawFixelDisplay } from "../fonts/localFont";
import { ReduxProvider } from "../redux/provider.jsx";

export const metadata = {
  title: "VocabBuilder",
};

export default function RootLayout({ children }) {
  return (
    <html className={MacPawFixelDisplay.className} lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
