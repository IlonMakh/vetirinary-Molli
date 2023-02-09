import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components//Header";
import { useLocation } from "react-router-dom";

export const MainLayouts = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <Header />}
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
