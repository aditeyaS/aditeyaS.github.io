import { useEffect, useState } from "react";
import logo from "../../public/favicon.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../common";

export const BootScreen = () => {
  const navigate = useNavigate();
  const [bootProgress, setBootProgress] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (bootProgress >= 100) {
      setTimeout(() => {
        navigate(routes.LOCK);
      }, 500);
    }
  }, [bootProgress, navigate]);

  return (
    <div className="fixed inset-0 bg-base-100 flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={logo} alt="App logo" />
        </div>
        <progress
          className="progress progress-primary w-56"
          value={bootProgress}
          max="100"
        ></progress>
      </div>
    </div>
  );
};
