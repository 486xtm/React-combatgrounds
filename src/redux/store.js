import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import errorReducer from "./errorSlice";
import mailReducer from "./mailSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    mail: mailReducer,
  },
});
