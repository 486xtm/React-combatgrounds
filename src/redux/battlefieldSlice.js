import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  isConqueredByOthers: false,
};

const battleFieldSlice = createSlice({
  name: "battleField",
  initialState,
  reducers: {
    setBattleField: (state, action) => {
      state.info = action.payload;
    },
    setIsConqueredByOthers: (state, action) => {
      state.isConqueredByOthers = action.payload;
    },
  },
});

export const { setBattleField, setIsConqueredByOthers } =
  battleFieldSlice.actions;
export default battleFieldSlice.reducer;
