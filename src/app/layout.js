import "./globals.css";

import { MacPawFixelDisplay } from "../fonts/localFont";
import { ReduxProvider } from "../redux/provider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "VocabBuilder",
};

export default function RootLayout({ children }) {
  return (
    <html className={MacPawFixelDisplay.className} lang="en">
      <body>
        <ReduxProvider> {children}</ReduxProvider>
        <ToastContainer autoClose={1000} />
      </body>
    </html>
  );
}
