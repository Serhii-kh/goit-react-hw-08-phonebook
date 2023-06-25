export const handleSignUpFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  state.isSignedUp = true;
};

export const handleLoginFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  state.access_token = payload.token;
  state.isLoginned = true;
};

export const handleProfileFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  state.profile = payload;
};

export const handleLogOutFulfilled = (state) => {
	state.isLoadig = false;
	state.access_token = '';
	state.profile = [];
	state.isLoginned = false;
};

export const handlePending = state => {
  state.isLoadig = true;
  state.error = null;
};

export const handleRejected = (state, { error, payload }) => {
  state.isLoadig = false;
  state.error = payload ?? error.message;
};
