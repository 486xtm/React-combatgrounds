import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import errorReducer from "./errorSlice";
import mailReducer from "./mailSlice";
import nukeReducer from "./nukeSlice";
import userReducer from "./userSlice";
import battleFieldReducer from "./battlefieldSlice";
import roundReducer from "./roundSlice";
import toastReducer from "./toastSlice";
import onlineReducer from "./onlineSlice";
import shopReducer from "./shopSlice";
import crweReducer from "./crewSlice";
import adminReducer from './adminSlice';
import achievementReducer from './achievementSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    mail: mailReducer,
    nuke: nukeReducer,
    user: userReducer,
    round: roundReducer,
    toast: toastReducer,
    battleField: battleFieldReducer,
    online: onlineReducer,
    shop: shopReducer,
    crew: crweReducer,
    admin: adminReducer,
    achievements: achievementReducer
  },
});
