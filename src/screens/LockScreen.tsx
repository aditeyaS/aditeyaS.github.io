import logo from "../../public/favicon.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { setIsLoggedIn } from "../redux/appSlice";
import { routes } from "../common";

export const LockScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onUnlock = () => {
    dispatch(setIsLoggedIn(true));
    navigate(routes.HOME);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col items-center gap-5">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={logo} alt="App logo" />
        </div>
        <h3>Hello User!</h3>
        <button className="text-sm" onClick={onUnlock}>
          Click here to unlock
        </button>
      </div>
    </div>
  );
};
