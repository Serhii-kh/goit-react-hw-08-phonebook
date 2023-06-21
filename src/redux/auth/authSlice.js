import {
  handleLoginFullfilled,
  handlePending,
  handleSignUpFullfilled,
  handleRejected,
} from 'redux/helpers/helpers authSlice';
import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, signUpThunk } from './authThunks';

const initialState = {
  access_token: '',
  isLoadig: false,
	error: null,
	isSignedUp: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleLoginFullfilled)
      .addCase(signUpThunk.fulfilled, handleSignUpFullfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
