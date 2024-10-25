import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "success",
  msg: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.type = action.payload.type;
      state.msg = action.payload.msg;
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
