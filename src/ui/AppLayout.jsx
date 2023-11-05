import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
