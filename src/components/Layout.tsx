import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Dock from "./Dock";
import MenuBar from "./MenuBar";
import AppContainer from "./AppContainer";

const Layout = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* <div className="flex flex-row">
        <SideNav />
        <div className="flex-1">
          <Navbar />
          <div className="p-2 flex flex-col gap-5">
            <Outlet />
          </div>
        </div>
      </div> */}
      <div className="fixed top-0 w-full">
        <MenuBar />
      </div>
      <div className="fixed top-8 bottom-24 overflow-y-scroll w-full p-1">
        <Outlet />
      </div>
      <div className="fixed bottom-0 w-full">
        <Dock />
      </div>
    </div>
  );
};

export default Layout;
