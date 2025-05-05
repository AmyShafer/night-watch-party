import { configureStore } from 'reduxjs/toolkit';
import authReducer from './slices/authSlice';

// slices/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      loggedIn: false, // or use a token/session check here
      user: null,
    },
    reducers: {
      login(state, action) {
        state.loggedIn = true;
        state.user = action.payload;
      },
      logout(state) {
        state.loggedIn = false;
        state.user = null;
      },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducers;