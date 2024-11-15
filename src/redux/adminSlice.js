import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  crews: [],
  ads: [],
  selectedCrew: null,
};

const adminSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCrews: (state, action) => {
      state.crews = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setSelectedCrew: (state, action) => {
      state.selectedCrew = action.payload;
    },
    setAds: (state, action) => {
      state.ads = action.payload;
    },
  },
});

export const { setUsers, setCrews, setSelectedCrew, setSelectedUser, setAds } =
  adminSlice.actions;
export default adminSlice.reducer;
