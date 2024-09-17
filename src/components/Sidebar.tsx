import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="basis-[56rem] bg-dark-1 pt-12 px-20 pb-14 flex flex-col items-center h-sidebar">
      <Logo />
      <AppNav />
      <Outlet />

      <footer className="mt-auto">
        <p className="text-lg text-light-1">
          &copy; Copyright {new Date().getFullYear()} by
          WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
