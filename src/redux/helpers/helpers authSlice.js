export const handleLoginFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  state.access_token = payload.token;
};

export const handlePending = state => {
  state.isLoadig = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoadig = false;
  state.error = payload;
};

export const handleSignUpFullfilled = state => {
	state.isLoadig = false;
	state.isSignedUp = true;
};
