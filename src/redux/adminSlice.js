import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  crews: [],
  mails: [],
  ads: [],
  selectedCrew: null,
  dash: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCrews: (state, action) => {
      state.crews = action.payload;
    },
    setSelectedCrew: (state, action) => {
      state.selectedCrew = action.payload;
    },
    setAds: (state, action) => {
      state.ads = action.payload;
    },
    setDashBoard: (state, action) => {
      state.dash = action.payload;
    },
    setMails: (state, action) => {
      state.mails = action.payload;
    },
  },
});

export const {
  setUsers,
  setCrews,
  setSelectedCrew,
  setAds,
  setDashBoard,
  setMails,
} = adminSlice.actions;
export default adminSlice.reducer;
