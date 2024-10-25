import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
};

const roundSlice = createSlice({
  name: "round",
  initialState,
  reducers: {
    setRound: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setRound } = roundSlice.actions;
export default roundSlice.reducer;
