import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crew: null,
  ads: [],
  bosses: [],
};

const crweSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setCrew: (state, action) => {
      state.crew = action.payload;
    },
    setCrewAds: (state, action) => {
      state.ads = action.payload;
    },
    setBank: (state, action) => {
      state.bank = action.payload;
    },
    setBosses: (state, action) => {
      state.bosses = action.payload;
    },
  },
});

export const { setCrew, setCrewAds, setBank, setBosses } = crweSlice.actions;
export default crweSlice.reducer;
