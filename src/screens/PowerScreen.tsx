import { useNavigate } from "react-router-dom";
import { routes } from "../common";

export const PowerScreen = () => {
  const navigate = useNavigate();

  const onPowerOn = () => {
    navigate(routes.BOOT);
  };

  return (
    <div className="fixed inset-0 bg-base-100 flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <button onClick={onPowerOn}>Click to Power On</button>
      </div>
    </div>
  );
};
