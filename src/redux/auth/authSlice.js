import { handleFullfilled, handlePending, handleRejected } from 'redux/helpers/helpers authSlice';
import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './authThunks';

const initialState = {
  access_token: '',
  isLoadig: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFullfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
