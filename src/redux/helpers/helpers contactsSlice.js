export const fetchContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const postContactFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

export const deleteContactFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload;
};

export const handleFulfilled = state => {
  state.error = null;
  state.isLoading = false;
};