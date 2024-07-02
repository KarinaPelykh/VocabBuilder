import "./globals.css";

import { MacPawFixelDisplay } from "../fonts/localFont";
import { ReduxProvider } from "../redux/provider.jsx";
import { Refresh } from "./Refresh";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "VocabBuilder",
};

export default function RootLayout({ children }) {
  return (
    <html className={MacPawFixelDisplay.className} lang="en">
      <body>
        <ReduxProvider>
          <Refresh>{children}</Refresh>
        </ReduxProvider>
        <ToastContainer autoClose={1000} />
      </body>
    </html>
  );
}
