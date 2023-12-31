import { toast } from 'react-hot-toast';

export const fetchContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const postContactFulfilled = (state, { payload }) => {
	state.items.push(payload);
	toast.success(`${payload.name} contact has been added!`);
};

export const deleteContactFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
	state.items.splice(index, 1);
	toast.success(`${payload.name} contact has been deleted!!`);
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { error, payload }) => {
  state.error = payload ?? error;
  state.isLoading = false;
  toast.error(payload ?? error);
};

export const handleFulfilled = state => {
  state.error = null;
  state.isLoading = false;
};
