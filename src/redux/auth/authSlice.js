import { handleFullfilled, handlePending, handleRejected } from 'redux/helpers/helpers authSlice';

const { createSlice } = require('@reduxjs/toolkit');
const { loginThunk } = require('./authThunks');

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
export const getSignUp = state => state.isSignedUp
