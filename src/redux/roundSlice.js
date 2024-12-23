import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
  hofData: null,
  salesEnabled: false,
};

const roundSlice = createSlice({
  name: "round",
  initialState,
  reducers: {
    setRound: (state, action) => {
      state.info = action.payload;
    },
    setHofRound: (state, action) => {
      state.hofData = action.payload;
    },
    setSalesEnabled: (state, action) => {
      state.info.salesEnabled = action.payload;
    },
  },
});

export const { setRound, setHofRound, setSalesEnabled } = roundSlice.actions;
export default roundSlice.reducer;
