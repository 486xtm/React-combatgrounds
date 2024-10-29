import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onlinePlayers : []
};

const onlineSlice = createSlice({
  name: "online",
  initialState,
  reducers: {
    setOnlinePlayers: (state, action) => {
      state.onlinePlayers = action.payload;
    },
  },
});

export const { setOnlinePlayers } = onlineSlice.actions;
export default onlineSlice.reducer;
