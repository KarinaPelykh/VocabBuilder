import { Suspense } from "react";
import { Header } from "../../components/Header/Header";
import Loading from "../Loading";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
