import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: []
};

const achievementSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    setAllAchievements: (state, action) => {
      state.all = action.payload;
    }
  },
});

export const { setAllAchievements } = achievementSlice.actions;
export default achievementSlice.reducer;
