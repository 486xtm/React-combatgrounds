import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
  hofData: null,
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
  },
});

export const { setRound, setHofRound } = roundSlice.actions;
export default roundSlice.reducer;
