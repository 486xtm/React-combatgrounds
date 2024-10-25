import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

const nukeCountry = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = nukeCountry.actions;
export default nukeCountry.reducer;
