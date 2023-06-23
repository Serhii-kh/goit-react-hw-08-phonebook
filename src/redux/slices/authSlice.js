import {
  handleLoginFullfilled,
  handlePending,
  handleSignUpFullfilled,
  handleRejected,
  handleProfileFullfilled,
} from 'redux/helpers/auth';
import { createSlice } from '@reduxjs/toolkit';
import { getProfileThunk, logInThunk, signUpThunk } from 'components/API/api';
import { authInitialstate } from 'redux/helpers/authInitialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialstate,

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
