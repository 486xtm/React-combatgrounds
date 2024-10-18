import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  register: null,
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
  },
});

export const { setLoginError, setRegisterError, setUpdateError } =
  errorSlice.actions;
export default errorSlice.reducer;
