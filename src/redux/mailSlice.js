import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  received: [],
  sent: [],
};

const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setMails: (state, action) => {
      state.received = action.payload.received;
      state.sent = action.payload.sent;
    },
    setReceivedMails: (state, action) => {
      state.received = action.payload;
    },
    setSentMails: (state, action) => {
      state.sent = action.payload;
    },
  },
});

export const { setMails, setReceivedMails, setSentMails } = mailSlice.actions;
export default mailSlice.reducer;
