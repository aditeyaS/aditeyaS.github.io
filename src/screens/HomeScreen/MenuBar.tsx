import { useEffect, useState } from "react";
import favicon from "../../../public/favicon.png";
import BatterIcon from "../../icons/BatteryIcon";
import { WiFiIcon } from "../../icons/system";

const MenuBar: React.FC = () => {
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
          <button className="w-6 h-6">
            <img src={favicon} />
          </button>
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
        <span className="hidden">{dateTime}</span>
      </div>
    </div>
  );
};

export default MenuBar;
