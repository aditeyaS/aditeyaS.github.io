import { useEffect, useState } from "react";
import favicon from "/favicon.png";
import { WiFiIcon, BatterIcon, ControlCenterIcon } from "../../icons/system";
import { useNavigate } from "react-router-dom";
import { routes } from "../../common";

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  const [dateTime, setDateTime] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      const currDate = new Date();
      setDateTime(
        currDate.toLocaleString("en-US", {
          weekday: "short", // "Tue"
          month: "short", // "Jun"
          day: "numeric", // "11"
          hour: "numeric", // "1"
          minute: "numeric", // "49"
          //   second: "numeric", // "30"
          hour12: true, // "PM"
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between md:bg-base-200 text-md w-full py-1 items-center px-4 z-10">
      <div>
        <div className="hidden md:flex items-center gap-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="w-6 h-4 flex justify-center items-center"
            >
              <img src={favicon} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] bg-base-200 bg-opacity-40 p-2 shadow text-sm rounded-box w-52"
            >
              <li>
                <button className="py-1" onClick={() => navigate(routes.ABOUT)}>
                  About Aditeya
                </button>
              </li>
              <li>
                <button className="py-1" onClick={() => navigate(routes.LOCK)}>
                  Lock screen
                </button>
              </li>
              <li>
                <button className="py-1" onClick={() => navigate(routes.POWER)}>
                  Shut down...
                </button>
              </li>
            </ul>
          </div>
          <span>Finder</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Window</span>
          <span>Help</span>
        </div>
        <span className="md:hidden">
          {dateTime?.substring(dateTime.lastIndexOf(",") + 1).trim()}
        </span>
      </div>
      <div className="flex gap-2">
        <div>
          <WiFiIcon />
        </div>
        <div>
          <BatterIcon />
        </div>
        <div className="hidden md:flex">
          <ControlCenterIcon />
        </div>
        <span className="hidden md:flex">{dateTime}</span>
      </div>
    </div>
  );
};

export default MenuBar;
