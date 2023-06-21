import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { CONTACTS } from './constants';
import { fetchContacts, postContact, deleteContactById } from 'components/api';

const fetchContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};

const postContactFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

const deleteContactFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const handleFulfilled = state => {
  state.error = null;
  state.isLoading = false;
};

export const ContactsListSlice = createSlice({
  name: CONTACTS,
  initialState,

  extraReducers: builder => {
    builder
      .addCase([fetchContacts.fulfilled], fetchContactsFulfilled)
      .addCase([postContact.fulfilled], postContactFulfilled)
      .addCase([deleteContactById.fulfilled], deleteContactFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const contactReducer = ContactsListSlice.reducer;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
