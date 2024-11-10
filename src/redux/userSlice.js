import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  other: null,
  rankedData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setOther: (state, action) => {
      state.other = action.payload;
    },
    setRankingData: (state, action) => {
      state.rankedData = action.payload;
    },
  },
});

export const { setUser, setOther, setRankingData } = userSlice.actions;
export default userSlice.reducer;
