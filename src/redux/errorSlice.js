import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  register: null,
  update: null,
  message: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setLoginError: (state, action) => {
      state.login = action.payload;
    },
    setRegisterError: (state, action) => {
      state.register = action.payload;
    },
    setUpdateError: (state, action) => {
      state.update = action.payload;
    },
    setMessageError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLoginError,
  setRegisterError,
  setUpdateError,
  setMessageError,
} = errorSlice.actions;
export default errorSlice.reducer;
