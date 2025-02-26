import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crew: null,
  ads: [],
  bosses: [],
  invites: [],
  members: [],
  info: null,
  board: [],
  pendingInviteList: 0,
  unreadCrewChatCount: 0,
};

const crweSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setCrew: (state, action) => {
      state.crew = action.payload;
    },
    setCrewAds: (state, action) => {
      state.ads = action.payload;
    },
    setBank: (state, action) => {
      state.bank = action.payload;
    },
    setBosses: (state, action) => {
      state.bosses = action.payload;
    },
    setInvites: (state, action) => {
      state.invites = action.payload;
    },
    setMembers: (state, action) => {
      state.members = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    setPendingInviteList: (state, action) => {
      state.pendingInviteList = action.payload;
    },
    setUnreadCrewChatCount: (state, action) => {
      state.unreadCrewChatCount = action.payload;
    },
  },
});

export const {
  setCrew,
  setCrewAds,
  setBank,
  setBosses,
  setInvites,
  setMembers,
  setInfo,
  setBoard,
  setPendingInviteList,
  setUnreadCrewChatCount,
} = crweSlice.actions;

export default crweSlice.reducer;
