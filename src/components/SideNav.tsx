import { Link } from "react-router-dom";
import routesList from "../config/routesList";
import ThemeChanger from "./ThemeChanger";

const SideNav = () => {
  return (
    <div className="hidden md:block sticky left-0 top-0 h-screen pl-2 pr-1">
      <div className="flex flex-col h-full items-center justify-center">
        <div className="flex flex-col justify-center bg-base-200 py-4 px-1 rounded-2xl items-center gap-1">
          {routesList.map((route, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link
                to={route.path}
                className={`btn btn-circle hover:bg-neutral`}
              >
                {route.icon}
              </Link>
              <span className="text-xs">{route.name}</span>
            </div>
          ))}
          <div className="mt-4 mb-2 h-0.5 w-full bg-neutral"></div>
          <div className="flex flex-col items-center">
            <ThemeChanger />
            {/* <span className="text-xs">{darkTheme? "light": "dark"}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
