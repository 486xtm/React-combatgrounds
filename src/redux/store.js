import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import errorReducer from "./errorSlice";
import mailReducer from "./mailSlice";
import nukeReducer from "./nukeSlice";
import userReducer from "./userSlice";
import battleFieldReducer from "./battlefieldSlice";
import roundReducer from "./roundSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    mail: mailReducer,
    nuke: nukeReducer,
    user: userReducer,
    round: roundReducer,
    battleField: battleFieldReducer,
  },
});
