import {
  handleLoginFullfilled,
  handlePending,
  handleSignUpFullfilled,
  handleRejected,
} from 'redux/helpers/helpersAuth';
import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, signUpThunk } from 'components/api';

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
      .addCase(logInThunk.fulfilled, handleLoginFullfilled)
      .addCase(signUpThunk.fulfilled, handleSignUpFullfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
