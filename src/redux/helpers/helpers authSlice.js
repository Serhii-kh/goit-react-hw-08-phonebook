export const handleFullfilled = (state, { payload }) => {
  state.isLoadig = false;
  state.access_token = payload.token;
};

export const handlePending = state => {
  state.isLoadig = true;
  state.error = '';
};

export const handleRejected = (state, { error }) => {
  state.isLoadig = false;
  state.error = error.message;
};
