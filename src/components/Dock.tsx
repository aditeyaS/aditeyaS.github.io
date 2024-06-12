import { Link, useLocation } from "react-router-dom";
import routesList from "../config/routesList";
import ThemeChanger from "./ThemeChanger";

const Dock = () => {
  const location = useLocation();
  // "indicator-item indicator-middle indicator-start badge badge-xs badge-accent"
  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    // <div className="hidden md:block sticky left-0 top-0 h-screen pl-2 pr-1">
    <div className="flex justify-center w-full">
      <div className="flex justify-center bg-base-200 p-4 rounded-2xl items-center gap-4">
        {routesList.map((route, index) => (
          <div key={index} className="indicator">
            <span
              className={
                isLinkActive(route.path)
                  ? "indicator-item indicator-top indicator-center badge badge-xs badge-accent"
                  : ""
              }
            ></span>
            <Link
              to={route.path}
              className={`btn btn-success h-12 w-12 p-0.5 transform transition duration-200 hover:scale-150 ${
                isLinkActive(route.path) && "btn-disabled"
              }`}
            >
              {route.icon}
            </Link>
          </div>
        ))}
        <div className="mt-4 mb-2 h-0.5 w-full bg-neutral"></div>
        <div className="flex flex-col items-center">
          <ThemeChanger />
          {/* <span className="text-xs">{darkTheme? "light": "dark"}</span> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Dock;
