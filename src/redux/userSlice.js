import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  other: null,
  rankedUsers: [],
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
    setRankedUsers: (state, action) => {
      state.rankedUsers = action.payload;
    },
  },
});

export const { setUser, setOther, setRankedUsers } = userSlice.actions;
export default userSlice.reducer;
