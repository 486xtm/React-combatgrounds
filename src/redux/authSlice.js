import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInitial: true,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.isInitial = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isInitial = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
