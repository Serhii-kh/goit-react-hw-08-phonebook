import {
  handleLoginFullfilled,
  handlePending,
  handleSignUpFullfilled,
  handleRejected,
	handleProfileFullfilled,
} from 'redux/helpers/helpersAuth';
import { createSlice } from '@reduxjs/toolkit';
import { getProfileThunk, logInThunk, signUpThunk } from 'components/api';

export const initialState = {
  access_token: '',
  isLoadig: false,
  error: null,
  isSignedUp: false,
	isLoginned: false,
	profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(logInThunk.fulfilled, handleLoginFullfilled)
      .addCase(signUpThunk.fulfilled, handleSignUpFullfilled)
      .addCase(getProfileThunk.fulfilled, handleProfileFullfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
