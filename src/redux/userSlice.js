import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  other: null
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
    }
  },
});

export const { setUser, setOther } = userSlice.actions;
export default userSlice.reducer;
