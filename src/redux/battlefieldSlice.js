import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

const battleFieldSlice = createSlice({
  name: "battleField",
  initialState,
  reducers: {
    setBattleField: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setBattleField } = battleFieldSlice.actions;
export default battleFieldSlice.reducer;
