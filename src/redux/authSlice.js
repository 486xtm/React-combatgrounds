import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isInitial : true,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      isInitial = false
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      isInitial = false
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
