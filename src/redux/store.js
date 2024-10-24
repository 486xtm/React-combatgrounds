import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import errorReducer from "./errorSlice";
import mailReducer from "./mailSlice";
import nukeReducer from "./nukeSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    mail: mailReducer,
    nuke: nukeReducer,
    user: userReducer,
  },
});
