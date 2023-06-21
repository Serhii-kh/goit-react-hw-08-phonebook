const { createSlice } = require('@reduxjs/toolkit');
const { loginThunk } = require('./authThunks');

const initialState = {
  access_token: '',
  isLoadig: false,
  error: null,
};

const handleFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  state.access_token = payload.token;
};

const handlePending = state => {
  state.isLoadig = true;
  state.error = '';
};

const handleRejected = (state, { error }) => {
  state.isLoadig = false;
  state.error = error.message;
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
