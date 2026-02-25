import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar userName="Jose Lugo" role="Admin" />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
