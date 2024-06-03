import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../icons/MenuIcon";
import routesList from "../config/routesList";
import ThemeChanger from "./ThemeChanger";

const Navbar: React.FC = () => {
  return (
    <div className="navbar sticky top-0 bg-base-200 w-full z-50 md:hidden">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <MenuIcon />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-max"
          >
            {routesList.map((route) => (
              <li key={route.name}>
                <Link to={route.path}>
                  {route.icon}
                  <span>{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navbar;
