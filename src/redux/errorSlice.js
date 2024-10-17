import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: null
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setLoginError: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { setLoginError } = errorSlice.actions;
export default errorSlice.reducer;
