import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThemeType } from "../common";
import { RootState } from "./store";

type AppSliceType = {
  isPowerOn: boolean;
  isLoggedIn: boolean;
  theme: ThemeType;
};

const initialState: AppSliceType = {
  isPowerOn: false,
  isLoggedIn: false,
  theme: ThemeType.System,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsBooted: (state, action: PayloadAction<boolean>) => {
      state.isPowerOn = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsBooted, setIsLoggedIn } = appSlice.actions;

export const selectIsBooted = (state: RootState) => state.app.isPowerOn;
export const selectIsLoggedIn = (state: RootState) => state.app.isLoggedIn;

export default appSlice.reducer;
