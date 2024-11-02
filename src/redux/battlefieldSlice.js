import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  isRuler: false,
  region: null,
};

const battleFieldSlice = createSlice({
  name: "battleField",
  initialState,
  reducers: {
    setBattleField: (state, action) => {
      state.info = action.payload;
    },
    setIsRuler: (state, action) => {
      state.isRuler = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { setBattleField, setIsRuler, setRegion } =
  battleFieldSlice.actions;
export default battleFieldSlice.reducer;
