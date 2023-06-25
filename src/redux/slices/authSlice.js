import {
  handleLoginFullfilled,
  handlePending,
  handleSignUpFullfilled,
  handleRejected,
  handleProfileFullfilled,
	handleLogOutFulfilled,
} from 'redux/helpers/auth';
import { createSlice } from '@reduxjs/toolkit';
import { getProfileThunk, logInThunk, logOutThunk, signUpThunk } from 'components/API/api';
import { authInitialstate } from 'redux/helpers/authInitialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialstate,

  extraReducers: builder => {
    builder
      .addCase(logInThunk.fulfilled, handleLoginFullfilled)
      .addCase(signUpThunk.fulfilled, handleSignUpFullfilled)
			.addCase(getProfileThunk.fulfilled, handleProfileFullfilled)
			.addCase(logOutThunk.fulfilled, handleLogOutFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
