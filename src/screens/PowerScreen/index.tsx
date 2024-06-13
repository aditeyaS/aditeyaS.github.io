import { useNavigate } from "react-router-dom";
import { routes } from "../../common";
import { PowerIcon } from "./PowerIcon";

export const PowerScreen = () => {
  const navigate = useNavigate();

  const onPowerOn = () => {
    navigate(routes.BOOT);
  };

  return (
    <div className="fixed inset-0 bg-base-100 flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <button onClick={onPowerOn}>
          <div className="flex flex-col gap-5 items-center">
            <PowerIcon />
            Click to Power On
          </div>
        </button>
      </div>
    </div>
  );
};
