import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div className="w-full bg-base-100">
      <div className="flex flex-row">
        <SideNav />
        <div className="flex-1">
          <Navbar />
          <div className="p-2 flex flex-col gap-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
