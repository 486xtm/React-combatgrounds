import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  isRuler: false,
  region: null,
  bfs: null,
  params: null,
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
    setBFs: (state, action) => {
      state.bfs = action.payload;
    },
    setParams: (state, action) => {
      state.params = action.payload;
    }
  },
});

export const { setBattleField, setIsRuler, setRegion, setBFs, setParams } =
  battleFieldSlice.actions;
export default battleFieldSlice.reducer;
