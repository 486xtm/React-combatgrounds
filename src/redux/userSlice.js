import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  other: null,
  rankedData: null,
  atts: null,
  attackResult: null,
  mission: null,
  showModal: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setOther: (state, action) => {
      state.other = action.payload;
    },
    setRankingData: (state, action) => {
      state.rankedData = action.payload;
    },
    setAttackables: (state, action) => {
      state.atts = action.payload;
    },
    setAttackResult: (state, action) => {
      state.user = action.payload.user;
      state.attackResult = action.payload.attackResult;
    },
    setMission: (state, action) => {
      state.mission = action.payload;
    },
    handleBossAttack: (state, action) => {
      state.user = {
        ...state.user,
        recruits: state.user.recruits + action.payload,
      };
    },
    toggleShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const {
  setUser,
  setOther,
  setRankingData,
  handleBossAttack,
  setAttackables,
  setAttackResult,
  toggleShowModal,
  setMission,
} = userSlice.actions;
export default userSlice.reducer;
