import { useEffect, useState } from "react";
import LogoSvg from "../assets/LogoSvg";

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
    <div className="bg-base-200 flex justify-between w-full py-0.5 items-center px-4 z-10">
      <div className="flex items-center gap-4 text-neutral">
        <button>
          <LogoSvg />
        </button>
        <span>Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="text-neutral">
        <span>{dateTime}</span>
      </div>
    </div>
  );
};

export default MenuBar;
