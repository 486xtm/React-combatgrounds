import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = shopSlice.actions;
export default shopSlice.reducer;
