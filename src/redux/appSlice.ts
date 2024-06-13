import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type AppSliceType = {
  isPowerOn: boolean;
  isLoggedIn: boolean;
  theme: "system" | "light" | "dark";
};

const initialState: AppSliceType = {
  isPowerOn: false,
  isLoggedIn: false,
  theme: "system",
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
    changeTheme: (
      state,
      action: PayloadAction<"system" | "light" | "dark">
    ) => {
      state.theme = action.payload;
    },
  },
});

export const { setIsBooted, setIsLoggedIn, changeTheme } = appSlice.actions;

export const selectIsBooted = (state: RootState) => state.app.isPowerOn;
export const selectIsLoggedIn = (state: RootState) => state.app.isLoggedIn;
export const selectTheme = (state: RootState) => state.app.theme;

export default appSlice.reducer;
