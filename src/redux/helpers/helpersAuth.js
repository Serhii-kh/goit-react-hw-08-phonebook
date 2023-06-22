export const handleLoginFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  state.access_token = payload.token;
  state.isLoginned = true;
};

export const handlePending = state => {
  state.isLoadig = true;
  state.error = '';
};

export const handleRejected = (state, { error, payload }) => {
  state.isLoadig = false;
  state.error = error ? error : payload;
};

export const handleSignUpFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  // state.access_token = payload.token;
  state.isSignedUp = true;
};

export const handleProfileFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  state.profile = payload;
};
