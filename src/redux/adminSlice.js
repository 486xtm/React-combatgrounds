import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  crews: [],
  mails: [],
  ads: [],
  selectedCrew: null,
  dash: null,
  battles: [],
  nuke: [],
  txs: [],
  bts: [],
  tot: 0,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.users;
      state.tot = action.payload.tot;
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
      state.mails = action.payload.mails;
      state.tot = action.payload.tot;
    },
    setBattles: (state, action) => {
      state.battles = action.payload;
    },
    setNukeHisotry: (state, action) => {
      state.nuke = action.payload.nuke;
      state.tot = action.payload.tot;
    },
    setTransactionHistory: (state, action) => {
      state.txs = action.payload.txs;
      state.tot = action.payload.tot;
    },
    setBattleHistory: (state, action) => {
      state.bts = action.payload.bts;
      state.tot = action.payload.tot;
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
  setBattles,
  setNukeHisotry,
  setTransactionHistory,
  setBattleHistory,
} = adminSlice.actions;
export default adminSlice.reducer;
