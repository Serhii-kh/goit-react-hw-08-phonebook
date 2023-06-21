import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { CONTACTS } from './constants';
import { fetchContacts, postContact, deleteContactById } from 'components/api';
import {
  deleteContactFulfilled,
  fetchContactsFulfilled,
  handleFulfilled,
  handlePending,
  handleRejected,
  postContactFulfilled,
} from './helpers/helpers contactsSlice';

export const ContactsListSlice = createSlice({
  name: CONTACTS,
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(postContact.fulfilled, postContactFulfilled)
      .addCase(deleteContactById.fulfilled, deleteContactFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const contactReducer = ContactsListSlice.reducer;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
